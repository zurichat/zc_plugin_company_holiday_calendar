import React, { useState, useEffect } from 'react'
import HolidayList from './components/HolidayList/HolidayList'
import Navbar from './components/Navbar/Navbar'
import Overlay from './components/Overlay/Overlay'
import Modal from './components/Modal/Modal'
import './Plugin.css'
import axios from 'axios'

export const AppContext = React.createContext()

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function Plugin() {
  let monthIndex = new Date().getMonth()
  const [month, setMonth] = useState(months[monthIndex])
  const [year, setYear] = useState(new Date().getFullYear())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showEventPage, setShowEventPage] = useState(true)
  const [showMonth, setShowMonth] = useState(false)
  const [showYear, setShowYear] = useState(false)
  const [isEventOpen, setIsEventOpen] = useState(false)
  const [holidays, setHolidays] = useState([])
  const [openDeleteEvent, setDeleteEvent] = useState(false)
  const [currentFormData, setCurrentFormData] = useState({})
  const [id, setId] = useState()

  const thisData = currentFormData

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const url = 'https://calendar.zuri.chat/api/v1/event-list/'

  const getHolidays = async () => {
    const response = await fetch(url)
    const holidays = await response.json()
    console.log(holidays.data)
    return holidays.data.slice(11)
  }

  useEffect(() => {
    getHolidays().then((data) => {
      setHolidays(
        data.filter((holiday) => {
          return (
            holiday.start_date.slice(0, 4) === year.toString() &&
            months.indexOf(month) + 1 ===
              parseInt(holiday.start_date.slice(5, 7))
          )
        })
      )
    })
  }, [url, month, year, months])

  const handleOverlay = () => {
    setIsEventOpen(false)
    setHolidays(
      holidays.map((card, index) => {
        return { ...card, event: false }
      })
    )
  }

  const handleModal = () => {
    setIsModalOpen(true)
    handleOverlay()
  }

  const handleEventPopups = (id, e) => {
    console.log(e)
    if (
      e.target.classList.contains('holiday') ||
      e.target.classList.contains('wealth')
    ) {
      const lastActiveIndex = holidays.findIndex((card) => card.event === true)

      if (lastActiveIndex === id) {
        holidays[lastActiveIndex].event = !holidays[lastActiveIndex].event
      }
      setIsEventOpen(true)

      return setHolidays(
        holidays.map((card, index) =>
          index === id ? { ...card, event: !card.event } : card
        )
      )
    }
  }

  const handleDel = (id) => {
    axios
      .delete(` https://calendar.zuri.chat/api/v1/event-delete/${id}`)
      .then(() =>
        getHolidays().then((data) => {
          setHolidays(
            data.filter((holiday) => {
              return (
                holiday.start_date.slice(0, 4) === year.toString() &&
                months.indexOf(month) + 1 ===
                  parseInt(holiday.start_date.slice(5, 7))
              )
            })
          )
        })
      )
  }

  return (
    <div className='Zuri_Calendar_Plugin'>
      <AppContext.Provider
        value={{
          month,
          setMonth,
          year,
          setYear,
          isModalOpen,
          setIsModalOpen,
          showEventPage,
          setShowEventPage,
          showMonth,
          setShowMonth,
          showYear,
          setShowYear,
          months,
          handleModal,
          holidays,
          days,
          handleOverlay,
          setHolidays,
          isEventOpen,
          setIsEventOpen,
          handleEventPopups,
          handleDel,
          openDeleteEvent,
          setDeleteEvent,
          setCurrentFormData,
          thisData,
        }}
      >
        <Overlay />
        <Modal />
        <Navbar />
        <HolidayList />
      </AppContext.Provider>
    </div>
  )
}

export default Plugin
