import React from 'react'
import { useState, useEffect } from 'react';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isReadyToShow, setIsReadyToShow] = useState(false);

  useEffect(() => {
    let timer;
    if (isOpen) {
      // Set a timer to change isReadyToShow after 2 seconds
      timer = setTimeout(() => {
        setIsReadyToShow(true);
      }, 100); // 100 milliseconds = 0.1 seconds
    } else {
      // Reset isReadyToShow if the menu is closed
      setIsReadyToShow(false);
    }

    // Clear the timer when the component unmounts or when isOpen changes
    return () => clearTimeout(timer);
  }, [isOpen]); // Dependency on isOpen

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mt-10 flex justify-between'><div className=' select-none font-serif ml-12 border border-black bg-black h-20 w-12 text-white text-center'>
      <h1>D N</h1>
      <h1>A N</h1>
      <h1>_-.Y</h1>
      </div>
    <div className='mr-10 ' onClick={toggleMenu}>
          <button className='focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
        {isOpen &&  (
        <div className={`fixed inset-0 bg-transparent overflow-auto items-end flex flex-col z-10 transition-all duration-[1000ms] ${isReadyToShow 
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-x-full'}`}>
          <div className='bg-white w-[25%] h-auto flex flex-col'>
          <button
            className='mr-8 bg-slate-200 transition duration-300 ease-in-out hover:bg-gray-500 self-end h-12 w-12 items-center flex justify-center mt-10 focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          </button>
          <nav className='flex flex-col space-y-12 font-serif ml-12 mt-20 '>
            <a href='#' className={` text-base hover:text-purple-500`} onClick={toggleMenu}>Home</a>
            <a href='#' className=' text-base hover:text-purple-500' onClick={toggleMenu}>About</a>
            <a href='#' className=' text-base hover:text-purple-500' onClick={toggleMenu}>Services</a>
            <a href='#' className=' text-base hover:text-purple-500' onClick={toggleMenu}>Contact</a>
          </nav>
          <div className='flex flex-col ml-12 mb-20 font-serif mt-12 w-56 items-center'>
            <h1 className='text-2xl font-bold'>WORKS</h1>
            <div className='mt-5 w-56 h-56 grid grid-cols-2 content-normal border border-black'>
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            </div>
          </div>
          <h1 className='self-end mt-auto mr-2 text-xs select-none font-bold'>@danny</h1>
          </div>
        </div>
      )}
    
    </div>
  )
}

export default Navbar