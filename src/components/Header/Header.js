/* This component will be responsible for rendering different headers */
import React from 'react';
import GuestHeader from '../../headers/GuestHeader/GuestHeader';
import UserHeader from '../../headers/UserHeader/UserHeader';
import { useSelector } from 'react-redux';

/**
 * Navigation bar at the top
 * @author Dina Mohsen
 * 
 */
const Header = () => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);
    // const islogged = JSON.parse(localStorage.getItem('currentUser'));
    // alert(islogged)


    return (
        <div style={{marginBottom: '0px'}}>
            {/* {alert(isLoggedIn.toString())} */}
    
        {isLoggedIn ? <UserHeader /> : <GuestHeader />}
        </div>
    );

};

export default Header;