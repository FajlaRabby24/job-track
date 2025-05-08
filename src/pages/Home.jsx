import React from "react";
import Hero from "../components/Layout/Hero";
import HowItsWork from "../components/Layout/HowItsWork";
import Companies from "../components/Layout/Companies";
import line from "../assets/images/line.png";
import { useLoaderData } from "react-router";
import SimpleStep from "../components/Layout/SimpleStep";
import FindTheBestJob from "../components/Layout/FindTheBestJob";
import useTitle from "../hooks/useTitle";

const Home = () => {
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
