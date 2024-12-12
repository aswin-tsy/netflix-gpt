import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {  signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from "../utils/constants";



const Header = () => {
  const user = useSelector((state) => state.user);
  
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleSignOut = () => {
    
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() =>{

   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
         uid:uid,
         email:email,
         displayName:displayName,
         photoURL:photoURL 
        }));
        navigate('/browse');

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });
  // unsubscribing on componet unmount.
    return () => unsubscribe();
  },[]);

  return (
    <div className="absolute flex justify-between px-6 py-2 items-center w-full  h-[100px]  z-50  bg-gradient-to-b from-black">
      <img
        className="py-4 px-12 mx-6 w-[250px] h-[100px]"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex gap-2">
          <img className= "W-[50px] rounded-full h-[50px]" src={user.photoURL} alt="logo" />
          <button onClick={handleSignOut} className="text-white font-bold">
            [Sign Out]
          </button>
          {/*  <p>{user.displayName}</p> */}
        </div>
      )}
    </div>
  );
};

export default Header;
