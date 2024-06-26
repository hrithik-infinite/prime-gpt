import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
const useAuthChecker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname: currentRoute } = useLocation();

  useEffect(() => {
    const unsubscribeEL = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
        if (currentRoute === "/login" || currentRoute === "/") navigate("/browse");
      } else {
        dispatch(removeUser());
        if (!(currentRoute === "/login")) navigate("/");
      }
    });

    //cleanup
    () => unsubscribeEL();
  }, []);
};

export default useAuthChecker;
