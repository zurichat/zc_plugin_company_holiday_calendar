import React, { useContext, useState } from 'react'
import { AppContext } from '../../Plugin'
import './HolidayList.css'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import EventCard from '../EventPopup/EventCard'
import EventDelBtn from './EventDelete/EventDelBtn'
import DeleteModal from 'react-modal'

// import { set } from "date-fns";

const HolidayList = () => {
  const states = useContext(AppContext)
  // const [openDeleteEvent, setDeleteEvent] = useState(false);
  const {
    setShowMonth,
    setShowYear,
    holidays,
    setHolidays,
    days,
    handleOverlay,
    isEventOpen,
    isModalOpen,
    handleEventPopups,
    handleDel,
    openDeleteEvent,
    setDeleteEvent,
    setIsModalOpen,
    currentFormData,
    setCurrentFormData,
    id,
    setId,
  } = states

  // DeleteModal.setAppElement("#root");

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)

  function handleDelete(e) {
    setDeleteModalIsOpen(false)
    handleDel(id, e)
  }

  function editData(ids) {
    const check = holidays.find((item) => item._id === ids)
  }

  return (
    <div
      className='home-page'
      onClick={() => {
        setShowMonth(false)
        setShowYear(false)
      }}
    >
      {holidays.map((holiday, index) => {
        const {
          _id,
          start_date,
          all_day,
          event_title,
          event_colour,
          start_time,
          end_time,
        } = holiday
        return (
          <li
            key={_id}
            className='holiday'
            style={{ borderLeft: `8px solid ${event_colour}` }}
            onClick={(e) => handleEventPopups(index, e)}
          >
            <div className='date-icons wealth'>
              <span className='event-date wealth'>
                {days[new Date(start_date).getDay()]}{' '}
                {new Date(start_date).getDate()}
              </span>
              <div className='navss'>
                <p
                  className='_editIcon'
                  onClick={() => {
                    editData(_id)
                    setIsModalOpen(!isModalOpen)
                  }}
                >
                  <FiEdit2 style={{ marginRight: '5px' }} />
                </p>
                <p
                  className='_mydelete navss'
                  onClick={(e) => {
                    setDeleteModalIsOpen(true)
                    setId(_id)
                  }}
                >
                  <RiDeleteBin5Line className='_deleteIcon navss' />
                </p>
              </div>
              {openDeleteEvent && (
                <div>
                  <EventDelBtn id={_id} />
                </div>
              )}
            </div>
            <p
              className='event-time wealth'
              style={{ color: `${event_colour}` }}
            >
              {all_day
                ? 'All Day'
                : `${
                    +start_time.slice(0, 2) >= 12
                      ? +start_time.slice(0, 2) - 12
                      : +start_time.slice(0, 2)
                  }:${start_time.slice(3, 5).padStart(2, '0')} ${
                    +start_time.slice(0, 2) >= 12 ? 'PM' : 'AM'
                  }-${
                    +end_time.slice(0, 2) >= 12
                      ? +end_time.slice(0, 2) - 12
                      : +end_time.slice(0, 2)
                  }:${end_time.slice(3, 5).padStart(2, '0')} ${
                    +end_time.slice(0, 2) >= 12 ? 'PM' : 'AM'
                  }`}
            </p>
            <p
              className='event-title wealth'
              style={{ color: `${event_colour}` }}
            >
              {event_title}
            </p>
            <div className='pop_up'>
              {holiday.event ? <EventCard id={_id} /> : null}
            </div>
          </li>
        )
      })}

      {isEventOpen && <div onClick={handleOverlay} className='_overlay'></div>}

      {deleteModalIsOpen ? (
        <DeleteModal
          isOpen={deleteModalIsOpen}
          onRequestClose={() => setDeleteModalIsOpen(false)}
          style={{
            content: {
              height: '155px',
              width: '383px',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: 'auto',
              marginBottom: 'auto',
            },
          }}
        >
          <div className='evtDeleteBckGrd'>
            <div className='title'>
              <h3>Are you sure you want to delete this event?</h3>
            </div>
            <div className='cancel_del_btn'>
              <button
                className='cancel_btn'
                onClick={() => setDeleteModalIsOpen(false)}
              >
                Cancel
              </button>
              <button className='del_btn' onClick={() => handleDelete()}>
                Delete
              </button>
            </div>
          </div>
        </DeleteModal>
      ) : null}
    </div>
  )
}

export default HolidayList
