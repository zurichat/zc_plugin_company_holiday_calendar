import React, { useContext } from 'react'
import { AppContext } from '../../Plugin'
import './Navbar.css'
import { BiCalendar } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'

const Navbar = () => {
  const states = useContext(AppContext)
  const {
    month,
    setMonth,
    year,
    setYear,
    showMonth,
    setShowMonth,
    showYear,
    setShowYear,
    handleModal,
  } = states
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
  ]
  const currentYear = new Date().getFullYear()
  const startYear = currentYear
  return (
    <>
      <nav
        className='nav'
        onClick={() => {
          if (showMonth !== false) {
            setShowMonth(false)
          }
          if (showMonth !== false) {
            setShowYear(false)
          }
        }}
      >
        <div
          className='calendar'
          onClick={() => {
            setShowMonth(!showMonth)
            if (showYear !== false) {
              setShowYear(false)
            }
          }}
        >
          <FaBars className='far fa-bars' />
          <BiCalendar className='fal fa-calendar-alt' />
          <span className='month'>{month}</span>
          <span className='year'>{year}</span>
          <RiArrowDropDownLine className='fal fa-angle-down' />
        </div>
        <button className='open-modal-btn' onClick={handleModal}>
          Add Event
        </button>
        <AiOutlinePlus className='fas fa-plus' onClick={handleModal} />
      </nav>
      {showMonth && (
        <div className='grpHolder'>
          <div className='yearHeadGrp' onClick={() => setShowYear(!showYear)}>
            <h3 className='yearHeadItem'>{year}</h3>
            <i className='fal fa-angle-down'></i>
          </div>
          <div
            className='monthGrp'
            onClick={() => {
              if (showYear !== false) {
                setShowYear(false)
              }
            }}
          >
            {months.map((month) => {
              return (
                <span
                  className='monthItem'
                  key={month.id}
                  onClick={() => {
                    setMonth(month.id)
                  }}
                >
                  {month.name}
                </span>
              )
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
                    setYear(startYear + i)
                    setShowMonth(!showMonth)
                    setShowYear(!showYear)
                  }}
                >
                  {startYear + i}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
