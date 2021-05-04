/* This component will be responsible for rendering different headers */
import React from 'react';
import ReactDOM from 'react-dom';
import GuestHeader from '../../headers/GuestHeader/GuestHeader';
import UserHeader from '../../headers/UserHeader/UserHeader';
import './Header.css';

const Header = (props) => {

        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
          return < UserHeader />;
        }
        else if(!isLoggedIn){ return <GuestHeader />;}
    
};

ReactDOM.render(
  //comment this line when you integrate
   <Header isLoggedIn={true} />,
   document.getElementById('root')
  );

export default Header;