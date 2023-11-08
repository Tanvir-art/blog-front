import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-evenly py-6 items-center">
      <div className="flex[2]">
        <h2 className="text-4xl font-bold">
          Hello, I’m <span className="text-[#570df8]">Tanvir</span> <br />
          Welcome to my blog
        </h2>
        <p className="text-lg py-4">
          Don't miss out on the latest news about Travel tips, Hotels review,
          Food guide...
        </p>
      </div>

      <div className="flex[2]">
        <img src="/img/featured.png" alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
