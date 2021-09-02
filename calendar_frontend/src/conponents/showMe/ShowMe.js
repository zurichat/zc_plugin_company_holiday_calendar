import React from 'react';
import './ShowMe.css';

function ShowMe() {
  //const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='showMeGrp'>
      <div className='rowGrp'>
        <div className='textGrp'>
          <p className='radioBtnText'>Show me:</p>
        </div>
        <div className='rowRadios'>
          <div className='radioGrp'>
            <input
              type='radio'
              name='showMe'
              id='busy'
              className='radioBtnItem'
              value='busy'
              defaultChecked
            />
            <label htmlFor='busy' className='radioBtnLabel'>
              Busy
            </label>
          </div>
          <div className='radioGrp'>
            <input
              type='radio'
              name='showMe'
              id='available'
              className='radioBtnItem'
              value='available'
            />
            <label htmlFor='available' className='radioBtnLabel'>
              Available
            </label>
          </div>
        </div>
      </div>
      <div className='rowGrp'>
        <div className='textGrp'>
          <p className='radioBtnText'>Visibility:</p>
        </div>
        <div className='rowRadios'>
          <div className='radioGrp'>
            <input
              type='radio'
              name='visibility'
              id='default'
              className='radioBtnItem'
              value='default'
              defaultChecked
            />
            <label htmlFor='default' className='radioBtnLabel'>
              Default
            </label>
          </div>
          <div className='radioGrp'>
            <input
              type='radio'
              name='visibility'
              id='private'
              className='radioBtnItem'
              value='private'
            />
            <label htmlFor='private' className='radioBtnLabel'>
              Private
            </label>
          </div>
          <div className='radioGrp'>
            <input
              type='radio'
              name='visibility'
              id='public'
              className='radioBtnItem'
              value='public'
            />
            <label htmlFor='public' className='radioBtnLabel'>
              Public
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowMe;
