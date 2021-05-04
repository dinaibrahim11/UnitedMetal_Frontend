import React from 'react';
import ReactDOM from 'react-dom';
import './Menuu.css';
import GuestMenu from '../../menues/GuestMenu/GuestMenu';
import UserMenu from '../../menues/UserMenu/UserMenu';
const Menuu = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserMenu />;
    }
  else if(!isLoggedIn){  return <GuestMenu />;}

};

ReactDOM.render(
//comment this line when you integrate

<Menuu isLoggedIn={true} />,
document.getElementById('root')
);

export default Menuu;