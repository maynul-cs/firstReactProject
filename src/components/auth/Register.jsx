import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);

  return (
    <div className='flex items-center justify-center h-[100vh] px-4 pt-10 bg-green-900'>
      <div className=' bg-white max-w-lg p-8'>
        <h2 className='text-green-800 font-bold text-center text-2xl mb-6'> Register </h2>
        <form className='space-y-4'>
{/* Full Name */}
           <input 
              type="text" 
              name=''
              placeholder='Full Name'
              className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
              id='' 
              required
           />
{/* Email */}
           <input 
              type="email" 
              name=''
              placeholder='Email'
              className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
              id='' 
              required
            />

{/* Password */}
           <div className='relative flex items-center'>
              <input 
                type={showPass ? "text" : "password"}
                name=''
                placeholder='Password'
                className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
                id='' 
                required
              />
              {
                showPass ? <FaEyeSlash onClick={() => setShowPass(!showPass)} className='absolute right-3 cursor-pointer hover:text-green-600' /> : <FaEye onClick={() => setShowPass(!showPass)} className='absolute right-3 cursor-pointer hover:text-green-600' />
              }
              
           </div>
{/* Confirm Password */}
           <div className='relative flex items-center'>
            <input 
              type={confirmPass ? "text" : "password"} 
              name=''
              placeholder='Confirm Password'
              className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
              id='' 
              required
            />
            {
              confirmPass ? <FaEyeSlash onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 cursor-pointer hover:text-green-600' /> : <FaEye onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 cursor-pointer hover:text-green-600' />
            }
           </div>

           <button type='submit'
           className='w-full mb-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer'>
              Sign Up
           </button>
           <div className='flex itmes-center justify-between'>
            <p>
              <input 
              type="checkbox"
              name=''
              id='checkBox'
              required
              />
               <label htmlFor="checkBox"> Accept Terms & <Link className='text-blue-700'> Conditions </Link> </label>
            </p>
            <p className='text-sm text-right text-gray-600 hover:underline cursor-pointer'>
            Forgot Password?
           </p>
           </div>
        </form>

        {/* Divider here */}
        <div className='flex items-center my-6'>
          <div className='flex-grow h-px bg-gray-700'></div >
            <span className='mx-4 text-gray-500 text-sm'> OR </span>
          <div className='flex-grow h-px bg-gray-700'></div >
        </div>

        <div className='flex flex-col space-y-3 mt-6'>
          <button className='text-white bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer flex items-center justify-center gap-2'> 
            Register with Google <FaGoogle />
          </button>
          <button className='text-white bg-gray-700 py-2 rounded hover:bg-gray-900 cursor-pointer flex items-center justify-center gap-2'>
            Register with GitHub <FaGithub />
          </button>
        </div>
        <div className='text-center mt-4'>
          <p className='text-sm'>
            Already have an account? <Link to={'/login'} className='text-blue-700 font-semibold hover:underline'> Login Here </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register