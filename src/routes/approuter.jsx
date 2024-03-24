import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";

export const approuter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
