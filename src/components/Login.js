import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const [errMsg,setErrMsg] = useState(null)

    const email = useRef(null)

    const password = useRef(null)

    const handleBtnClick = (e) => {
        const msg = checkValidateData(email.current.value,password.current.value)

        setErrMsg(msg)
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt='bg-img'/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85'>

            <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-neutral-700 rounded-lg'/>)  }

            <input ref={email} type='email' placeholder='Email Address' className='p-4 my-4 w-full bg-neutral-700 rounded-lg'/>

            <input ref={password} type='password' placeholder="Password" className='p-4 my-4 w-full bg-neutral-700 rounded-lg'/>

            <p className='text-red-500 font-bold py-1 px-2'>{errMsg}</p>

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleBtnClick}>{isSignInForm?"Sign In" : "Sign Up"}</button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}</p>

        </form>
    </div>
  )
}

export default Login