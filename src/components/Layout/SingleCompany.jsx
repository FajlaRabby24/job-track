import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router";

const SingleCompany = ({ company }) => {
  const { logo, name } = company;
  return (
    <Link to={`/company-details/${name.toLowerCase()}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 lg:px-6 py-4 text-center cursor-pointer rounded-xl bg-[#ffffff3c] lg:bg-[#ffffff15] space-y-2 lg:min-h-[207px] lg:max-h-[207px] hover:bg-gradient-to-br from-secondary hover:to-primary "
      >
        <img
          src={logo}
          className="max-w-1/5 mx-auto md object-contain lg:max-w-1/2 min--[135px] "
          alt="image"
        />
        <h2 className="text-white text-3xl font-semibold">{name}</h2>
        {/* <p className="text-accent font-semibold">{description}</p> */}
      </motion.div>
    </Link>
  );
};

export default SingleCompany;
