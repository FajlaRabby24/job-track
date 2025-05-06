import React from "react";
import SingleCompany from "./SingleCompany";

const Companies = ({ companiesData }) => {
  return (
    <div className="max-w-7xl mx-auto" id="companies">
      <h1 className="title text-5xl mb-10  ">Trusted by leading Companies</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {companiesData.map((company) => (
          <SingleCompany key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Companies;
