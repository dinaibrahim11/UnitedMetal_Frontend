import React from 'react';
import './Menuu.css';
import GuestMenu from '../../menues/GuestMenu/GuestMenu';
import UserMenu from '../../menues/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
const Menuu = (props) => {
  
    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);
    //let renderedHeader = ;


    return (
        <div>
        {isLoggedIn ? <UserMenu /> : <GuestMenu />}
        </div>
    );
};

export default Menuu;
