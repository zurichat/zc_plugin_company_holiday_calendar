import React from 'react';
import "./Navbar.css";


function Navbar() {
    return (
        <div className="navbar">
           <label> <i className="fal fa-calendar-alt"></i></label>
            <select id="month">
                <option value="january">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>


            </select>
        </div>
    )
}

export default Navbar
