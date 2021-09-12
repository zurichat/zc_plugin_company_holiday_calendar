import React, { useContext } from 'react'
import './Navbar.css'
import { AppContext } from '../../App'

const Navbar = () => {
  const states = useContext(AppContext)
  const { setIsSidebarOpen } = states
  return (
    <nav className='nav'>
      <div>
        <i className='fal fa-bars'></i>
        <i className='fal fa-calendar-alt'></i>
        <span className='month'>September</span>
        <span className='year'>2021</span>
        <i className='fal fa-angle-down'></i>
      </div>
      <button onClick={() => setIsSidebarOpen(true)}>Add Event</button>
      <i className='fas fa-plus' onClick={() => setIsSidebarOpen(true)}></i>
    </nav>
  )
}

export default Navbar
