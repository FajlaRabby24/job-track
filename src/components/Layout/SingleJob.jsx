import React from "react";
import useScroolToTop from "../../hooks/useScroolToTop";

const SingleJob = ({ job }) => {
  useScroolToTop();
  const {
    bannerImage,
    description,
    id,
    jobType,
    location,
    requirements,
    salary,
    title,
  } = job;
  return (
    <div className="flex gap-6 items-start border-primary border rounded-xl ">
      <img
        src={bannerImage}
        className="w-4/12 h-full object-cover rounded-lg title"
        alt="job image"
      />
      <div className="space-y-2 py-4">
        <h1 className="title text-2xl">{title}</h1>
        <p className="font-semibold text-accent">Job Type: {jobType}</p>
        <p className="text-accent font-semibold">Salary: {salary}</p>
        <p className="text-accent font-semibold">Location: {location}</p>
        <button className="btn  bg-gradient-to-br from-primary to-secondary border-0 rounded-full text-white">
          See Details
        </button>
      </div>
    </div>
  );
};

export default SingleJob;
