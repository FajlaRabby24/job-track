import React from "react";
import Hero from "../components/Layout/Hero";
import HowItsWork from "../components/Layout/HowItsWork";
import Companies from "../components/Layout/Companies";
import line from "../assets/images/line2.png";
import line2 from "../assets/images/line3.png";
import { useLoaderData } from "react-router";

const Home = () => {
  const companiesData = useLoaderData();
  return (
    <div
      className="  space-y-52 "
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
    </div>
  );
};

export default Home;
