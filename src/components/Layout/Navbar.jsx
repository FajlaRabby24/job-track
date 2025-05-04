import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <div className="space-x-7">
      <NavLink to={"/"} className="text-lg font-semibold">
        Find a job
      </NavLink>
      <NavLink to={"/about"} className="text-lg font-semibold">
        Conpanies
      </NavLink>
      <NavLink to={"/services"} className="text-lg font-semibold">
        How it's work
      </NavLink>
      <NavLink to={"/blog"} className="text-lg font-semibold">
        Blog
      </NavLink>
      <NavLink to={"/contact"} className="text-lg font-semibold">
        Contact
      </NavLink>
    </div>
  );
  return (
    <nav className="max-w-7xl mx-auto ">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <span className="text-3xl font-semibold">HireMe</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link to={"/login"}>
            <button className="btn btn-outline rounded-full p-6 hover:btn-neutral">
              Login
            </button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-neutral rounded-full p-6">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
