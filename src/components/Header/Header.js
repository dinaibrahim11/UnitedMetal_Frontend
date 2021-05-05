/* This component will be responsible for rendering different headers */
import React from 'react';
import GuestHeader from '../../headers/GuestHeader/GuestHeader';
import UserHeader from '../../headers/UserHeader/UserHeader';
import './Header.css';
import { useSelector } from 'react-redux';

const Header = () => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);

    //let renderedHeader = ;


    return (
        <div>
        {isLoggedIn ? <UserHeader /> : <GuestHeader />}
        </div>
    );

};

export default Header;