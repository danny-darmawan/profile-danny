import React from 'react'
import Danny from './home/Danny'
import ServicesPage from './services/ServicesPage'
import SidebarNav from './sidebar-nav/SidebarNav'
import Contactpage from './contact/Contactpage'
import Workpage from './work/Workpage'

function RootHome() {
  return (
    <>
    <Danny />
    <div className='flex h-auto w-full '>
    <SidebarNav  />
    <div className="flex flex-col flex-1 min-h-screen bg-gray-500">
          <div className="flex flex-col self-end max-md:select-none max-md:w-[100%] w-[70%]">
            <ServicesPage />
            <Workpage />
            <Contactpage />
          </div>
        </div>
    </div>
    </>
  )
}

export default RootHome