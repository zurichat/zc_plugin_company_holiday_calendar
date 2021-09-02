// Import the necessary libraries.
import React, { useState } from 'react';


// Import the css files
import './reminder.css'


// Create Reminder Component.
const Reminder = () => {
    const [isButtonClick, setIsButtonClick] = useState("none");
    return (
        <div className='dropdown'>
            <button className='dropbtn' onClick={() => {setIsButtonClick("block")}}>Set a Reminder</button>
            <div className='dropdown-content' style={{display: isButtonClick}}>
                <p>Do not repeat</p>
                <p>Daily</p>
                <p>Weekly on Wednesday</p>
                <p>Monthly</p>
                <p>Yearly</p>
                <p>Every week day (Monday to Friday)</p>
                <a href='#'>Custom...</a>
            </div>
        </div>
    )
}

// Export Reminder component
export default Reminder;