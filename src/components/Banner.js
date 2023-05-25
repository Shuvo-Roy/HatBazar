import React, { useState } from "react";
import { bag, elec, man, perfume } from "../assets";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [bag, elec, man, perfume];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-700 overflow-hidden object-cover"
        >
        <div className="absolute inset-0 bg-opacity-50">
          <div className="flex flex-col h-full mt-8 justify-start relative">
            <div>
            <p className="ml-40 text-3xl text-black tracking-wider">Greate Discount to your first shopping<br/>Grab up to 40% discount</p>
            <Link to="/login"><button  className="ml-40 mt-6 text-black tracking-wider border border-orange-400 rounded-lg p-2 text-xl cursor-pointer">Sign up</button></Link>
            </div>
          </div>
        </div>
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt=""
            loading="priority"/>
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt=""
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt=""
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt=""
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
            onClick={prevSlide}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
            onClick={nextSlide}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
