import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/hatBazarSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
  const dispatch = useDispatch()// send data to redux store
  const [details, setDetails] = useState([])


  let [qnty,setQnty] = useState(1)

  const location = useLocation()
  useEffect(()=>{
    setDetails(location.state.item)
  },[])
  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        <div className='w-2/5 relative'>
          <img className='w-full h-[500px] object cover' src={details.image} alt='product Image'/>
          <div className='absolute top-4 right-0'>
          {details.isNew && (
            <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>Sale</p>
          )}
        </div>
        </div>
        <div className='w-3/5 flex flex-col justify-center gap-12'>
        <div>
          <h2 className='text-4xl font-semibold'>{details.title}</h2>
          <div className='flex items-center gap-4 mt-3'>
          <p className='line-through text-gray-500'>${details.oldPrice}</p>
          <p className='text-2xl font-semibold'>${details.price}</p>
          </div>
        </div>
        <div className='flex items-center gap-2 text-base'>
          <div className='flex'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <p className='text-xs text-gray-500'>(1 Customer review)</p>
          
        </div>
        <p className='text-base text-gray-500 -mt-3'>{details.description}</p>
        <div className='flex gap-4'>
          <p className='text-base text-gray-500'>Category: <span className='font-medium capitalize border border-sky-200 px-1 rounded'>{details.category}</span></p>
        <p className='text-base text-gray-500'>Brand: <span className='font-medium capitalize border border-sky-200 px-1 rounded'>{details.brand}</span></p>
          </div>
        <div className='flex gap-4'>
          <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
            <p className='text-sm'>Quantity</p>
            <div className='flex items-center gap-4 text-sm font-semibold'>
            <button onClick={()=> setQnty(qnty ===1 ?(qnty= 1):qnty - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer'>-</button>
            <span> {qnty} </span>
            <button onClick={()=> setQnty(qnty + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer'>+</button>
            </div>
          </div>
          <button onClick={()=>dispatch(addToCart({
            _id: details._id,
            title: details.title,
            image: details.image,
            price: details.price,
            quantity: qnty,
            description: details.description,
          }))& toast.success(`${details.title}is added`)} className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart</button>
        </div>
        
        </div>
        

      </div>
      <ToastContainer position='top-center'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
        />
    </div>
  )
}

export default Product