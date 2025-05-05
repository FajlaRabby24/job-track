import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-br from-base-300 to-base-200">
      <header>
        <Navbar />
      </header>
      <main className="mb-28">
        <Outlet />
      </main>
      <div className="max-w-7xl mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
