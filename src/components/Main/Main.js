/* This component will be responsible for rendering different pages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Home from '../../pages/Home/Home';
import UserPage from '../../pages/UserPage/UserPage';
import './Main.css';
import Posts from '../Posts/Posts';
import PostDetail from '../PostDetail/PostDetail';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Unauthorized from '../Unauthorized/Unauthorized';
import { useSelector } from 'react-redux';

const Main = (props) => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);

    return (
        <main>
            <Switch>
                <ProtectedRoute exact path="/home" isLoggedIn={isLoggedIn} component={Posts}/>
                <Route exact path="/user/:id" component={UserPage} />
                <Route exact path="/photos" component={PostDetail} />
                <Route exact path="/photos/:id" component={PostDetail} />
                <Route exact path='/Unauthorized' component={Unauthorized} />
            </Switch>
            
        </main>
    );
};

export default Main;