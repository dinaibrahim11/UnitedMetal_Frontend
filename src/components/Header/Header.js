/* This component will be responsible for rendering different headers */
import React from 'react';
import GuestHeader from '../../headers/GuestHeader/GuestHeader';
import UserHeader from '../../headers/UserHeader/UserHeader';
import OrganizeHeader from '../../headers/OrganizeHeader/OrganizeHeader'
import './Header.css';
import { useSelector } from 'react-redux';
import {useLocation} from "react-router-dom";


// import UserHeader from './UserHeader/UserHeader';
// import GuestHeader from './GuestHeader/GuestHeader'

/**
 * Navigation bar at the top
 * @author Dina Mohsen
 * 
 */
const Header = () => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);
    // const islogged = JSON.parse(localStorage.getItem('currentUser'));
    // alert(islogged)

    let location = useLocation();
    const query = new URLSearchParams(location.search);
    const urlParam = query.get('/organizer');
    console.log(urlParam);

    if(urlParam) {
        return(
            <OrganizeHeader />
        )
    }

    return (
        <div style={{marginBottom: '55px'}}>
            {/* {alert(isLoggedIn.toString())} */}
        {isLoggedIn ? <UserHeader /> : <GuestHeader />}
        </div>
    );

};

export default Header;