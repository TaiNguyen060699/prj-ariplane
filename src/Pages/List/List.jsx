import React from 'react';
import Header from '../../components/Header/Header';
import './List.scss';
import iconSwap from '../../assets/images/swap.svg';
import iconSearch from '../../assets/images/search.svg';
import FlightHeader from './FlightHeader';
import FlightDetail from './FlightDetail';
import YourFlight from './FlightYour';
import FlightFareInfo from './FlightFareInfo';
import Footer from '../../components/Footer/Footer';

const List = (props) => {
  return (
    <div className='list'>
      <Header styClass='list__header' />
      <div className='container'>
        <div className='list__title'>
          <div className='list__left'>
            <div className='text text-left'>
              <p>Da Nang (DAD)</p>
              <p>Fri, 22 Mar, 2022</p>
            </div>
            <div className='swap'>
              <img src={iconSwap} alt='' />
            </div>
            <div className='text text-right'>
              <p>Ho Chi Minh (SGN)</p>
              <p>Fri, 22 Mar, 2022</p>
            </div>
          </div>
          <div className='list__center'>
            <span>Round-trip</span>
            <span>
              <b>02</b> Adult, <b>01</b> children
            </span>
            <span>Business Class</span>
          </div>
          <div className='list__button'>
            <button>
              Change Flights
              <img src={iconSearch} alt='' />
            </button>
          </div>
        </div>
        <div className='list__flight'>
          <div className='list__flightLeft'>
            <div className='flight-dropdown'>
              <span className='filter'>Filter</span>
              <select name='Transit' id=''>
                <option value='1'>Transit</option>
                <option value='2'>Transit 1</option>
                <option value='3'>Transit 2</option>
              </select>
              <select name='time' id=''>
                <option value='1'>Time</option>
                <option value='2'>Time 1</option>
                <option value='3'>Time 2</option>
              </select>
              <select name='Airline' id=''>
                <option value='1'>Airline</option>
                <option value='2'>Airline 1</option>
                <option value='3'>Airline 2</option>
              </select>
              <select name='Low Price' id=''>
                <option value='1'>Low Price</option>
                <option value='2'>Low Price 1</option>
                <option value='3'>Low Price 2</option>
              </select>
            </div>
            <div className='flight-table'>
              <FlightHeader />
              <FlightDetail />
              {/* <FlightFareInfo /> */}
            </div>
            <div className='flight-table'>
              <FlightHeader />
              {/* <FlightDetail /> */}
              <FlightFareInfo />
            </div>
            <div className='flight-table'>
              <FlightHeader />
              {/* <FlightDetail /> */}
              {/* <FlightFareInfo /> */}
            </div>
            <div className='flight-table'>
              <FlightHeader />
              {/* <FlightDetail /> */}
              {/* <FlightFareInfo /> */}
            </div>
            <div className='flight-table'>
              <FlightHeader />
              {/* <FlightDetail /> */}
              {/* <FlightFareInfo /> */}
            </div>
            <div className='flight-table'>
              <FlightHeader />
              {/* <FlightDetail /> */}
              {/* <FlightFareInfo /> */}
            </div>
            <div className='flight-table'>
              <FlightHeader />
              {/* <FlightDetail /> */}
              {/* <FlightFareInfo /> */}
            </div>
            <div className='flight-table'>
              <FlightHeader />
              {/* <FlightDetail /> */}
              {/* <FlightFareInfo /> */}
            </div>
          </div>
          <div className='list__flightRight'>
            <YourFlight />
          </div>
        </div>
      <Footer ></Footer>
      </div>
    </div>
  );
};

export default List;
