import React from 'react';
import './start-and-endtime.css';
import icon from './default.png'


const TimeComp = (props) => {
    return (
        <div className="boxx">
            <img className="imge" src = {icon}></img>
            <select className= "selct">
                <option>{props.el1}</option>
                <option>12:00 AM</option>
                <option>12:15 AM</option>
                <option>12:30 AM</option>
                <option>12:45 AM</option>
                <option>1:00 AM</option>
                <option>1:15 AM</option>
                <option>1:30 AM</option>
            </select>
        </div>
            
            
    );
}

export default TimeComp;