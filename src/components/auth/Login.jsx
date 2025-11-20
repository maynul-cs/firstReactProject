import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[80vh] px-4 bg-green-900'>
      <div className='text-white bg-emerald-400 max-w-sm p-8'>
        <h2 className='text-green-800 font-bold text-center text-2xl mb-6'> Login </h2>
        <form className='space-y-4'>
           <input 
           type="email" 
           name=''
           placeholder='Enter a email'
           className='w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
           id='' />

           <input 
           type="password" 
           name=''
           placeholder='Enter a password'
           className='w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
           id='' />

           <button type='submit'
           className='w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer'>
              Login
           </button>
        </form>
        <div className='flex flex-col space-y-3 mt-3'>
          <button className='bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer'> 
            Login with Google 
          </button>
          <button className='bg-gray-700 py-2 rounded hover:bg-gray-900 cursor-pointer'>
            Login with GitHub
          </button>
        </div>
        <div className='text-center mt-4 text-white'>
          <p>
            Don't have an account? <Link to={'/register'} className='text-blue-700 underline'> Register </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login