import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import './App.css';
import Header from './components/Header/Header';
import Searchbar from './components/Search/Searchbar';
import SearchPage from './components/Search/SearchPage';
import images1 from './components/Search/images1';
import images2 from './components/Search/images2';
import images3 from './components/Search/images3';
import images4 from './components/Search/images4';
import images5 from './components/Search/images5';
import images6 from './components/Search/images6';
import images7 from './components/Search/images7';
import images8 from './components/Search/images8';
import images9 from './components/Search/images9';
import images10 from './components/Search/images10';
import images11 from './components/Search/images11';
import images12 from './components/Search/images12';
import people1 from './components/Search/people1';
import people2 from './components/Search/people2';
import people3 from './components/Search/people3';
import people4 from './components/Search/people4';

import Group1 from './components/Search/Group1';
import Group2 from './components/Search/Group2';
import Group3 from './components/Search/Group3';
import Group4 from './components/Search/Group4';


import Photos from './components/Search/Photos';
import Main from './components/Main/Main';

import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import Home from './pages/Home/Home';
import ResetPassword from './components/ResetPassword/ResetPassword'
import ResetPasswordSuccess from './components/ResetPasswordSuccess/ResetPasswordSuccess'
import ForgetPasswordSuccess from './components/ForgetPasswordSuccess/ForgetPasswordSuccess';
import Signup from './components/Signup/Signup';
import FormSuccess from './components/FormSuccess/FormSuccess';


const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
      {/*<Main />*/}
      <Header />
    
      {/* <Switch>

      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/post-signup" component={FormSuccess} />
      <Route path="/forgotpassword" component={ForgetPassword} />
      <Route path="/post-forgotpassword" component={ForgetPasswordSuccess} />
      <Route path="/forgotpassword-confirm" component={ResetPassword} />
      <Route path="/post-forgotpassword-confirm" component={ResetPasswordSuccess} />
      <Route path="/home" component={Home} /> 

      </Switch> */}
      <Main />

    </div>
    </BrowserRouter>
    
  );
}

export default App;
