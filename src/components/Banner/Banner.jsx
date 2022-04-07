import React from 'react';
import './Banner.scss';
import iconArrow from '../../assets/images/arrow-bottom.svg';

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
          <div className='banner__calendar'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <div className='form-field --dual-input'>
                  <div className='form-field__group'>
                    <div
                      className='form-floating --open-suggest'
                      data-booking-suggest='P4'
                    >
                      <input
                        className='form-control form-field__input --dual-top'
                        type='text'
                        name='FR_DepartureDate'
                        placeholder='Depart'
                        data-id='DepartureDate'
                        readonly=''
                        data-input-suggest=''
                        data-input-picker='start'
                        data-value='20220407'
                      />
                      <label className='form-field__label' for='Depart1'>
                        Depart
                      </label>
                    </div>
                    <div className='form-floating' data-booking-suggest='P44'>
                      <input
                        className='form-control form-field__input --dual-bottom'
                        type='text'
                        name='FR_ReturnDate'
                        placeholder='Return'
                        data-id='ReturnDate'
                        readonly=''
                        data-input-suggest=''
                        data-input-picker='end'
                        data-value='20220413'
                      />
                      <label className='form-field__label' for='Return1'>
                        Return
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='form-field --dual-input'>
                  <div className='form-field__group'>
                    <div
                      className='form-floating --open-suggest'
                      data-booking-suggest='P4'
                    >
                      <input
                        className='form-control form-field__input --dual-top'
                        type='text'
                        name='FR_DepartureDate'
                        placeholder='Depart'
                        data-id='DepartureDate'
                        readonly=''
                        data-input-suggest=''
                        data-input-picker='start'
                        data-value='20220407'
                      />
                      <label className='form-field__label' for='Depart1'>
                        Depart
                      </label>
                    </div>
                    <div className='form-floating' data-booking-suggest='P44'>
                      <input
                        className='form-control form-field__input --dual-bottom'
                        type='text'
                        name='FR_ReturnDate'
                        placeholder='Return'
                        data-id='ReturnDate'
                        readonly=''
                        data-input-suggest=''
                        data-input-picker='end'
                        data-value='20220413'
                      />
                      <label className='form-field__label' for='Return1'>
                        Return
                      </label>
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
