import React, { useState } from "react";
import useScroolToTop from "../../hooks/useScroolToTop";
import Modal from "./Modal";

const SingleJob = ({ job, website }) => {
  const [isOpen, setIsOpen] = useState(false);

  useScroolToTop();
  const { bannerImage, jobType, location, salary, title } = job;
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-start border-primary border rounded-xl ">
      <img
        src={bannerImage}
        className="md:w-4/12  min-h-[284px] object-cover rounded-lg title"
        alt="job image"
      />
      <div className="space-y-2 px-4 md:px-0  w-full pb-4 md:py-4">
        <h1 className="title text-2xl">{title}</h1>
        <p className="font-semibold text-accent">Job Type: {jobType}</p>
        <p className="text-accent font-semibold">Salary: {salary}</p>
        <p className="text-accent font-semibold">Location: {location}</p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="btn  bg-gradient-to-br from-primary to-secondary border-0  rounded-full text-white"
        >
          See Details
        </button>
        {/* modal start  */}
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          job={job}
          website={website}
        />
        {/* modal end */}
      </div>
    </div>
  );
};

export default SingleJob;
