import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";

const router=createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      }
    ]
  },
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
    },
  }
])

export default router;