import { format } from 'date-fns'
import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './Modal.css'

const Modal = () => {
  const states = useContext(AppContext)
  const { isModalOpen, setIsModalOpen, showEventPage, setShowEventPage } =
    states
  return (
    <>
      {isModalOpen && (
        <div className='modal'>
          <header>
            <h4>Add New Event</h4>
            <i
              className='far fa-times-circle'
              onClick={() => setIsModalOpen(false)}
              aria-hidden='true'
            ></i>
          </header>
          <section>
            <button
              className={`event-btn ${!showEventPage && 'tab-border'} ${
                showEventPage && 'tab-background'
              }`}
              onClick={() => setShowEventPage(true)}
            >
              Event
            </button>
            <button
              className={`reminder-btn ${showEventPage && 'tab-border'} ${
                !showEventPage && 'tab-background'
              }`}
              onClick={() => setShowEventPage(false)}
            >
              Reminder
            </button>
            {showEventPage ? (
              <div className='event-tab'>
                <form>event form goes here</form>
              </div>
            ) : (
              <div className='reminder-tab'>reminder form goes here</div>
            )}
          </section>
        </div>
      )}
    </>
  )
}

export default Modal
