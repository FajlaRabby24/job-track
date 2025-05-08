import React from "react";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";

const Contact = () => {
  useScroolToTop();
  useTitle("JobTrack | Contact");
  return (
    <div className="max-w-7xl text-center  pt-20 mx-auto">
      <h1 className="title text-3xl ">Contact coming soon...</h1>
    </div>
  );
};

export default Contact;
