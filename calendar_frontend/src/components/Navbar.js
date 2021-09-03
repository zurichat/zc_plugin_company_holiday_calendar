import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isEventOpen, setIsEventOpen] = useState(false)

  return (
    <div>
      <div className='navbar'>
        <div className='month'>
          <label>
            <i className='fal fa-calendar-alt'></i>
          </label>
          <select id='month'>
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
        {isEventOpen && (
          <div className='event-form'>
            <header>
              <h2>Add New Event</h2>
              <i
                class='far fa-times-circle'
                onClick={() => setIsEventOpen(false)}
                aria-hidden='true'
              ></i>
            </header>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
