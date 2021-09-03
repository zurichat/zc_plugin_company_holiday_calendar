import React, { useState } from 'react'
import './Navbar.css';
import ShowMe from './showMe/ShowMe';


function Navbar() {
  const [isEventOpen, setIsEventOpen] = useState(false)
  const [showEventPage, setShowEventPage] = useState(true)

  return (
    <div>
      <div className='navbar'>
        <div className='month'>
          <label>
            <i className='fal fa-calendar-alt'></i>
          </label>
          <select id='month' disabled defaultValue='September'>
            <option value='january'>January</option>
            <option value='February'>February</option>
            <option value='March'>March</option>
            <option value='April'>April</option>
            <option value='May'>May</option>
            <option value='June'>June</option>
            <option value='July'>July</option>
            <option value='August'>August</option>
            <option value='September'>September</option>
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
                className='far fa-times-circle'
                onClick={() => setIsEventOpen(false)}
                aria-hidden='true'
              ></i>
            </header>

            <div className='btn__group'>
              <button
                className={`btn ${showEventPage && 'active'}`}
                onClick={() => setShowEventPage(true)}
              >
                Event
              </button>
              <button
                className={`btn btn__reminder ${!showEventPage && 'active'}`}
                onClick={() => setShowEventPage(false)}
              >
                Reminder
              </button>
            </div>

            {showEventPage ? (
              <>
                <div>
                  <h1>event page</h1>
                  <h1>event detail go here</h1>
                </div>

                <ShowMe />
              </>
            ) : (
              <div>
                <h1>reminder page</h1>
                <h1>reminder details go here</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
