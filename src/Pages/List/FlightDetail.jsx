import React from 'react'
import './FlightDetail.scss'
import bambo from '../../assets/images/bambo.svg';
import iconGroup5 from '../../assets/images/group5.svg';

const FlightDetail = () => {
  return (
    <div className='flight-detail'>
      <div className='flight-detail__time'>
        <div className='flight-time'>
          <div className='time-block'>
            <p>21:40</p>
            <p>11 Feb</p>
          </div>
          <div className='time-center'>1h30</div>
          <div className='time-block'>
            <p>21:40</p>
            <p>11 Feb</p>
          </div>
        </div>
        <img class='flight-icon' src={iconGroup5} alt='' />
        <div className='flight-depart-return'>
          <div className='depart'>
            <p>Da Nang(DAD)</p>
            <p>Da Nang Airport</p>
          </div>
          <div className='return'>
            <p>Ho Chi Minh City (SGN)</p>
            <p>Tansonnhat Intl</p>
          </div>
        </div>
      </div>
      <div className='flight-detail__ariway'>
        <div className='title'>
          <img src={bambo} alt='' />
          <div className='text'>
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
        <div className='content'>
          <div className='content__text'>
            <p>
              Baggage <b>20kg</b>
            </p>
            <p>
              In-flight <b>Meal</b>
            </p>
            <p>
              In-flight <b> Entertainment</b>
            </p>
          </div>
          <div className='content__text'>
            <p>
              Aircraft <b>Airbus A321</b>
            </p>
            <p>
              Seat layout <b>3-3</b>
            </p>
            <p>
              Seat pitch <b>29 inches (standard)</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail