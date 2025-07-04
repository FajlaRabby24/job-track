import React, { use } from "react";
import { Link } from "react-router";
import userDefaultImage from "../assets/images/defaultUserImage.png";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../store/contexts/contexts";

const MyProfile = () => {
  useScroolToTop();
  useTitle("JobTrack | My profile");
  const { user } = use(AuthContext);

  return (
    <div className="max-w-7xl mx-auto pt-7 px-4 ">
      <h1 className="text-3xl title">Profile</h1>
      <p className="text-accent font-semibold mt-1">
        View all your profile details here.
      </p>
      <hr className=" mt-3 mb-5 border-t-2 border-[#444444] border-dashed " />
      <div className="flex flex-col md:flex-row items-stretch  gap-5">
        {/* image  */}
        <div className="flex flex-col items-center py-8 gap-4 border border-primary rounded-lg md:w-2/5">
          <div className="avatar avatar-online">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={user?.photoURL || userDefaultImage} />
            </div>
          </div>
          <h1 className="title text-2xl ">{user?.displayName}</h1>
        </div>
        {/* content  */}
        <div className="border border-primary px-6 py-4 rounded-lg md:w-3/5">
          <h1 className="text-2xl text-white  font-semibold">
            Bio & other details
          </h1>

          <li>
            <h3 className="text-accent text-sm font-semibold mb-1">Email</h3>
            <h2 className="text-white text-md mb-2 font-semibold">
              {user?.email}
            </h2>
            <hr className=" mt-3  border-t border-[#b1b1b13e] border-dashed" />
          </li>
          <li>
            <h3 className="text-accent text-sm font-semibold mb-1">
              Creation time
            </h3>
            <h2 className="text-white text-md mb-2 font-semibold">
              {user?.metadata?.creationTime}
            </h2>
            <hr className=" border-t border-[#b1b1b13e] border-dashed" />
          </li>
          <li>
            <h3 className="text-accent text-sm font-semibold mb-1">
              Last sign in time
            </h3>
            <h2 className="text-white text-md mb-2 font-semibold">
              {user?.metadata?.lastSignInTime}
            </h2>
            <hr className=" border-t border-[#b1b1b13e] border-dashed" />
          </li>
          <div className="mt-4 space-x-4">
            <Link to={"/update-profile"}>
              <button className="btn btn-success ">Update profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
