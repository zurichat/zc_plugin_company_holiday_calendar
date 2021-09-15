import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import './HolidayList.css'

const url =
  'https://sheltered-ocean-11512.herokuapp.com/https://calendar.zuri.chat/api/v1/list-events/'

const HolidayList = () => {
  const states = useContext(AppContext)
  const { month, setMonth, year, setYear, days } = states
  console.log(month, year)

  const [holidays, setHolidays] = useState([])
  const getHolidays = async () => {
    const response = await fetch(url)
    const holidays = await response.json()
    const actualHolidays = holidays.filter((holiday) => holiday)
    console.log(actualHolidays)
    setHolidays(actualHolidays)
  }

  useEffect(() => {
    getHolidays()
  }, [url])
  return (
    <div className='home-page'>
      {holidays.map((holiday) => {
        const {
          _id,
          all_day,
          description,
          end_date,
          end_time,
          event_colour,
          event_tag,
          event_title,
          start_date,
          start_time,
          time_zone,
        } = holiday
        return (
          <li
            key={_id}
            className='holiday-list'
            style={{ borderLeft: `8px solid ${event_colour}` }}
          >
            <div className='date_icons'>
              <div>
                {days[new Date(`${start_date}`).getDay()]}{' '}
                {new Date(`${start_date}`).getDate()}
              </div>
              <div>
                <i className='fal fa-pen'></i>
                <i className='far fa-trash-alt'></i>
              </div>
            </div>

            {all_day ? (
              <p>All Day</p>
            ) : (
              <p>
                {start_time}-{end_time}
              </p>
            )}
            <p>{event_title}</p>
          </li>
        )
      })}
    </div>
  )
}

export default HolidayList
