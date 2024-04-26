import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../common/Layout";
import ErrorPage from "../Pages/ErrorPage";
import Shimmer from "../components/Shimmer";

const Login = lazy(() => import("../Pages/Login"));
const LandingPage = lazy(() => import("../Pages/LandingPage"));
const Browse = lazy(() => import("../Pages/Browse"));
const MoviePlayer = lazy(() => import("../Pages/MoviePlayer"));
const SearchPage = lazy(() => import("../Pages/SearchPage"));
const PlayMovie = lazy(() => import("../Pages/PlayMovie"));
export const approuter = createBrowserRouter([
  {
    path: "login",
    element: (
      <Suspense fallback={<Shimmer />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Shimmer />}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "browse",
        errorElement: <ErrorPage />,
        element: (
          <Suspense fallback={<Shimmer />}>
            <Browse />
          </Suspense>
        ),
      },
      {
        path: "browse/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <MoviePlayer />
          </Suspense>
        ),
      },
      {
        path: "play/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <PlayMovie />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<Shimmer />}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
]);
