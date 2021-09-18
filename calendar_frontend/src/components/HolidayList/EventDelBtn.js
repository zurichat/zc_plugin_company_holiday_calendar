import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './HolidayList.css';
import { RiDeleteBin5Line } from 'react-icons/ri';
import './eventDel.css'

const EventDelBtn = ({cancelDelEvent, confirmDelEvent}) => {
  const states = useContext(AppContext);
  const { isModalOpen, setIsModalOpen } = states
  
  return (
    <>
      <div className="del_event_overlay" onClick={() => cancelDelEvent(false)}></div>
      
      <div className="evtDeleteBckGrd">
        <div className="title">
          <h3>Are you sure you want to delete this event?</h3>
        </div>
        <div className="cancel_del_btn">
          <button className='cancel_btn' onClick={() => cancelDelEvent(false)}>Cancel
          </button>
          <button className='del_btn' onClick={() => confirmDelEvent(true)}>Delete</button>
        </div>
      </div>
    </>
    );
}

export default EventDelBtn