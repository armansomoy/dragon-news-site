import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='text-center py-8'>
            <img className='mx-auto mb-3' src={logo} alt="" />
            <p className='text-xl mb-2 text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-[#706F6F]'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;