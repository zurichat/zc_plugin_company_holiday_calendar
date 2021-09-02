import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DateInput.css'

const DateInput = ({ placeholder, selected, onChange}) =>{

    return (
        <DatePicker 
            placeholderText={placeholder} 
            selected={selected} 
            onChange={onChange}
        />
    );
}

export default DateInput;