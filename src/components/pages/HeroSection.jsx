import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col text-white text-center px-4 items-center justify-center h-[100vh]' style={{
        backgroundImage: "url('/src/assets/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <h2 className='text-4xl md:text-6xl mb-4 font-bold'> Welcome to my website </h2>
        <p className='text-lg md:text-xl mb-4'> Your Journey Start Here. </p>
        <button className='bg-white text-indigo-600 font-medium hover:bg-gray-200 cursor-pointer px-6 py-2 rounded-md'> Purchase Product </button>
    </div>
  )
}

export default HeroSection