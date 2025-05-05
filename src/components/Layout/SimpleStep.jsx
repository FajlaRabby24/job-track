import React from "react";
import simpleStep from "../../assets/images/simpleStepImg.png";
import { IoMdCheckbox } from "react-icons/io";

const SimpleStep = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="w-3/5">
        <img src={simpleStep} alt="" className="w-3/4" />
      </div>
      <div className="space-y-7 w-2/5">
        <h1 className="title leading-16">
          Simple Step to find your dream Job faster than before
        </h1>
        <ul className="space-y-3">
          <li className="text-accent text-xl font-semibold flex items-center gap-2">
            <IoMdCheckbox size={30} color="#5f5cff" />
            Install the app and complete the Porfolio.
          </li>
          <li className="text-accent text-xl font-semibold flex items-center gap-2">
            <IoMdCheckbox size={30} color="#5f5cff" />
            Search some and apply it.
          </li>
          <li className="text-accent text-xl font-semibold flex items-center gap-2">
            <IoMdCheckbox size={30} color="#5f5cff" />
            Join interview with all you need.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SimpleStep;
