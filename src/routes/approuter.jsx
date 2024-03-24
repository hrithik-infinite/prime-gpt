import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login";
import Browse from "../Pages/Browse";
import Layout from "../common/Layout";
export const approuter = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
    ],
  },
]);
