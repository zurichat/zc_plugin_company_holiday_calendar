import React from 'react';
import './Description.css'

function Description() {
  return (
    <div className="containers">
        <h6> Description </h6>
        <div className="icons-containers">
            
            <span> <i class="fas fa-paperclip"></i></span>
            <span> <i class="fas fa-bold"></i></span>
            <span><i class="fas fa-italic"></i></span>
            <span><i class="fas fa-underline"></i></span>
            <span><i class="fas fa-list-ol"></i></span>
            <span><i class="fas fa-list"></i> </span>
            <span><i class="fas fa-link"></i></span>
        </div>
        <div className="input-containers">
            <input type="text" placeholder="Enter text here" />
        </div>

    </div>
    );
}

export default Description;
