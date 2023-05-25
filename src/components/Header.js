import React from "react";
import { Logo,cart } from "../assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.hat.productData); // select from redux store
  const userInfo = useSelector((state) => state.hat.userInfo); // select from redux store
  return (
    <div className="w-full h-20 bg-white border-b-[.5px] font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-4 text-black">
            <li className="text-base  font-bold cursor-pointer duration-300 hover:bg-gray-100 p-2 rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base font-bold cursor-pointer duration-300 hover:bg-gray-100 p-2 rounded-md">
            <Link to="/mens">Men</Link>
            </li>
            <li className="text-base font-bold hover:bg-gray-100 p-2 rounded-md cursor-pointer duration-300">
              <Link to="/womens">Women</Link>
            </li>
            <li className="text-base font-bold hover:bg-gray-100 p-2 rounded-md cursor-pointer duration-300">
            <Link to="/electronics">Electronics</Link>
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative text-green-600">
              <img className="w-6" src={cart} alt="" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login" className="flex flex-col items-center justify-center text-black">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://img.freepik.com/free-photo/man-isolated-showing-emotions-end-gestures_1303-30095.jpg?w=900&t=st=1683776379~exp=1683776979~hmac=faac542c8e455db026fdcd43a099bd2495f135f4ee4fd43779fd9d85fdbce8d9"
              }
              alt=""
            />{userInfo && (
            <p className="text-base font-titleFont font-semibold">
              {userInfo.name}
            </p>
          )}
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
