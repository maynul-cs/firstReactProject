import React from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] px-4 pt-10 bg-green-900'>
      <div className=' bg-white max-w-sm p-8'>
        <h2 className='text-green-800 font-bold text-center text-2xl mb-6'> Login </h2>
        <form className='space-y-4'>
           <input 
           type="email" 
           name=''
           placeholder='Enter a valid Email'
           className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
           id='' />

           <input 
           type="password" 
           name=''
           placeholder='Enter a Password'
           className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
           id='' />

           <button type='submit'
           className='w-full mb-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer'>
              Login
           </button>
           <p className='text-sm text-right text-gray-600 hover:underline cursor-pointer'>
            Forgot Password?
           </p>
        </form>

        {/* Divider here */}
        <div className='flex items-center my-6'>
          <div className='flex-grow h-px bg-gray-700'></div >
            <span className='mx-4 text-gray-500 text-sm'> OR </span>
          <div className='flex-grow h-px bg-gray-700'></div >
        </div>
        <div className='flex flex-col space-y-3 mt-6'>
          <button className=  'text-white bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer flex items-center justify-center gap-2'> 
            Login with Google <FaGoogle />
          </button>
          <button className='text-white bg-gray-700 py-2 rounded hover:bg-gray-900 cursor-pointer flex items-center justify-center gap-2'>
            Login with GitHub <FaGithub />
          </button>
        </div>
        <div className='text-center mt-4'>
          <p className='text-sm'>
            Don't have an account? <Link to={'/register'} className='text-blue-700 font-semibold hover:underline'> Register </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login