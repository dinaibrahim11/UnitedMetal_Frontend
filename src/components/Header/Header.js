/* This component will be responsible for rendering different headers */
import React from 'react';
import GuestHeader from '../../headers/GuestHeader/GuestHeader';
import UserHeader from '../../headers/UserHeader/UserHeader';
import './Header.css';
import { useSelector } from 'react-redux';


// import UserHeader from './UserHeader/UserHeader';
// import GuestHeader from './GuestHeader/GuestHeader'

/**
 * Navigation bar at the top
 * @author Dina Mohsen
 * 
 */
const Header = () => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);

    //let renderedHeader = ;


    return (
        <div style={{marginBottom: '55px'}}>
            {/* {alert(isLoggedIn.toString())} */}
        {isLoggedIn ? <UserHeader /> : <GuestHeader />}
        </div>
    );

};

export default Header;