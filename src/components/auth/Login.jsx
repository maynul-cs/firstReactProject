import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signInWithEmailPass } = useContext(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailPass(email, password)
      .then(result => {
        const user = result.user;
        console.log("Logged In User:", user);
      })
      .catch(err => {
        console.error("Error", err);
      })  
  }

  return (
    <div className='flex items-center justify-center h-[100vh] px-4 pt-10 bg-green-900'>
      <div className=' bg-white w-100 p-8'>
        <h2 className='text-green-800 font-bold text-center text-2xl mb-6'> Login </h2>
        <form onSubmit={handleLoginForm} className='space-y-4'>
           <input 
           type="email"
           name='email'
           placeholder='Enter a valid Email'
           className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
           id='' />

           <div className='relative flex items-center'>
            <input 
              type={showPass ? "text" : "password"} 
              name='password'
              placeholder='Enter a Password'
              className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
              id='' />

              {
                showPass ? <FaEyeSlash onClick={() => setShowPass(!showPass)} className='absolute right-3 cursor-pointer hover:text-green-600' /> : <FaEye onClick={() => setShowPass(!showPass)} className='absolute right-3 cursor-pointer hover:text-green-600' />
              }
           </div>

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