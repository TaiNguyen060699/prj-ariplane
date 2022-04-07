import React from 'react';
import './FlightFareInfo.scss';
import bambo from '../../assets/images/bambo.svg';
import iconGroup from '../../assets/images/group9.svg';

const FlightFareInfo = () => {
  return (
    <div className='flight-fare-info'>
      <div className='flight-fare-info__condition'>
        Conditions
        <div className='flight-fare-info__condition--text'>
          <img src={bambo} alt='' />
          <div className='bamboo-ariway'>
            <p>Bamboo Airways</p>
            <span>QH-183</span>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z' />
              </svg>
              Economy
            </span>
          </div>
        </div>
        <div className='flight-fare-info__condition--economy'>
          <div className='city'>
            <p>Da Nang</p>
            <p>Economy</p>
          </div>
          <img src={iconGroup} alt='' />
          <div className='city'>
            <p>Ho Chi Minh City</p>
          </div>
        </div>
        <div className='flight-fare-info__condition--refundable'>
          Non - Refundable
        </div>
      </div>
      <div className='flight-fare-info__price'>
        price details
        <div className='flight-fare-info__block'>
          <div className='flight-fare-info__block--item'>
            <div className='div'>
              <span>Adult Basic Fare (x1)</span>
              <span className='bold'>1,326,000 vnd</span>
            </div>
            <div className='div'>
              <span>Tax</span>
              <span>included</span>
            </div>
            <div className='div'>
              <span>Regular Total Price</span>
              <span>1,326,000 vnd</span>
            </div>
            <div className='div'>
              <span className='cl-orange'>Save</span>
              <span>-4,000 vnd</span>
            </div>
            <div className="div-border" />
            <div className='div'>
              <span>You pay</span>
              <span>1,322,000 vnd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightFareInfo;
