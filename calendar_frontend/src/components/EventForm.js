import React, { useState } from 'react'
import ShowMe from './showMe/ShowMe'
import DateInput from './DateInput'
import Reminder from './Reminder'
import CancelButton from './CancelButton'

const EventForm = ({ setIsEventOpen }) => {
  const [showEventPage, setShowEventPage] = useState(true)
  return (
    <>
      <div className='event-form'>
        <header>
          <h2>Add New Event</h2>
          <i
            class='far fa-times-circle'
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
            <div className='event-form-content'>
              <DateInput
                className='start-date'
                placeholder='Start Date'
                showIcon={true}
              />
              <DateInput
                className='end-date'
                placeholder='End Date'
                showIcon={true}
              />
            </div>
            <ShowMe />
          </>
        ) : (
          <div>
            <div className='reminder-button'>
              <CancelButton /> <Reminder />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default EventForm
