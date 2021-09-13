import React, { useContext } from 'react';
import { AppContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
  const states = useContext(AppContext);
  const {
    month,
    setMonth,
    year,
    setYear,
    isModalOpen,
    setIsModalOpen,
    showMonth,
    setShowMonth,
    showYear,
    setShowYear,
  } = states;
  const months = [
    {
      id: 'January',
      name: 'Jan',
    },
    {
      id: 'February',
      name: 'Feb',
    },
    {
      id: 'March',
      name: 'Mar',
    },
    {
      id: 'April',
      name: 'Apr',
    },
    {
      id: 'May',
      name: 'May',
    },
    {
      id: 'June',
      name: 'Jun',
    },
    {
      id: 'July',
      name: 'Jul',
    },
    {
      id: 'August',
      name: 'Aug',
    },
    {
      id: 'September',
      name: 'Sep',
    },
    {
      id: 'October',
      name: 'Oct',
    },
    {
      id: 'November',
      name: 'Nov',
    },
    {
      id: 'December',
      name: 'Dec',
    },
  ];
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 8;
  return (
    <>
      <nav className='nav'>
        <div className='calendar' onClick={() => setShowMonth(!showMonth)}>
          <i className='fal fa-calendar-alt'></i>
          <span className='month'>{month}</span>
          <span className='year'>{year}</span>
          <i className='fal fa-angle-down'></i>
        </div>
        <button className='open-modal-btn' onClick={() => setIsModalOpen(true)}>
          Add Event
        </button>
      </nav>
      {showMonth && (
        <div className='grpHolder'>
          <div className='yearHeadGrp' onClick={() => setShowYear(!showYear)}>
            <h3 className='yearHeadItem'>2021</h3>
            <i className='fal fa-angle-down'></i>
          </div>
          <div className='monthGrp'>
            {months.map((month) => {
              return (
                <span
                  className='monthItem'
                  key={month.id}
                  onClick={() => setMonth(month.id)}
                >
                  {month.name}
                </span>
              );
            })}
          </div>
        </div>
      )}
      {showYear && (
        <div className='yearGrp'>
          <ul className='yearList'>
            {Array.from(new Array(50), (v, i) => {
              return (
                <li
                  className='yearItem'
                  key={startYear + i}
                  onClick={() => {
                    setYear(startYear + i);
                    setShowMonth(!showMonth);
                    setShowYear(!showYear);
                  }}
                >
                  {startYear + i}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
