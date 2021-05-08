import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useHistory } from "react-router-dom";

const UserMenu = () => {
    const showSettings = (event) => {
      event.preventDefault();
  
    }

    const history = useHistory();

  
      return (
        <Menu>
          <a id="home" className="menu-item" onClick={(e) => {e.preventDefault(); history.push("/home")}} href="/home">Home</a>
          <a id="you" className="menu-item" href="javascript:void(0);">You</a>
          <a id="you" className="menu-item" onClick={(e) => {e.preventDefault(); alert('hi'); history.push("/about")}} href="/about">About</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Photostream</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Albums</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Faves</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Galleries</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Groups</a>
          <a id="you" className="menu-item" onClick={(e) => {e.preventDefault(); history.push("/cameraroll")}} href="/cameraroll">Camera Roll</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Rececnt Activities</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Prople</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Organize</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">Explore</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">Recent Photos</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">Trending</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">Events</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">The Commons</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">Flickr Galleries</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">World Map</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">Camera Finder</a>
          <a id="explore" className="menu-item" href="javascript:void(0);">Flickr Blog</a>
          <a id="prints" className="menu-item" href="javascript:void(0);">Prints& Wall Art</a>
          <a id="prints" className="menu-item" href="javascript:void(0);">Photo Books</a>
          <a id="prints" className="menu-item" href="javascript:void(0);">View Cart</a>
          <a id="prints" className="menu-item" href="javascript:void(0);">Pro</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Upload</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Notifications</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Account</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Flickr Mail</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Settings</a>
          <a id="you" className="menu-item" href="javascript:void(0);">Log Out</a>
          <a onClick={ showSettings } className="menu-item--small" href=""></a>
        </Menu>
      );
    
  }
  export default UserMenu;