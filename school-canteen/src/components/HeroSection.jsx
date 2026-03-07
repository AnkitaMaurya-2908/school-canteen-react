import React from "react";
import { images } from "../assets/assests";
import Button from "./Home/Button";
import ButtonWithIcon from "./Home/ButtonWithIcon";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative h-[34vw] bg-red-100 mt-4 rounded-lg overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Text overlay */}
        <div className="mt-12 absolute inset-0 flex flex-col justify-center px-[5%]">
          <p className="text-white/80 text-[1.2vw] font-medium tracking-widest uppercase mb-2">
            Welcome to EdzyCanteen
          </p>
          <h1 className="text-white font-black text-[3.5vw] leading-tight mb-4">
            Fresh Food, <br />
            <span className="text-[#f9844a]">Every Day.</span>
          </h1>
          <p className="text-white/70 text-[1.1vw] max-w-[35vw] leading-relaxed mb-6">
            Nutritious meals made fresh each morning by our kitchen team.
            Choose, order, and collect — it's that easy.
          </p>
          <button>
            <ButtonWithIcon
              className="px-4 py-2 hidden md:flex"
              label="View Today's Menu"
            />
          </button>
        </div>
        <Button className="absolute top-2 left-3 hidden md:block">Fresh</Button>
        <Button className="absolute top-2 left-22 md:left-26 xl:left-28 hidden md:block ">
          Snacks
        </Button>
        <Button className="absolute top-12 left-3 hidden md:block">
          Quick Bites
        </Button>
        <ButtonWithIcon
          className="absolute top-2 right-3 px-4 py-1 "
          label="Order Now"
          onClick={() => console.log("clicked")}
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentImage ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;