import { createBrowserRouter } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import CompanyDetails from "../pages/CompanyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ResetPassword from "../pages/ResetPassword";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Loading from "../components/Layout/Loading";

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
