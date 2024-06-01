import React, { useEffect, useState } from 'react';
import { SquareCode, ChevronsLeft, ChevronsRight,BookOpenText,SquareUserRound } from 'lucide-react';

function SidebarNav() {
  const [isFixed, setIsFixed] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const listpage = ['servicesp','workp','contactp']
  const [page, setPage] = useState('');


  const listpagean = ['servicesop','workop']
  const handlePage = (page) => {
    setPage(page)
  }

  const [jalan,setjalan] = useState(false);
  const [jalan2,setjalan2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        handlePage(listpage[0])
        setIsFixed(true);
        if (window.scrollY >= (window.innerHeight + (window.innerHeight * 0.5))){
            handlePage(listpagean[0])
            setjalan(false)
        }
        if (window.scrollY >= window.innerHeight * 2){
            handlePage(listpage[1])
            setjalan(true)
        }
        if (window.scrollY >= (window.innerHeight * 2) + (window.innerHeight * 0.5)){
            handlePage(listpagean[1])
            setjalan2(false)
        }
        if (window.scrollY >= window.innerHeight * 3){
            handlePage(listpage[2])
            setjalan2(true)
        }
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-700 max-md:hidden  text-white border-r-2 h-full flex flex-col items-center text-center border-gray-400 w-[20%] ${isFixed ? 'fixed top-0 left-0 h-full  border-r-2 border-gray-400 z-10' : 'absolute top-[100vh] left-0 '}`}>
      <h1 className="text-2xl font-serif mt-10">I Will Show You</h1>
      {/* items items-1*/}
      <div className={`border-2 border-purple-500 rounded mt-10 w-20 transition-all duration-1000 
      ${(page === listpage[0])
        ? 'bg-purple-300'
        : 'bg-gray-700'
      }`}>
        <div className='m-2 flex flex-col gap-1 text-center items-center'>
            <h1 className='select-none text-lg font-semibold'>Services</h1>
            <SquareCode />
        </div>
      </div>
      <span className='mt-2 border rounded-xl shadow-2xl h-10 w-1 bg-purple-700'/>

      <div className='mt-2 h-auto w-24 mr-[30%] flex flex-row'>
        <span className='h-1 w-[40%]' />
        <div className={`border-2 border-purple-700 shadow-2xl w-[60%] flex items-center justify-center transition-all duration-1000 
      ${(page === listpagean[0])
        ? 'bg-purple-300 animate-pulse'
        : 'bg-gray-700'
      }`}>
            
            {!jalan 
                ? <>
                    <h1 className='select-none'>W</h1><ChevronsLeft /> 
                </>
                : <>
                    <ChevronsRight /> <h1 className='select-none'>S</h1>
                </>
            }
            
        </div>
      </div>
      <span className='mt-2 border rounded-xl shadow-2xl h-10 w-1 bg-purple-700 mr-[30%]'/>

      {/* items items-2*/}
      <div className={`border-2 border-purple-500 rounded mt-2 w-20 mr-[30%] transition-all duration-1000 
      ${(page === listpage[1])
        ? 'bg-purple-300 '
        : 'bg-gray-700'
      }`}>
        <div className='m-2 flex flex-col gap-1 text-center items-center'>
            <h1 className='select-none text-lg font-semibold'>Work</h1>
            <BookOpenText />
        </div>
      </div>

      <span className='mt-2 border rounded-xl shadow-2xl h-10 w-1 mr-[30%] bg-purple-700'/>

      <div className='mt-2 h-auto w-24 items-center gap-3 flex flex-row'>
        <span className='h-1 w-[40%] border rounded-xl shadow-2xl bg-purple-700' />
        <div className={`border-2 border-purple-700 shadow-2xl w-[60%] flex items-center justify-center transition-all duration-1000 
      ${(page === listpagean[1])
        ? 'bg-purple-300 animate-pulse'
        : 'bg-gray-700'
      }`}>
            {!jalan2 
                ? <>
                    <ChevronsRight /><h1 className='select-none'>C</h1>
                </>
                : <>
                     <h1 className='select-none'>W</h1><ChevronsLeft /> 
                </>
            }
        </div>
      </div>

      <span className='mt-2 border rounded-xl shadow-2xl h-10 w-1 bg-purple-700 ml-[30%]'/>

      {/* items items-3*/}
      <div className={`border-2 border-purple-500 rounded mt-2 w-20 ml-[30%] transition-all duration-1000 
      ${(page === listpage[2])
        ? 'bg-purple-300'
        : 'bg-gray-700'
      }`}>
        <div className='m-2 flex flex-col gap-1 text-center items-center'>
            <h1 className='select-none text-lg font-semibold'>Contact</h1>
            <SquareUserRound />
        </div>
      </div>
    </div>
  );
}

export default SidebarNav;
