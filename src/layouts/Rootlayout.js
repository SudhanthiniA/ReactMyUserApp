import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const Rootlayout = () => {
  return (
    <div>
        <Navbar />
        
        <Outlet />
    </div>
    
  )
}

export default Rootlayout