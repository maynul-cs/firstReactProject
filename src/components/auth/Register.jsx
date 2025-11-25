import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, sendEmailVerification } from 'firebase/auth';



const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const {createUserWithPass, signInWithGoogle, updateUserProfile, resetPassword} = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const provider = new GoogleAuthProvider();

  // Sign in with Google
  const handleGoogleRegister = () => {
    signInWithGoogle(provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(err => {
      console.error("Error", err);
    })
  } 

  const handleForgotPass = () => {

    if (!emailInput){
      Swal.fire({
        title: "Error",
        text: "Please enter your email address to reset your password.",
        icon: "info"
      });
      return;
    }

    resetPassword(emailInput)
    .then(() => {
      Swal.fire({
        title: "Success",
        text: "Password reset email sent successfully. Please check your inbox.",
        icon: "success"
      });
    })
    .catch(err => {
      console.error("Error", err);
      Swal.fire({
        title: "Error",
        text: err.message,
        icon: "info"
      });
    });
  }


  const handleRegisterForm = (e) => {
  e.preventDefault();
  const fullName = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPass = e.target.confirmPass.value;
  const photoURL = e.target.photoURL.value;

  setErrorMsg('');
  setSuccessMsg('');

  if (password !== confirmPass){
    setErrorMsg("Password did not match");
    return;
  }
  if (!passwordRegex.test(password)){
    setErrorMsg("Password must be at least 8 characters long and contain at least one letter and one number.");
    return;
  }
  
  createUserWithPass(email, password)
    .then(result => {
      const user =result.user;
      console.log(user);

      // Form Reset Here
      e.target.reset();

      updateUserProfile(fullName, photoURL)
      .then(() => {
        sendEmailVerification(user)
      .then(() => {
        console.log("Verification Email Sent");
        Swal.fire({
          title: "Registration Successful!",
          text: "A verification email has been sent to your email address. Please verify your email before logging in.",
          icon: "success"
        });
      });
      })
      .catch(err => {
        Swal.fire({
          title: "Registration Successful!",
          text: "Your profile has been updated. However, we were unable to send a verification email at this time.",
          icon: "info"
        });
      });


      setTimeout(() => {
        setSuccessMsg('');
        navigate('/login');
      }, 2000);
  })
    .catch(err => {
      console.error("Error", err);
      setErrorMsg(err.message);
      setSuccessMsg('');
    })
  }
      

  return (
    <div className='flex items-center justify-center h-[100vh] px-4 pt-10 bg-green-900'>
      <div className=' bg-white max-w-lg p-8'>
        <h2 className='text-green-800 font-bold text-center text-2xl mb-6'> Register </h2>
        <form onSubmit={handleRegisterForm} className='space-y-4'>
{/* Full Name */}
           <input 
              type="text" 
              name='name'
              placeholder='Full Name'
              className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
              id='' 
              required
           />

           <input 
              type="text" 
              name='photoURL'
              placeholder='Photo URL'
              className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
              id='' 
              required
           />


{/* Email */}
           <input 
              type="email" 
              name='email'
              placeholder='Email'
              onChange={(e) => setEmailInput(e.target.value)}
              className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
              id='' 
              required
            />

{/* Password */}
           <div className='relative flex items-center'>
              <input 
                type={showPass ? "text" : "password"}
                name='password'
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
              name='confirmPass'
              placeholder='Confirm Password'
              className='w-full border focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-green-500'
              id='' 
              required
            />
            {
              confirmPass ? <FaEyeSlash onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 cursor-pointer hover:text-green-600' /> : <FaEye onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 cursor-pointer hover:text-green-600' />
            }
           </div>

           {errorMsg && <p className='text-center text-red-600'> {errorMsg} </p>}
           {successMsg && <p className='text-center text-green-600'> {successMsg} </p>}

           
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
            <p onClick={handleForgotPass} className='text-sm text-right text-gray-600 hover:underline cursor-pointer'>
            Forgot Password?
           </p>
           </div>

           <button type='submit'
           className='w-full mb-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer'>
              Sign Up
           </button>
        </form>

        {/* Divider here */}
        <div className='flex items-center my-6'>
          <div className='flex-grow h-px bg-gray-700'></div >
            <span className='mx-4 text-gray-500 text-sm'> OR </span>
          <div className='flex-grow h-px bg-gray-700'></div >
        </div>

        <div className='flex flex-col space-y-3 mt-6'>
          <button onClick={handleGoogleRegister} className='text-white bg-red-600 py-2 rounded hover:bg-red-700 cursor-pointer flex items-center justify-center gap-2'> 
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