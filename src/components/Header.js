import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import appStore from '../utils/appStore';


const Header = () => {
      
    const navigate= useNavigate();
    const user= useSelector(appStore=> appStore.user);

    const handleSignOut = () =>{
     signOut(auth).then(() => {
        navigate("/")
}).catch((error) => {
    navigate("/error")
});
    }
  return (
    <div className='absolute w-screen px-10 py-4 bg-gradient-to-br from-black z-10 flex justify-between'>
        <img className=" w-56 " alt="" src="netflix-logo-png-2562.png"/>


         {user&&<div className='flex items-center'>

       <img className='w-12 h-12' src= {user?.photoURL} alt= "userIcon"/>
        <button className='px-1 font-bold' onClick={handleSignOut}>Sign out</button>
        </div>}
        
    </div>
  )
}

export default Header