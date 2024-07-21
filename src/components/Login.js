import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {
    const [isSignInForm,setIsSignInForm]= useState(true);
    const handleSignInToggle= ()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div >
        <Header/>
        <img className='absolute' alt="" src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg 1800w"
         ></img>

         <form className=' rounded-lg absolute p-8 w-3/12 m-auto left-0 right-0 my-36 bg-black opacity-80 text-white'>
            <h1 className='text-3xl mb-10'>{isSignInForm?"Sign In":"Sign Up"}</h1>
           {!isSignInForm && (<input type='text' className='p-2 my-4 w-full rounded-sm bg-slate-700' placeholder='Full Name'/>)} 
            <input type='text' className='p-2 my-4 w-full rounded-sm bg-slate-700' placeholder='Email or username'/>
            <input type= 'password' className='p-2 my-4 w-full rounded-sm bg-slate-700' placeholder='Password'/>
            <button className='p-2 my-8 bg-red-800 w-full text-center rounded-md'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <h2 className='p-2 my-8'>{isSignInForm?"New to Netflix?":"Already registered?"}<span onClick={handleSignInToggle} className='cursor-pointer hover:text-blue-400'>{isSignInForm?" Sign Up now":" Sign In now"}</span></h2>
         </form>


    </div>
  )
}

export default Login

