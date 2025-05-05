import React from "react";
import Hero from "../components/Layout/Hero";
import HowItsWork from "../components/Layout/HowItsWork";
import Companies from "../components/Layout/Companies";
import line from "../assets/images/line2.png";
import { useLoaderData } from "react-router";
import SimpleStep from "../components/Layout/SimpleStep";

const Home = () => {
  const companiesData = useLoaderData();
  return (
    <div
      className="  space-y-52 "
      style={{
        backgroundImage: `url(${line})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Hero />
      <HowItsWork />
      <Companies companiesData={companiesData} />
      <SimpleStep />
    </div>
  );
};

export default Home;
