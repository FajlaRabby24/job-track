import { createBrowserRouter } from "react-router";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import CompanyDetails from "../pages/CompanyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/company.json"),
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "company-details/:name",
        Component: CompanyDetails,
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
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
