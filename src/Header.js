import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <img src='http://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt='' />
            </div>
            <div className='header_search'>
                <SearchIcon />
            </div>
            <div className='header_right'>
                <HeaderOptions Icon={HomeIcon} title='Home'/>
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOptions Icon={CatIcon} title='Messaging'/>
                <HeaderOptions Icon={NotificationIcon} title='Notification'/>
                <HeaderOptions avatar='./assests/image.jpg' title='me'/>
            </div>
        </div>
        
    )
};

export default Header;
