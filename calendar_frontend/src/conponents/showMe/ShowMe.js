import React from 'react';
import './ShowMe.css';

function ShowMe() {
  return (
    <div>
      <div className='rowGrp'>
        <p className='radioBtnText'>Show me:</p>
        <div className='radioGrp'>
          <input type='radio' name='busy' id='busy' className='radioBtnItem' />
          <label htmlFor='busy' className='radioBtnLabel'>
            Busy
          </label>
        </div>
        <div className='radioGrp'>
          <input
            type='radio'
            name='available'
            id='available'
            className='radioBtnItem'
          />
          <label htmlFor='available' className='radioBtnLabel'>
            Available
          </label>
        </div>
      </div>
      <div className='rowGrp'>
        <p className='radioBtnText'>Visibility:</p>
        <div className='radioGrp'>
          <input
            type='radio'
            name='default'
            id='default'
            className='radioBtnItem'
          />
          <label htmlFor='default' className='radioBtnLabel'>
            Default
          </label>
        </div>
        <div className='radioGrp'>
          <input
            type='radio'
            name='private'
            id='private'
            className='radioBtnItem'
          />
          <label htmlFor='private' className='radioBtnLabel'>
            Private
          </label>
        </div>
        <div className='radioGrp'>
          <input
            type='radio'
            name='public'
            id='public'
            className='radioBtnItem'
          />
          <label htmlFor='public' className='radioBtnLabel'>
            Public
          </label>
        </div>
      </div>
    </div>
  );
}

export default ShowMe;
