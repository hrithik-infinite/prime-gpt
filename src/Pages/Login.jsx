import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login_bg from "../assets/login-bg.jpeg";
import prime_logo from "../assets/prime-logo.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import useAuthChecker from "../hooks/useAuthChecker";
const formSchema = z.object({
  username: z.string().min(2).max(20),
  password: z.string().min(2).max(10),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  useAuthChecker();
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const onSubmit = (values) => {
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, values.username, values.password).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: values.username,
          photoURL: "https://fastly.picsum.photos/id/942/200/200.jpg?hmac=Gh7W-H3ZGmweB9STLwQvq-IHkxrVyawHVTKYxy-u9mA",
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            navigate("/browse");
          })
          .catch((error) => {
            console.log(error);
          });
      });
    } else {
      signInWithEmailAndPassword(auth, values.username, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.message);
        });
    }
  };
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: `url(${login_bg}) no-repeat center center/cover`,
      }}>
      <div className="px-8 bg-gradient-to-b from-black w-60">
        <Link to="/">
          <img src={prime_logo} />
        </Link>
      </div>
      <div className="flex flex-col rounded-md md:w-4/12 p-12 bg-black bg-opacity-80 my-24 mx-auto text-white">
        <h1 className="text-white font-bold text-3xl mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{isSignInForm ? "Sign In" : "Sign Up"}</Button>
            <p className="py-1">
              {!isSignInForm ? "Already a Prime Member?" : "Not a Prime Member?"}
              <span className="text-sky-700 hover:text-sky-600 cursor-pointer pl-2" onClick={toggleSignUpForm}>
                {!isSignInForm ? "Sign In Instead" : "Join Prime Now"}
              </span>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Login;
