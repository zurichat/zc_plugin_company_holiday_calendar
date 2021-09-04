import React, { useState } from 'react'
import './Navbar.css'

import './reminder.css'

import EventForm from './EventForm'

function Navbar() {
  const [isEventOpen, setIsEventOpen] = useState(false)

  return (
    <div>
      <div className='navbar'>
        <div className='month'>
          <label>
            <i className='fal fa-calendar-alt'></i>
          </label>
          <select className='select' id='month'>
            <option value='january'>January</option>
            <option value='February'>February</option>
            <option value='March'>March</option>
            <option value='April'>April</option>
            <option value='May'>May</option>
            <option value='June'>June</option>
            <option value='July'>July</option>
            <option value='August'>August</option>
            <option value='September' selected>
              September
            </option>
            <option value='October'>October</option>
            <option value='November'>November</option>
            <option value='December'>December</option>
          </select>
        </div>
        <button className='open-btn' onClick={() => setIsEventOpen(true)}>
          Add Event
        </button>
        {isEventOpen && <div className='overlay'></div>}
        {isEventOpen && <EventForm setIsEventOpen={setIsEventOpen} />}
      </div>
    </div>
  )
}

export default Navbar
