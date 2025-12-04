import React, { useState, useEffect } from "react";
import banner01 from "../assets/banner-1.jpg";
import banner02 from "../assets/banner2.jpg";
import banner03 from "../assets/banner3.jpg";

const Banner = () => {
  const banners = [banner01, banner02, banner03];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="w-full pt-12">
      <div className="carousel w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <img
              src={banner}
              className="w-full h-full object-cover"
              alt={`Banner ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
