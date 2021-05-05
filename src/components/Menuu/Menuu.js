import React from 'react';
import './Menuu.css';
import {useState, useContext } from "react"
import GuestMenu from '../../menues/GuestMenu/GuestMenu';
import UserMenu from '../../menues/UserMenu/UserMenu';
import {isLoggedInContext} from '../../App'
const Menuu = (props) => {
  const isloggedin = useContext(isLoggedInContext)
    if (isloggedin) {
      return <UserMenu />;
    }
  else { return <GuestMenu />;}

};

export default Menuu;