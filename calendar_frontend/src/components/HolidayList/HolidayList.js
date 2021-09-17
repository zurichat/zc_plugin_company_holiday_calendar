import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import './HolidayList.css';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

const HolidayList = () => {
  const url = 'https://calendar.zuri.chat/api/v1/event-list/';
  const states = useContext(AppContext);
  const { month, year, setShowMonth, setShowYear } = states;
  const [holidays, setHolidays] = useState([]);

  const getHolidays = async () => {
    const response = await fetch(url);
    const holidays = await response.json();
    return holidays.data.slice(11, 22);
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
      setHolidays(data);
    });
  }, [url, month, year]);

  return (
    <div
      className='home-page'
      onClick={() => {
        setShowMonth(false);
        setShowYear(false);
      }}
    >
      {holidays.map((holiday) => {
        const { _id, start_date, all_day, event_title, event_colour } = holiday;
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
                <RiDeleteBin5Line />
              </span>
            </div>
            <p className='event-time' style={{ color: `${event_colour}` }}>
              {all_day ? 'All Day' : ''}
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
