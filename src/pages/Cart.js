import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"
import { emptyCart} from '../assets'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const Cart = () => {
    const productData = useSelector((state)=> state.hat.productData);
    const userInfo = useSelector((state) => state.hat.userInfo); // select from redux store
    const [payNow, setPayNow] = useState(false)

    const [totalAM,setTotalAM] = useState("")
    useEffect(()=>{
      let price= 0
      productData.map((item)=>{
        price += item.price * item.quantity
        return price
      })
      setTotalAM(price.toFixed(2))
    },[productData])

    // check out handle with authentication
    const handleCheckOut= ()=>{
      if(userInfo){
        setPayNow(true)
      }else{
        toast.error("Please sign in to Checkout")
      }
    }

    // backend to frontend payment system
    const payment = async(token)=>{
      await axios.post("http://localhost:8000/pay",
      {amount: totalAM * 100,
      token : token}
      )
    }
    if(productData.length===0){
      return(
        <div className='flex flex-col justify-center items-center bottom-4'>
        <img className='h-54 w-96 object-cover' src={emptyCart} alt='Empty Cart'/>
        <Link to="/">
        <button className="mt-8 ml-7 mb-8 flex items-center gap-1 text-green-500 hover:text-black duration-500">
          <span>
            <AiOutlineArrowLeft />
          </span>{" "}
          Go shopping
        </button>
      </Link>
        </div>
      )
    }else
  return (
    <div>
        <div className='max-w-screen-xl mx-auto py-20 flex'>
            <CartItem/>
            <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-300 pb-6'>
                <h2 className='text-2xl font-titleFont font-medium'>Cart Total</h2>
                <p className='flex items-center gap-4 text-base'>Subtotal {" "}<span className='font-titleFont font-bold text-lg'>${totalAM}</span></p>
                
                <p className='flex items-center gap-4 text-base'>Shipping {" "}<span className='font-titleFont font-bold text-lg'>$200</span></p>
            </div>
            <p className='font-titleFont font-semibold flex justify-between mt-6'>{" "} Total <span className='text-xl font-bold'>${totalAM}</span></p>
            <button onClick={handleCheckOut} className='w-full bg-black text-white py-3 px-6 hover:bg-gray-800 duration-300'>Procced to Checkout</button>
            {
              payNow && (
                <div className='w-full mt-6 flex items-center justify-center'>
                  <StripeCheckout
                    stripeKey='pk_test_51N6n07A2oTYomJWTMXTUlO6VNj8lASs02rz8ys0JDr8UxGCpE4ZZancbrDkoALeABQn19Lq5qixJEH2FkMAUn0Vn00GG2mZ1ac'
                    name='Hat Bazar shopping'
                    amount={totalAM * 100}
                    Label='Pay to HatBazar'
                    description={`Your payment amount is $${totalAM}`}
                    token={payment}
                    email={userInfo.email}
                  />
                </div>

              )
            }
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

export default Cart