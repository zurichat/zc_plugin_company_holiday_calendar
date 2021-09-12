import React, { useContext } from 'react'
import './Sidebar.css'
import { AppContext } from '../../App'

const Sidebar = () => {
  const states = useContext(AppContext)
  const { isSidebarOpen, setIsSidebarOpen, showEventPage, setShowEventPage } =
    states
  return (
    <>
      {isSidebarOpen && (
        <div className='sidebar'>
          <header>
            <h4>Add New Event</h4>
            <i
              className='far fa-times-circle'
              onClick={() => setIsSidebarOpen(false)}
              aria-hidden='true'
              style={{ cursor: 'pointer' }}
            ></i>
          </header>
          <section>
            <div className='tabs'>
              <button
                className={`btn ${showEventPage && 'active'}`}
                onClick={() => setShowEventPage(true)}
              >
                Event
              </button>
              <button
                className={`btn ${!showEventPage && 'active'}`}
                onClick={() => setShowEventPage(false)}
              >
                Reminder
              </button>
            </div>
            {showEventPage ? (
              <div className='event-tab'>
                <form>event form goes here</form>
              </div>
            ) : (
              <div className='reminder-tab'>create reminder tab</div>
            )}
          </section>
        </div>
      )}
    </>
  )
}

export default Sidebar
