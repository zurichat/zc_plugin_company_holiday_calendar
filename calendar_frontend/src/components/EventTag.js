import { useState } from "react";
import "./eventTag.css";
import ColorTheme from "./ColorTheme";

const EventTag = () => {
  const [tag, setTag] = useState("Company Holiday");
  const [color, setColor] = useState(false);
  return (
    <div className="event-tag">
      <div className='eventHeader'>
      <h6>Event Tag</h6>
      <span onClick={()=>setColor(true)}><i className="fas fa-angle-down arrowIcon"></i></span>
      </div>
      
      <div className='eventTagInputContainer'>
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button className='eventTagActive'></button>
      </div>
      {color && 
       <ColorTheme />}
    </div>
  );
};

export default EventTag;
