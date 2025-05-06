import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/router";
import AuthProvider from "./store/Provider/AuthProvider";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer
        autoClose={2000}
        position="top-left"
        draggable={true}
        transition={Bounce}
      />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
