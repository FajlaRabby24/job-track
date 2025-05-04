import { createBrowserRouter } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
