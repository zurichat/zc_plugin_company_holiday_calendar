import React, { useState } from 'react';
import './event.css';
import { FaTimesCircle } from 'react-icons/fa';
import DateInput from './DateInput';
import ShowMe from './showMe/ShowMe';

const Event = () => {
  const [isEventOpen, setIsEventOpen] = useState(false);
  return (
    <div>
      <button id='add-event' onClick={() => setIsEventOpen(true)}>
        Add Event
      </button>
      {isEventOpen && <div className='overlay'></div>}
      {isEventOpen && (
        <div className='event-form'>
          <header>
            <h2>Add New Event</h2>
            <FaTimesCircle
              className='faTimes'
              onClick={() => setIsEventOpen(false)}
            />
          </header>
          <h3>Add New Event</h3>
          <div>
            <input type='text' placeholder='Add Title' />
            <DateInput placeholder='Start Date' />
            <DateInput placeholder='End Date' />
            <button stlye={{ marginTop: '10px' }}>Add Event</button>
          </div>
          <ShowMe />
        </div>
      )}
    </div>
  );
};

export default Event;
