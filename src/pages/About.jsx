import React from "react";
import attach from "../assets/images/attach.png";
import bell from "../assets/images/bell.png";
import clock from "../assets/images/clock.png";
import dashboard from "../assets/images/dashboard.png";
import documentImg from "../assets/images/document.png";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";

const About = () => {
  useScroolToTop();
  useTitle("JobTrack | About");
  return (
    <div className="max-w-5xl px-4  space-y-4 mx-auto pt-8 md:pt-12 md:pb-20">
      <h1 className="text-white font-semibold text-2xl md:text-3xl ">
        Stay on top of your job hunt. Track every opportunity effortlessly.
      </h1>
      <p className="text-accent font-semibold">
        Job Track is a smart job application tracker designed to help job
        seekers stay organized, never miss a deadline, and maximize their
        chances of landing their dream job.
      </p>
      <p className="text-accent flex flex-col gap-1">
        <span className="title text-xl md:text-2xl">Our Mission:</span>{" "}
        <span>
          To empower job seekers with tools that make job tracking simple,
          visual, and stress-free
        </span>
      </p>
      <h3 className="title text-xl md:text-2xl mb-2">Key fetures</h3>
      <ul className="space-y-2">
        <li className="text-accent flex items-center font-semibold gap-1">
          <img className="w-[25px]" src={documentImg} alt="" />
          Track applied jobs
        </li>
        <li className="text-accent flex items-center font-semibold gap-1">
          <img className="w-[25px]" src={clock} alt="" />
          Set interview & follow-up reminders
        </li>
        <li className="text-accent flex items-center font-semibold gap-1">
          <img className="w-[25px]" src={dashboard} alt="" />
          Visual progress dashboard
        </li>
        <li className="text-accent flex items-center font-semibold gap-1">
          <img className="w-[25px]" src={attach} alt="" />
          Attach resumes and notes to each job
        </li>
        <li className="text-accent flex items-center font-semibold gap-1">
          <img className="w-[25px]" src={bell} alt="" />
          Smart alerts & status tracking
        </li>
      </ul>
      <p className="text-accent flex flex-col gap-1">
        <span className="title text-xl md:text-2xl">Who It’s For</span>{" "}
        <span>
          Whether you're a recent graduate, freelancer, or experienced
          professional — Job Track helps you stay in control of your job search.
        </span>
      </p>
    </div>
  );
};

export default About;
