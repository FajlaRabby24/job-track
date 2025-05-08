import React from "react";
import globe from "../../assets/images/globe.png";

const FindTheBestJob = () => {
  return (
    <div className="max-w-7xl  mx-auto mb-28 flex flex-col gap-7  md:flex-row px-4 items-center justify-between bg-[#2427356b] lg:px-10 py-5  rounded-xl">
      {/* content  */}
      <div className="space-y-4 lg:space-y-6 w-full  lg:max-w-2xl">
        <h1 className="title text-3xl lg:text-5xl ">
          Find the best job for you all over the world.
        </h1>
        <p className="text-accent font-semibold">
          Wit one click, you can instantly find your dream job accuratly and
          quickly with worlwide coverage, and have an amazing experience.
        </p>
        <div className="flex bg-gray-800 p-2 relative rounded-full shadow-lg w-full md:max-w-md">
          <input
            type="text"
            placeholder="Search your dream job..."
            className="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="md:px-7 md:py-5 absolute   right-2 top- bg-gradient-to-br from-primary to-secondary text-white rounded-full btn ">
            Search
          </button>
        </div>
      </div>
      {/* image  */}
      <div className="">
        <img className="lg:w-4/5 mx-auto" src={globe} alt="" />
      </div>
    </div>
  );
};

export default FindTheBestJob;
