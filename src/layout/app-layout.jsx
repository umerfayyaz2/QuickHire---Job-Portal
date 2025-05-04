import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Optional Background Layer */}
      <div className='grid-background'></div>

      {/* Main Content Container with Centering & Padding */}
      <main className='min-h-screen container px-4 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-[1200px] mx-auto'>
          <Header />
          <Outlet /> {/* This is where each page's content will appear */}
        </div>
      </main>

      {/* Footer */}
      <div className='p-10 text-center bg-gray-800 mt-10'>
        Made by Umer Fayyaz Basra - Web Sys Semester Project
      </div>
    </div>
  )
}

export default AppLayout