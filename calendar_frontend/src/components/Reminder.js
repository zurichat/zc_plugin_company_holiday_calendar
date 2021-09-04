// Import the necessary libraries.
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'
import CustomRecurrence from './customRecurrence';


// Import the css files
import './reminder.css'


// Create Reminder Component.
const Reminder = () => {
    const [isButtonClick, setIsButtonClick] = useState(false);
    const [showCustom, setShowCustom] = useState(false)
    return (
        <div className='dropdown'>
            <button className='dropbtn' onClick={() => {setIsButtonClick(!isButtonClick)}}>Create <FaChevronDown className='faChevron'/></button>
            <div className='dropdown-content' style={{display: `${isButtonClick ? "block" : "none"}`}}>
                <option>Do not repeat</option>
                <option>Daily</option>
                <option>Weekly on Wednesday</option>
                <option>Monthly</option>
                <option>Yearly</option>
                <option>Every week day (Monday to Friday)</option>
                <option onClick = {() => {
                    setShowCustom(!showCustom)
                    setIsButtonClick(!isButtonClick)
                }}>Custom...</option>
            </div>
            {showCustom && <CustomRecurrence/>}
        </div>
    )
}

// Export Reminder component
export default Reminder;