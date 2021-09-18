import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import './HolidayList.css';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import EventDelBtn from "./EventDelBtn";

const HolidayList = () => {
  const url = 'https://calendar.zuri.chat/api/v1/event-list/';
  const states = useContext(AppContext);
  const { month, year, months, setShowMonth, setShowYear } = states;
  const [holidays, setHolidays] = useState([]);
  const [openDeleteEvent, setDeleteEvent] = useState(false);

  const getHolidays = async () => {
    const response = await fetch(url);
    const holidays = await response.json();
    return holidays.data.slice(11);
  };

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  useEffect(() => {
    getHolidays().then((data) => {
      setHolidays(
        data.filter((holiday) => {
          return (
            holiday.start_date.slice(0, 4) === year.toString() &&
            months.indexOf(month) + 1 ===
              parseInt(holiday.start_date.slice(5, 7))
          );
        })
      );
    });
  }, [url, month, year, months]);
  return (
    <div
      className='home-page'
      onClick={() => {
        setShowMonth(false);
        setShowYear(false);
      }}
    >
      {holidays.map((holiday) => {
        const {
          _id,
          start_date,
          all_day,
          event_title,
          event_colour,
          start_time,
          end_time,
        } = holiday;
        return (
          <li
            key={_id}
            className='holiday'
            style={{ borderLeft: `8px solid ${event_colour}` }}
          >
            <div className='date-icons'>
              <span className='event-date'>
                {days[new Date(start_date).getDay()]}{' '}
                {new Date(start_date).getDate()}
              </span>
              <span className='edit-del'>
                <FiEdit2 style={{ marginRight: '5px' }} />
                <RiDeleteBin5Line onClick={() => setDeleteEvent(true)} />
                
                {openDeleteEvent && (
                  <div>
                    <EventDelBtn cancelDelEvent={setDeleteEvent} />
                  </div>
                )}
              </span>
            </div>
            <p className='event-time' style={{ color: `${event_colour}` }}>
              {all_day
                ? 'All Day'
                : `${
                    +start_time.slice(0, 2) >= 12
                      ? +start_time.slice(0, 2) - 12
                      : +start_time.slice(0, 2)
                  }:${start_time.slice(3, 5).padStart(2, '0')} ${
                    +start_time.slice(0, 2) >= 12 ? 'PM' : 'AM'
                  }-${
                    +end_time.slice(0, 2) >= 12
                      ? +end_time.slice(0, 2) - 12
                      : +end_time.slice(0, 2)
                  }:${end_time.slice(3, 5).padStart(2, '0')} ${
                    +end_time.slice(0, 2) >= 12 ? 'PM' : 'AM'
                  }`}
            </p>
            <p className='event-title' style={{ color: `${event_colour}` }}>
              {event_title}
            </p>
          </li>
        );
      })}
    </div>
  );
};

export default HolidayList;
