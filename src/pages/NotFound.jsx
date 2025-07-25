import React from "react";
import { Link } from "react-router";
import error from "../assets/images/error.png";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";

const NotFound = () => {
  useScroolToTop();
  useTitle("Error");
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-base-300 to-base-200">
      <div className="space-y-3 text-center">
        <img className="w-2/3 mx-auto" src={error} alt="" />
        <h1 className="text-center title text-4xl md:text-6xl">
          Page Not Found!
        </h1>
        <Link to={"/"}>
          <button className="btn mt-4 bg-gradient-to-br from-primary to-secondary border-0 rounded md:btn-xl text-white">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
