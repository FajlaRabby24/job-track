import React from "react";
import heroImg from "../../assets/images/hero.png";
import chart from "../../assets/images/chart.gif";

const Hero = () => {
  return (
    <div className="rounded-2xl min-h-[calc(80vh)] flex items-center gap-10 max-w-7xl mx-auto">
      {/* content  */}
      <div className=" w-1/2 space-y-8 ">
        <h1 className="hero-title text-7xl  font-medium leading-20">
          Best way to find your dream job with more than 1000
        </h1>
        <p className="text-accent">
          Search and find your dream Job now easiar then ever, you can simply
          browse and find a Job if you need it.
        </p>
        <button className="btn  bg-gradient-to-br from-primary to-secondary border-0 rounded-full btn-xl text-white">
          Come Join
        </button>
      </div>
      {/* image  */}
      <div className="flex w-1/2 items-start relative">
        <img src={heroImg} className="" alt="" />
        {/* overlay card  */}
        <div className=" w-sm rounded-xl px-4 py-2 absolute -bottom-5 -left-52 backdrop-blur-xl border border-[#8a88ff4d]">
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
        {/* overlay card  */}
        <div className=" w-fit rounded-xl absolute -top-5 -right-32 backdrop-blur-xl border border-[#8a88ff4d]">
          <img src={chart} alt="" />
        </div>
      </div>
      <div className="w-1/3 h-1/3 bottom-   absolute bg-radial rounded-full  from-secondary blur-3xl"></div>
    </div>
  );
};

export default Hero;
