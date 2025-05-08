import React from "react";
import SingleCompany from "./SingleCompany";

const Companies = ({ companiesData }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
      <h1 className="title text-3xl  lg:text-5xl mb-6 lg:mb-10  ">
        Trusted by leading Companies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 ">
        {companiesData.map((company) => (
          <SingleCompany key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
