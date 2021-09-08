import React from "react";
import ".Modal.css";


function Modal() {
  const [openModal] = () => {

    return (
      <div className="modalContainer">
        <div className="title">Custom recurrence</div>
        <div className="subtitle">Repeat every
      <span>1 
        <span title="week" type="button" class="week">
          Week
        </span>
      </span>
    </div>
      <div className="body">Repeat on
        <span title="Sunday">S</span>
        <span title="Monday">M</span>
        <span title="Tuesday">T</span>
        <span title="Wednesday">W</span>
        <span title="Thursday">T</span>
        <span title="Friday">F</span>
        <span title="Saturday">S</span>
      </div>
        <p>Ends</p>
      <div>
        <input type="radio" id="never" name="never" value="Never"></input>
        <label for="Never">Never</label>
        <br>
        <input type="radio" id="on" name="On" value="On"></input>
        <label for="on">On</label>
        <br>
        <input type="radio" id="after" name="after" value="After"></input>
        <label for="After">After</label><br>
      </div>
        <div className="footer">
          <button onClick={() => closeModel(false)} id="cancelBtn" className="cancel">Cancel</button>
          <button className="done">Done</button>
    
        </div>
    
      </div>
    );
  };


}

import default Modal;