import React from 'react';
import './Footer.scss';
import iconTelephone from '../../assets/images/telephone.svg';
import iconGmail from '../../assets/images/gmail.svg';
import iconFb from '../../assets/images/fb.svg';
import iconIns from '../../assets/images/ins.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <div className='footer__left'>
            <div className='call-us pr-20'>
              <img className='pr-10' src={iconTelephone} alt='Telephone' />
              <span>Call us: +84 908 02 02 58</span>
            </div>
            <div className='email'>
              <img className='pr-10' src={iconGmail} alt='Gmail' />
              <span>Email: chucinog@gmail.com</span>
            </div>
          </div>
          <div className='footer__right'>
            <div className='follow pr-10'>Follow us</div>
            <div className='contact'>
              <img className='pr-10' src={iconFb} alt='Facebook' />
              <img src={iconIns} alt='Instagram' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
