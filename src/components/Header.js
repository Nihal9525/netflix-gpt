import React, {useEffect} from 'react'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux"
import {addUser} from "../utils/userSlice"
import {removeUser} from "../utils/userSlice"
import {Logo} from '../utils/contants'

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  

  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    
    }).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(() => {
       
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate('/browse')
        } else {
          dispatch(removeUser());
          navigate('/')
        }
      });

      // unsubsribe when component unmount
      return () => unsubscribe();
  })

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-48' src={Logo} alt='logo'/>
        {user && (<div className='flex p-2'>
          <img alt='usericon' className='w-12 h-12' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'/>
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>)}
    </div>
    
  )
}

export default Header