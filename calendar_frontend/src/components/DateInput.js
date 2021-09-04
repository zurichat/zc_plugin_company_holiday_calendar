import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendar, FaAngleDown } from 'react-icons/fa';
import './DateInput.css'

const DateInput = ({ className, placeholder, showIcon}) =>{
    /*
        The selected state and onChange function should eventually come as props
        from the event component or any component that uses this component
        or 
        This component should be wrapped with the Control component from 
        react-hook form and neccessary props passed - that's if we decide to handle
        the event submission as a form
    */
    const [selected, setSelected] = useState();
    const [focused, setFocused] = useState(false)

    return (
        <div className={className}>
            <div className={
                `DateInput${showIcon? ' icon-enabled-date-picker': ''}${selected? ' active': ''}${focused? ' focused': ''}`
            }>
                {showIcon && <FaRegCalendar className="date-picker-icon"/>}
                <DatePicker 
                    placeholderText={placeholder}
                    selected={selected}
                    onChange={(date)=>{setSelected(date)}}
                    onFocus={()=>{setFocused(true)}}
                    onBlur={()=>{setFocused(false)}}
                />
                {showIcon && <FaAngleDown className="date-picker-icon"/>}
            </div>
        </div>
    );
}

export default DateInput;