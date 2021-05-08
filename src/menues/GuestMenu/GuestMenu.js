import React from 'react';
import { slide as Menu } from 'react-burger-menu'
class GuestMenu extends React.Component {
    showSettings (event) {
      event.preventDefault();
  
    }
  
    render () {
  
      return (
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a onClick={ this.showSettings } className="menu-item--small" href=""></a>
        </Menu>
      );
    }
  }
  export default GuestMenu;