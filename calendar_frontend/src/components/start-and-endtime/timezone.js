import React from 'react';
import './start-and-endtime.css';
import icon from './default.png'


const timezone = (props) => {
    return (
        <div className="boxx">
            <img className="imge" src = {icon}></img>
            <select className= "selct">
                <option>{props.el1}</option>
                <option>GMT +1</option>
                <option>GMT +2</option>
                <option>GMT +3</option>
                <option>12:45 AM</option>
                <option>1:00 AM</option>
                <option>1:15 AM</option>
                <option>1:30 AM</option>
            </select>
        </div>
            
            
    );
}

export default timezone;