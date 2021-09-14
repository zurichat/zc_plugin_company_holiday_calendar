
import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './Modal.css'
import { HiOutlinePencilAlt, HiOutlineClockCircle } from 'react-icons/hi'

import icon from './clock-icon.png'
import icon2 from './calendar-icon.png'

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
              className={`event-btn ${!showEventPage && 'tab-border'} ${showEventPage && 'tab-background'
                }`}
              onClick={() => setShowEventPage(true)}
            >
              Event
            </button>
            <button
              className={`reminder-btn ${showEventPage && 'tab-border'} ${!showEventPage && 'tab-background'
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
              <div className="reminder-tab ">
                <form>
                  <div className="reminder-tab__title">
                    <HiOutlinePencilAlt />
                    <input type="text" placeholder="Enter event title"></input>

                  </div>
                  <div className="reminder-tab__timer">
                    <div className="calendar">
                      <img className='calendar-icon' src={icon2}></img>
                      <input type="text" placeholder="Sep 4, 2021"></input>

                    </div>
                    <div className="clock">
                      <img className='clock-icon' src={icon}></img>
                      <input type="text" placeholder="10:30am"></input>

                    </div>

                  </div>

                </form>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  )
}

export default Modal
