import React, { useContext } from 'react';
import { AppContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
  const states = useContext(AppContext);
  const { month, setMonth, year, setYear, isModalOpen, setIsModalOpen } =
    states;
  return (
    <>
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
      <div className='grpHolder'>
        <div className='yearGrp'>
          <span className='yearItem'>2021</span>
          <i className='fal fa-angle-down'></i>
        </div>
        <div className='monthGrp'>
          <span className='monthItem'>Jan</span>
          <span className='monthItem'>Feb</span>
          <span className='monthItem'>Mar</span>
          <span className='monthItem'>Apr</span>
          <span className='monthItem'>May</span>
          <span className='monthItem'>Jun</span>
          <span className='monthItem'>Jul</span>
          <span className='monthItem'>Aug</span>
          <span className='monthItem'>Sep</span>
          <span className='monthItem'>Oct</span>
          <span className='monthItem'>Nov</span>
          <span className='monthItem'>Dec</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
