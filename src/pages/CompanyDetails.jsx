import React from "react";
import { useLoaderData } from "react-router";
import SingleJob from "../components/Layout/SingleJob";

const CompanyDetails = () => {
  const data = useLoaderData();
  const { id, industry, name, logo, location, website } = data;
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="title text-3xl mb-6 pt-10">Company Details</h1>
      <div className=" flex gap-6 items-center justify-center  bg-[#2427356b] py-6  rounded-xl">
        <div className="max-w-1/12 ">
          <img className="w-full" src={logo} alt="" />
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-semibold title">{name}</h2>
          <p className="text-accent font-semibold">Location: {location}</p>
          <p className="text-accent font-semibold">Industry: {industry}</p>
        </div>
      </div>
      <h1 className="title text-2xl mb-6 pt-5">Avalable Jobs</h1>
      <div className="grid grid-cols-1 gap-4 rounded-xl">
        {data.jobs.map((job) => (
          <SingleJob key={job.id} job={job} website={website} />
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;
