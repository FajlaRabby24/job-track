import React from "react";
import signup from "../../assets/images/signup.png";
import info from "../../assets/images/info.png";
import payment from "../../assets/images/payment.png";
import result from "../../assets/images/result.png";

const howWorks = [
  {
    id: 0,
    img: signup,
    title: "Sign UP",
    descrtiption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis.",
  },
  {
    id: 1,
    img: info,
    title: "Add your info",
    descrtiption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis.",
  },
  {
    id: 2,
    img: payment,
    title: "Make a payment",
    descrtiption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis.",
  },
  {
    id: 3,
    img: result,
    title: "Get the result",
    descrtiption:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis.",
  },
];

const HowItsWork = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <h1 className="title text-white mb-10">How it's work</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {howWorks.map((work) => (
            <div
              key={work.id}
              className="px-6 py-4 rounded-xl bg-[#ffffff1d]  space-y-2"
            >
              <img src={work.img} alt="image" />
              <h2 className="text-white text-2xl font-semibold">
                {work.title}
              </h2>
              <p className="text-accent font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, facilis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
