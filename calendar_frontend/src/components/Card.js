import React from 'react';
import './Card.css'
const randomEventData=[
    {
        day:"Wednesday",
        date:'01',
        timings:'All Day',
        description:"Company Break"
    },
    {
        day:"Thursday",
        date:'01',
        timings:'All Day',
        description:"Company Break"
    },
    {   
        day:"Monday",
        date:'01',
        timings:'All Day',
        description:"Company Break"
    },
    {
        day:"Friday",
        date:'01',
        timings:'All Day',
        description:"Company Break"
    }
]
const Card=()=>{

    const Eventfunction=()=>{
        return randomEventData.map((data)=>{
            return <div className="card" >
                <div className="card-body">
                    <div className="d-flex flex-column">
                        <div className="d-flex fw-bolder">
                            <div className="card-text">{data.day}</div>
                            <div className="card-text ms-3">{data.date}</div>
                        </div>
                    <div className="timings">{data.timings}</div>
                <div className="description">{data.description}</div>
            </div>
           
        </div>
        </div>
    })
    }
    return(
        <div className="container">
           {Eventfunction()}
        </div>
    )
}

export default Card