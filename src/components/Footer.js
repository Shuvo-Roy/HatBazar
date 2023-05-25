import React from 'react'
import {LogoLight, pay } from '../assets'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineHome, AiOutlineSetting } from 'react-icons/ai'
import { BsCartCheck, BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-bodycolor text-[#949494] py-20 font-titleFont'>
        <div className='flex flex-row max-w-screen-xl mx-auto justify-center items-center gap-20'>
        {/*logo start here */}
        <div className='flex flex-col gap-7'>
        <img className='w-32' src={LogoLight} alt='logo'/>
        <p className='text-white text-sm tracking-wide'>© Shuvo Roy</p>
        <img className='w-56' src={pay} alt='logo'/>
        <div className='flex gap-5 text-lg text-gray-400'>
            <AiFillGithub className='hover:text-white duration-300 cursor-pointer'/>
            <AiFillFacebook className='hover:text-white duration-300 cursor-pointer'/>
            <AiFillYoutube className='hover:text-white duration-300 cursor-pointer'/>
            <AiFillLinkedin className='hover:text-white duration-300 cursor-pointer'/>
        </div>
        </div>
        {/*logo end here */}
        {/*Location start here */}
        <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
            <div className='text-base flex flex-col gap-2'>
                <p>Lalmonirhat,Rangpur</p>
                <p>Mobile: 12345678900</p>
                <p>Phone: 01203456789</p>
                <p>Email: shuvoroysp@gmail.com</p>
            </div>
        </div>
        {/*location end here */}
        {/*profile end here */}
        <div>
            <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
            <div className='flex flex-col gap-2 text-base'>
            <Link to="/cart"><p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsFillPersonFill/></span>my account</p></Link>
            <Link to="/cart"><p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><BsCartCheck/></span>check out</p></Link>
            <Link><p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><AiOutlineHome/></span>order trac</p></Link>
            <Link><p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span><AiOutlineSetting/></span>help & support</p></Link>
            </div>
        </div>
        {/*profile end here */}
        </div>
    </div>
  )
}

export default Footer