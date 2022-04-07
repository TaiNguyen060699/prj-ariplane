import React from 'react';
import './Header.scss'
import iconVN from '../../assets/images/vn.svg';
import iconUSA from '../../assets/images/usa.svg';
import iconText from '../../assets/images/Baycungban.svg';
import { items } from './items';

const Header = (props) => {
  return (
    <header className={`header ${props.styClass}`}> 
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <img className='pr-20' src={iconText} alt="Baycungban" />
            <img className='pr-10' src={iconVN} alt='Viet Nam' />
            <img src={iconUSA} alt='USA' />
          </div>
          <div className="header__nav">
             <ul>
               {items.map((val, key) => (
                 <li key={key}>
                   <a className='pr-10' href={val.path} title={val.text}>{val.text}</a>
                 </li>
               ))}
             </ul>
          </div>
          <div className="header__button">
            <button>Booking now   </button>
          </div>
        </div>
      </div>
    </header>      
  );
};

export default Header;
