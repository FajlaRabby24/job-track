import { createBrowserRouter } from "react-router";
import Loading from "../components/Layout/Loading";
import MainLayout from "../components/Layout/MainLayout";
import About from "../pages/About";
import Blog from "../pages/Blog";
import CompanyDetails from "../pages/CompanyDetails";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        HydrateFallback: Loading,
        loader: () => fetch("/company.json"),
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "company-details/:name",
        Component: CompanyDetails,
        HydrateFallback: Loading,
        loader: async ({ params }) => {
          return await fetch("/company.json")
            .then((res) => res.json())
            .then((data) => {
              return data.find(
                (company) => company.name.toLowerCase() === params.name
              );
            });
        },
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "/reset-password",
        Component: ResetPassword,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
