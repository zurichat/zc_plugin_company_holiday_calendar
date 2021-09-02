import React, { useState } from 'react'
import './event.css'
import { FaTimesCircle } from 'react-icons/fa'
import './Reminder.js'


const Event = () => {
  const [isEventOpen, setIsEventOpen] = useState(false)

  const [reminderTab, setReminderTab] = useState(false)
  
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
        
        <div className="btn-container">
          <button id='event' className={`${reminderTab ? "btn-unactive" : "btn-active"}`} onClick={() => setReminderTab(false)}>Event</button>
          
          <button id='reminder' className={`${reminderTab ? "btn-active" : "btn-unactive"}`} onClick={() => setReminderTab(true)}> Reminder </button>
        </div>

          {
            reminderTab ? (

            <div>
              <h1>Add Reminder Here</h1>
            </div>  
            ) : (

            <div>
              <h1>Add Event Here</h1>
            </div>
            )

          }
         
        </div>
      )}

      
    </div>
  )
}

export default Event
