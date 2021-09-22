import React from "react";
import "./reminderalert.css";


const ReminderAlert = (props) => {
    return (props.trigger) ? (
        <div className="deleteReminder">
            <p>Are you sure you want to delete this reminder?</p>
            <div className="btnContainer">
                <button onClick={props.cancel} className="cancelbtn">Cancel</button>
                <button onClick={props.delete} className="deletebtn">Delete</button>
            </div>
        </div>
    ) : "";
}

export default ReminderAlert;