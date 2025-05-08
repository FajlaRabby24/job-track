import React, { use, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import userDefaultImage from "../assets/images/defaultUserImage.png";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../store/contexts/contexts";

const UpdateProfile = () => {
  useScroolToTop();
  useTitle("JobTrack | Update profile");
  const navigate = useNavigate();
  const location = useLocation();
  const { user, updateUserProfile } = use(AuthContext);
  const nameRef = useRef(null);
  const photoRef = useRef(null);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, photoRef.current.value);
    updateUserProfile({
      displayName: nameRef.current.value,
      photoURL: photoRef.current.value,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/my-profile", { state: location.pathname });
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-3xl pt-20 px-4  mx-auto">
      <h1 className="title mb-4 text-3xl">Update profile</h1>
      <div className="flex items-stretch flex-col md:flex-row  gap-5">
        {/* image  */}
        <div className="flex flex-col items-center py-8 gap-4 border border-primary rounded-lg md:w-1/3">
          <div className="avatar avatar-online">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={user?.photoURL || userDefaultImage} />
            </div>
          </div>
          <h1 className="title text-2xl ">{user?.displayName}</h1>
        </div>
        {/* content  */}
        <div className="border border-primary px-6 py-4 rounded-lg md:w-2/3">
          <form onSubmit={handleProfileUpdate}>
            {/* name start */}
            <label className="label text-accent mb-1">Username</label>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                required
                ref={nameRef}
                placeholder="Username"
                minLength="3"
                maxLength="30"
                title="Only letters"
              />
            </label>
            {/* name end */}
            {/* photo start  */}
            <label className="label text-accent mb-1 mt-3">Photo URL</label>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                type="url"
                required
                ref={photoRef}
                placeholder="https://photoURL.png"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
            {/* photo end */}
            <button type="submit" className="btn btn-success mt-4 ">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
