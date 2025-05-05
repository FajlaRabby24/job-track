import React from "react";
import simpleStep from "../../assets/images/simpleStepImg.png";
import { IoMdCheckbox } from "react-icons/io";

const SimpleStep = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="w-3/5 relative">
        <img src={simpleStep} alt="" className="w-3/4" />
        {/* overlay card  */}
        <div className=" w-sm rounded-xl px-4 py-2 absolute -top-5 right-1 backdrop-blur-xl border border-[#8a88ff4d]">
          <div className="flex items-center gap-4 mb-2">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold">Max Kyle</h3>
              <p className="text-accent">Software developer</p>
            </div>
          </div>
          <p className="text-accent font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
            recusandae!
          </p>
        </div>
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
