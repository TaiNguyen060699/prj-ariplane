import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './FlightHeader.scss';
import iconBag from '../../assets/images/bag.svg';
import iconCutlery from '../../assets/images/cutlery.svg';
import bambo from '../../assets/images/bambo.svg';
import iconGroup from '../../assets/images/group9.svg';
import FlightDetail from './FlightDetail';
import FlightFareInfo from './FlightFareInfo';

const FlightHeader = () => {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const handleActive = () => {
    setActive1(!active1);
    setActive(!active);
  };

  const handleActive2 = () => {
    setActive1(!active1);
    setActive(!active);
  };
  return (
    <>
      <div className='flight-table__header'>
        <div className='flight-table__name'>
          <img src={bambo} alt='' />
          <span>Bamboo Airways</span>
        </div>
        <div className='flight-table__results'>
          <div>21:40</div>
          <div>DAD</div>
        </div>
        <div className='flight-table__icon'>
          <span>1h 30m</span>
          <img src={iconGroup} alt='' />
          <span>Direct</span>
        </div>
        <div className='flight-table__results'>
          <div>23:40</div>
          <div>DAD</div>
        </div>
        <div className='flight-table__item'>
          <div className='flight-table__item--bag'>
            <img src={iconBag} alt='' />
            <span>
              Baggage <b>20kg</b>
            </span>
          </div>
          <div className='flight-table__item--bag'>
            <img src={iconCutlery} alt='' />
            <span>
              In-flight <b>Meal</b>
            </span>
          </div>
        </div>
        <div className='flight-table__price'>
          <div>1,326,000 vnd</div>
          <div>1,326,000 vnd</div>
        </div>
        <div className='flight-table__button'>
          <button> Chosse</button>
        </div>
      </div>
      <div className='flight-table__breakcum'>
        <span>
          <Link
            to='##'
            className={`${active ? 'active' : ''}`}
            onClick={handleActive2}
            element={<FlightDetail />}
          >
            Flight detail
          </Link>
        </span>
        <span>
          <Link
            to='##'
            className={`${active1 ? 'active' : ''}`}
            onClick={handleActive}
            element={<FlightFareInfo />}
          >
            Fare info
          </Link>
        </span>
        <Routes>
          <Route path='##' element={<FlightDetail />} />
          <Route path='###' element={<FlightFareInfo />} />
        </Routes>
        <span className='border'></span>
      </div>
    </>
  );
};

export default FlightHeader;
