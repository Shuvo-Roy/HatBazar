import React from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { google } from "../assets";
import { useDispatch} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { addUser, removeUser } from "../redux/hatBazarSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //google login
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(addUser({
          _id:user.uid,
          name:user.displayName,
          email: user.email,
          image: user.photoURL,
        }))
        setTimeout(()=>{
          navigate("/")
        },1500)
      })
      .catch((error) => {
        console.log(error)
      });
  };
  const handleLogOut =()=>{
    signOut(auth).then(()=>{
      toast.success("Log Out Successfully");
      dispatch(removeUser())
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-sky-500 cursor-pointer duration-300"
        >
          <img src={google} alt="google logo" className="w-8" />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button onClick={handleLogOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign out
        </button>
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
  );
};

export default Login;
