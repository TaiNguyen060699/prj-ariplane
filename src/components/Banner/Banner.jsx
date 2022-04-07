import React from 'react';
import './Banner.scss';
import iconArrow from '../../assets/images/arrow-bottom.svg';
import iconSwap from '../../assets/images/swap.svg'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner__title'>
          <span>Hello</span>
          <span>Where are</span>
          <span>
            You <b>flying</b> to ...
          </span>
        </div>
        <div className='banner__form'>
          <div className='banner__flightType'>
            <div className='form-field'>
              {' '}
              <button className='btn'> One way / Round-trip</button>
            </div>
            <div className='form-field'>
              {' '}
              <button className='btn'>Multi-city</button>
            </div>

            <div className='form-field'>
              <div className='form-floating'>
                <input type='text' className='form-field__input' />
                <label className='form-field__label'>
                  <b>01</b> Adult, <b>01</b> children
                </label>
                <div className='form-field__trailing'>
                  <img src={iconArrow} alt='' />
                </div>
              </div>
            </div>
            <div className='form-field'>
              <div className='form-floating'>
                <input type='text' className='form-field__input' />
                <label className='form-field__label'>Business Class</label>
                <div className='form-field__trailing'>
                  <img src={iconArrow} alt='' />
                </div>
              </div>
            </div>
          </div>
          <div className='banner__flightCalendar'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <div className='form-field'>
                  <div className='form-field__group'>
                    <div className='form-floating'>
                      <input
                        className='form-field__input'
                        type='text'
                        name=''
                        id=''
                      />
                      <label className='form-field__label'>From</label>
                      <div className='form-field__trailing'></div>
                    </div>
                    <div className="font-icon">
                      <img src={iconSwap} alt="" />
                    </div>
                    <div className='form-floating'>
                      <input
                        className='form-field__input'
                        type='text'
                        name=''
                        id=''
                        value='đâsd'
                      />
                      <label className='form-field__label'>From</label>
                      <div className='form-field__trailing'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='form-field'>
                  <div className='form-field__group'>
                    <div className='form-floating'>
                      <input
                        className='form-field__input'
                        type='text'
                        name=''
                        id=''
                      />
                      <label className='form-field__label'>From</label>
                      <div className='form-field__trailing'></div>
                    </div>
                    <div className='form-floating'>
                      <input
                        className='form-field__input'
                        type='text'
                        name=''
                        id=''
                      />
                      <label className='form-field__label'>From</label>
                      <div className='form-field__trailing'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
