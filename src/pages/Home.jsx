import React from "react";
import { useLoaderData } from "react-router";
import line from "../assets/images/line.png";
import Companies from "../components/Layout/Companies";
import FindTheBestJob from "../components/Layout/FindTheBestJob";
import Hero from "../components/Layout/Hero";
import HowItsWork from "../components/Layout/HowItsWork";
import SimpleStep from "../components/Layout/SimpleStep";
import useScroolToTop from "../hooks/useScroolToTop";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useScroolToTop();
  useTitle("JobTrack");
  const companiesData = useLoaderData();
  return (
    <div
      className="  space-y-60 "
      style={{
        backgroundImage: `url(${line})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Hero />

      <HowItsWork />
      <Companies companiesData={companiesData} />
      <SimpleStep />
      <FindTheBestJob></FindTheBestJob>
    </div>
  );
};

export default Home;
