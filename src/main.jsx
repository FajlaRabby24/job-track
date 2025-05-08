import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import "./index.css";
import { router } from "./Routes/router";
import AuthProvider from "./store/Provider/AuthProvider";

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
