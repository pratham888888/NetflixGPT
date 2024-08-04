import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { validateForm } from '../utils/validateForm';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';
const Login = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const email = useRef(null);
    const password= useRef(null);
    const name= useRef(null);

    const [errorMessage, setErrorMessage] = useState(null);
    const [isSignInForm,setIsSignInForm]= useState(true);
    const handleSignInToggle= ()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleClick= ()=>{
       var message= validateForm(email.current.value, password.current.value);
       setErrorMessage(message)
   if(message) return;

      if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          //update the name 
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            console.log(user);
            const {uid,email,displayName, photoURL} = auth.currentUser;
  
            dispatch(addUser({id:uid,email:email, displayName:displayName, photoURL:photoURL}));
        
          }).catch((error) => { 
            const errorMessage = error.message;
          setErrorMessage(errorMessage);
          });
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+ errorMessage)
        });
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode);
        });

      }
       
  
    }
  return (
    <div >
        <Header/>
        <img className='absolute' alt="" src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg" 
         ></img>

         <form  onSubmit={(e)=>
                  e.preventDefault()
            } 
         className=' rounded-lg absolute p-8 w-3/12 m-auto left-0 right-0 my-36 bg-black opacity-80 text-white'>
            <h1 className='text-3xl mb-10'>{isSignInForm?"Sign In":"Sign Up"}</h1>

           {!isSignInForm && (<input type='text' ref={name} className='p-2 my-4 w-full rounded-sm bg-slate-700' placeholder='Full Name'/>)} 

            <input type='text' className='p-2 my-4 w-full rounded-sm bg-slate-700'
             placeholder='Email or username'
             ref={email}/>

            <input type= 'password' className='p-2 my-4 w-full rounded-sm bg-slate-700' 
            placeholder='Password'
            ref={password}/>

            <p className='text-red-800 font-bold mb-2 p-2'>{errorMessage}</p>

             <button onClick={handleClick}
            className='p-2 my-8 bg-red-800 w-full text-center rounded-md'>
                {isSignInForm?"Sign In":"Sign Up"}</button>

            <h2 className='p-2 my-8'>{isSignInForm?"New to Netflix?":"Already registered?"}
                <span onClick={handleSignInToggle} className='cursor-pointer hover:text-blue-400'>
                    {isSignInForm?" Sign Up now":" Sign In now"}</span></h2>
         </form>


    </div>
  )
}

export default Login

