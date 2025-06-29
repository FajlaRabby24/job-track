import { motion } from "motion/react";
import React, { useState } from "react";
import chart from "../../assets/images/chart.gif";
import heroImg from "../../assets/images/hero.png";
import rocket from "../../assets/images/rocket.png";
import rocket2 from "../../assets/images/rocket2.png";

const Hero = () => {
  const [hide, setHide] = useState(false);
  return (
    <div className="rounded-2xl  lg:min-h-[calc(80vh)] flex flex-col lg:flex-row items-center gap-10 lg:gap-5 max-w-7xl mx-auto pt-8 lg:py-0 px-4 lg">
      {/* content  */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/2 space-y-3 lg:space-y-6 "
      >
        <h1 className="hero-title text-4xl md:text-5xl md:leading-14 lg:text-6xl  font-bold l:font-medium lg:leading-16">
          Best way to find your dream job with more than 1000
        </h1>
        <p className="text-accent">
          Search and find your dream Job now easiar then ever, you can simply
          browse and find a Job if you need it.
        </p>
        <button className="btn  bg-gradient-to-br from-primary to-secondary border-0 rounded-full md:btn-lg lg:btn-xl text-white">
          Come Join
        </button>
      </motion.div>
      {/* image  */}
      <div className="flex md:w-2/3 lg:w-1/2 items-start  relative">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: {
              type: "spring",
              visualDuration: 0.4,
              bounce: 0.5,
              delay: 0.3,
            },
          }}
          src={heroImg}
          className=""
          alt=""
        />
        {/* overlay card  */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="w-2/3 lg:w-sm rounded-xl px-2 lg:px-4 py-2 absolute -bottom-20 lg:-bottom-20 -left-1 lg:-left-44 backdrop-blur-xl border border-[#8a88ff4d]"
        >
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
            Software developers build, test, and maintain applications for
            digital solutions.
          </p>
        </motion.div>
        {/* overlay card  */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="w-1/2   lg:w-fit rounded-xl absolute -top-24 md:-top-24 lg:-top-24 -right-1 md:-right-20 lg:right-1  backdrop-blur-xl border border-[#8a88ff4d]"
        >
          <img className="w-full" src={chart} alt="chart image" />
        </motion.div>
      </div>
      <div className="w-1/3 h-1/3 bottom-   absolute bg-radial rounded-full  from-secondary blur-3xl"></div>
      {!hide && (
        <motion.img
          animate={{
            x: [0],
            y: [600, -800],
          }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          onAnimationComplete={() => setHide(true)}
          className="w-[200px] absolute mx-auto left-1/2 "
          src={rocket}
          alt="rocket image"
        />
      )}
      {!hide && (
        <motion.img
          animate={{
            x: [0],
            y: [-400, 800],
          }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          onAnimationComplete={() => setHide(true)}
          className="w-[200px] absolute mx-auto left-[47%]  "
          src={rocket2}
          alt="rocket image"
        />
      )}
    </div>
  );
};

export default Hero;
