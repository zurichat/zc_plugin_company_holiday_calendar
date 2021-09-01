import React, { useState } from 'react'
import './event.css'
import { FaTimesCircle } from 'react-icons/fa'

const Event = () => {
  const [isEventOpen, setIsEventOpen] = useState(false)
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
        </div>
      )}
    </div>
  )
}

export default Event
