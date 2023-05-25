import React from "react";
import { adidas, apple, nike } from '../assets'

export const Brand = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10 flex gap-10  group relative'>
      <div className="w-32 h-24 cursor-pointer overflow-hidden flex items-center justify-center rounded-lg">
        <div className="bg-brandcolor p-5 rounded-lg">
          <img className="object-cover w-full h-full" src={adidas} alt="" />
        </div>
      </div>
      <div className="w-32 h-24 cursor-pointer overflow-hidden flex items-center justify-center rounded-lg">
        <div className="bg-brandcolor p-5 rounded-lg">
          <img className="object-cover" src={apple} alt="" />
        </div>
      </div>
      <div className="w-32 h-24 cursor-pointer overflow-hidden flex items-center justify-center rounded-lg">
        <div className="bg-brandcolor p-5 rounded-lg">
          <img className="object-cover" src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};
