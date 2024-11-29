import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoutes from "./PrivateRoutes";
import ServiceDetails from "../pages/ServiceDetails";
import ErrorPage from "../pages/ErrorPage";
import Reset from "../pages/Reset";
import Events from "../pages/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("services.json"),
        element: <HomePage></HomePage>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <ProfilePage></ProfilePage>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/services/:id",
    element: (
      <PrivateRoutes>
        <ServiceDetails></ServiceDetails>
      </PrivateRoutes>
    ),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "/events",
    element: (
      <PrivateRoutes>
        <Events></Events>
      </PrivateRoutes>
    ),
  },
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
    },
  },
]);

export default router;
