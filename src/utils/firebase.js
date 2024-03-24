// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNFxpiXjHuSoxgb7QPQ-XshtzX7Tfjbuo",
  authDomain: "prime-gpt-a0ba8.firebaseapp.com",
  projectId: "prime-gpt-a0ba8",
  storageBucket: "prime-gpt-a0ba8.appspot.com",
  messagingSenderId: "419135239058",
  appId: "1:419135239058:web:aae7c49bc7e71dccbd074b",
  measurementId: "G-Z0CT5R0PKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
getAnalytics(app);
export const auth = getAuth();
