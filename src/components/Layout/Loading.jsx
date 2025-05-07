import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-434px)] flex justify-center pt-10 ">
      <MoonLoader color="#df6fa8" />
    </div>
  );
};

export default Loading;
