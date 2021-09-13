import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './Navbar.css'

const Navbar = () => {
  const states = useContext(AppContext)
  const { month, setMonth, year, setYear, isModalOpen, setIsModalOpen } = states
  return (
    <nav className='nav'>
      <div className='calendar'>
        <i className='fal fa-calendar-alt'></i>
        <span className='month'>{month}</span>
        <span className='year'>{year}</span>
        <i className='fal fa-angle-down'></i>
      </div>
      <button className='open-modal-btn' onClick={() => setIsModalOpen(true)}>
        Add Event
      </button>
    </nav>
  )
}

export default Navbar
