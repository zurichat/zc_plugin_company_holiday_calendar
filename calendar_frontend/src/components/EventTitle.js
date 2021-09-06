import React from 'react';
import "./EventTitle.css";
import { HiOutlinePencilAlt } from 'react-icons/hi'



function EventTitle() {
    return (
        <div class="event-title">
            <HiOutlinePencilAlt />
            <input type="text" placeholder="Enter event title"></input>
        </div>
        
    )
}

export default EventTitle
