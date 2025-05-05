import React from "react";
import globe from "../../assets/images/globe.png";

const FindTheBestJob = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#2427356b] px-10 py-5  rounded-xl">
      <div className="space-y-6 max-w-2xl">
        <h1 className="title text-5xl ">
          Finde the best job for you all over the world.
        </h1>
        <p className="text-accent font-semibold">
          Wit one click, you can instantly find your dream job accuratly and
          quickly with worlwide coverage, and have an amazing experience.
        </p>
        <div class="flex bg-gray-800 p-2 rounded-full shadow-lg w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your dream job..."
            class="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <button class="px-12 py-7 bg-in bg-gradient-to-br from-primary to-secondary text-white rounded-full btn ">
            Search
          </button>
        </div>
      </div>
      <div>
        <img className="w-4/5" src={globe} alt="" />
      </div>
    </div>
  );
};

export default FindTheBestJob;
