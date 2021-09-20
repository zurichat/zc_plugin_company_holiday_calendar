import React  from 'react';
import "./ColorTheme.css";

const ColorTheme = () =>{
        return (
            <div className="main-container">
            <div className='colorThemeContainer'>
                <div className='colorThemeBtn'>
                    <button className='colortheme blue'> </button>
                    <button className='colortheme light-blue'> </button>
                </div>
                <div className='colorThemeBtn'>
                    <button className='colortheme purple'> </button>
                    <button className='colortheme red'> </button>
                </div>
                <div className='colorThemeBtn'>
                    <button className='colortheme orange'> </button>
                    <button className='colortheme yellow'> </button>
                </div>
                <div className='colorThemeBtn'>
                    <button className='colortheme green'> </button>
                    <button className='colortheme mint'> </button>
                </div>
                <div className='colorThemeBtn'>
                    <button className='colortheme black'> </button>
                    <button className='colortheme grey'> </button>
                </div>
            </div>
            </div>
        )
    }




    export default ColorTheme;
