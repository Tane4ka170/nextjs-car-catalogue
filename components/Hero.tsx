"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-3 padding-x">
        <h1 className="hero__title">
          {" "}
          Discover, book, or rent a car quickly and effortlessly!
        </h1>
        <p className="hero__subtitle">
          Enhance your car rental experience with our easy and efficient booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-green text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>

          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
