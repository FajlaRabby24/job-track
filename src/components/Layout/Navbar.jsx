import React, { use } from "react";
import { HiChartBar } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../store/contexts/contexts";
import userDefaultImage from "../../assets/images/defaultUserImage.png";

const Navbar = () => {
  const { user } = use(AuthContext);

  const links = (
    <div className="space-x-7 flex flex-col lg:flex-row  ">
      <NavLink to={"/"} className="text-lg font-semibold text-white">
        Home
      </NavLink>
      <NavLink to={"/about"} className="text-lg font-semibold text-white">
        About
      </NavLink>
      <NavLink to={"/blog"} className="text-lg font-semibold text-white">
        Blog
      </NavLink>
      <NavLink to={"/contact"} className="text-lg font-semibold text-white">
        Contact
      </NavLink>
    </div>
  );
  return (
    <nav className={`py-1  backdrop-blur-2xl `}>
      <div className="navbar max-w-7xl px-4 xl:px-0 mx-auto backdrop-blur-lg">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8  p-0 text-white "
                fill="nont"
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
              className="menu menu-sm dropdown-content flex flex-col bg-base-300   rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center gap-1">
            <img src="./logo.png" className="w-2/4 md:w-1/4 " alt="" />
            <span className="text-2xl font-bold text-white hidden md:block">
              JobTrack
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          {user ? (
            <div className="avatar avatar-online">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <Link to={"/my-profile"}>
                  <img
                    src={user?.photoURL || userDefaultImage}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn btn-outline btn-primary hover:bg-gradient-to-br from-primary to-secondary  rounded-full py-5 lg:py-6 px-6 lg:px-10 text-white ">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="btn  bg-gradient-to-br from-primary to-secondary border-0 rounded-full py-5 lg:py-6 px-5 lg:px-8 text-white ">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
