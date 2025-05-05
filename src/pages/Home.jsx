import React from "react";
import Hero from "../components/Layout/Hero";
import HowItsWork from "../components/Layout/HowItsWork";
import line from "../assets/images/line.png";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-base-300 to-base-200  space-y-36">
      <Hero />
      <HowItsWork />
    </div>
  );
};

export default Home;
