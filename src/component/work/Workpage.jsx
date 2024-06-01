import React from 'react'

function Workpage() {
  return (
    <div className='w-full h-[100vh]' style={
        {backgroundImage: `url(/profile-danny/bg/bg-works.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '50%, 50%'}
    }>
        <div className='mt-12 ml-[10%]'>
        <h1 className='font-arial font-semibold text-gray-500'>My Services</h1>
        <h1 className='font-serif font-bold text-2xl mt-2'>Here Are Some of My Skills</h1>
        </div>
    </div>
  )
}

export default Workpage