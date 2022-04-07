import React from 'react'
import './FlightYour.scss'
import bambo from '../../assets/images/bambo.svg';
import iconGroup from '../../assets/images/group9.svg';

 const YourFlight = () => {
  return (
    <>
      <div className='your-flight'>
        <div className='your-flight__header'>Your flights</div>
        <div className='your-flight__inner'>
          <div className='your-flight__calendar'>
            <div className='your-flight__calendar--day'>01</div>
            <div className='your-flight__calendar--month'>
              <p>Fri, 11 Feb, 2022</p>
              <p>Da Nang - Ho Chi Minh</p>
            </div>
          </div>
          <div className='your-flight__bamboo'>
            <img src={bambo} alt='' />
            <div className='your-flight__bamboo--text'>
              <p>Bamboo Airways</p>
              <p>Detail</p>
            </div>
          </div>
          <div className='your-flight__status'>
            <div className='your-flight__status--results'>
              <div>21:40</div>
              <div>DAD</div>
            </div>
            <div className='your-flight__status--icon'>
              <span>1h 30m</span>
              <img src={iconGroup} alt='' />
              <span>Direct</span>
            </div>
            <div className='your-flight__status--results'>
              <div>23:40</div>
              <div>DAD</div>
            </div>
          </div>
          <div className='your-flight__button'>
            <button>Change departure flight</button>
          </div>
          <div className='your-flight__calendar'>
            <div className='your-flight__calendar--day bg-blue'>01</div>
            <div className='your-flight__calendar--month'>
              <p>Sun, 13 Feb, 2022</p>
              <p>Ho Chi Minh - Da Nang</p>
            </div>
          </div>
        </div>
      </div>
        <div className='your-flight__subtoal'>
          <p>Subtotal</p>
          <p>1,322,000 vnd</p>
        </div>
    </>
  );
};

export default YourFlight