import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQnty,
  deleteItem,
  incrementQnty,
  resetCart,
} from "../redux/hatBazarSlice";
import { ToastContainer, toast } from "react-toastify";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.hat.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            className="flex items-center justify-between gap-6 mt-6"
            key={item._id}
          >
            <div className="flex items-center gap-2">
              <AiOutlineClose
                className="text-2xl text-gray-800 hover:text-red-600 cursor-pointer duration-300"
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
              />
              <img
                src={item.image}
                alt="ItemImage"
                className="w-32 h-32 object-cover"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="w-52 flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    dispatch(decrementQnty({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    }))
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer"
                >
                  -
                </button>
                <span> {item.quantity} </span>
                <button
                  onClick={() =>dispatch(incrementQnty ({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description,
                    }))}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-600 duration-300 cursor-pointer"
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty")
        }
      >
        Reset cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-500">
          <span>
            <AiOutlineArrowLeft />
          </span>{" "}
          Go shopping
        </button>
      </Link>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
