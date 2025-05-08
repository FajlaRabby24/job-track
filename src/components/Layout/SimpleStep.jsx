import React from "react";
import { IoMdCheckbox } from "react-icons/io";
import simpleStep from "../../assets/images/simpleStepImg.png";

const SimpleStep = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl px-4 lg:px-0 mx-auto flex flex-col gap-10 md:gap-3 lg:gap-0 md:flex-row items-center justify-between">
        {/* image  */}
        <div className="lg:w-3/5 md:w-1/2  relative ">
          <img src={simpleStep} alt="" className="lg:w-3/4" />
          {/* overlay card  */}
          <div className="w-3/4 lg:w-sm rounded-xl px-2 lg:px-4 py-2 absolute -top-32 lg:-top-5 -right-1 lg:right-1 backdrop-blur-xl border border-[#8a88ff4d]">
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
            <p className="text-accent  lg:font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo, recusandae!
            </p>
          </div>
        </div>
        {/* content  */}
        <div className="space-y-4  lg:space-y-7 md:w-1/2 lg:w-2/5 ">
          <h1 className="title text-4xl  lg:text-5xl lg:leading-16">
            Simple Step to find your dream Job faster than before
          </h1>
          <ul className="space-y-2 lg:space-y-3">
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
      <div className="w-1/3 h-2/3 bottom-0 right-0  absolute bg-radial rounded-full  from-secondary blur-3xl"></div>
    </div>
  );
};

export default SimpleStep;
