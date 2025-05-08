import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-br from-base-300 to-base-200">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className=" min-h-[calc(100vh-434px)]">
        <Outlet />
      </main>
      <div className="max-w-7xl mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
