import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <p className='text-xl'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;