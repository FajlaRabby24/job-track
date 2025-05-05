import React from "react";

const SingleCompany = ({ company }) => {
  const { id, logo, name } = company;
  console.log(company);
  return (
    <div className="px-6 py-4 rounded-xl bg-[#ffffff15] space-y-2  hover:bg-gradient-to-br from-primary hover:to-secondary transition-all duration-1000 ease-in-out">
      <img src={logo} className="max-w-1/2 cursor-pointer " alt="image" />
      <h2 className="text-white text-3xl font-semibold">{name}</h2>
      <p className="text-accent font-semibold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        facilis.
      </p>
    </div>
  );
};

export default SingleCompany;
