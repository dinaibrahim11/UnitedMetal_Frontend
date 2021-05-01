/* This component will be responsible for rendering different pages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import UserPage from '../../pages/UserPage/UserPage';
import './Main.css';
import Posts from '../Posts/Posts';
import PostDetail from '../PostDetail/PostDetail';


const Main = (props) => {

    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:id" component={UserPage} />
                <Route exact path="/photos" component={PostDetail} />
                <Route exact path="/photos/:id" component={PostDetail} />
            </Switch>
            <Posts />
        </main>
    );
};

export default Main;