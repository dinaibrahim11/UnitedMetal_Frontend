/* This component will be responsible for rendering different pages */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Main.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Unauthorized from '../Unauthorized/Unauthorized';
import { useSelector } from 'react-redux';
import Organizer from '../Organizer/Organizer';
import Login from '../../components/Login/Login';
import ForgetPassword from '../../components/ForgetPassword/ForgetPassword'
import Home from '../../pages/Home/Home';
import ResetPassword from '../../components/ResetPassword/ResetPassword'
import ResetPasswordSuccess from '../../components/ResetPasswordSuccess/ResetPasswordSuccess'
import ForgetPasswordSuccess from '../../components/ForgetPasswordSuccess/ForgetPasswordSuccess';
import Signup from '../../components/Signup/Signup';
import FormSuccess from '../../components/FormSuccess/FormSuccess';
import SearchPage from '../../components/Search/SearchPage';
import SearchMain from '../../components/Search/SearchMain';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Careers from '../../pages/Careers/Careers';
import Projects from '../../pages/Projects/Projects';
import Project from '../../pages/Project/Project';
import Services from '../../pages/Services/Services';

/**
 * Responsible for the routing of the whole website
 * @example <Main />
 * @author Dina Mohsen
 *     
 */
const Main = (props) => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);
    const searchQuery = useSelector(state => state.users.currentSearchQuery);
    const currentUserId = useSelector(state => state.users.currentUser.userId);

    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
           
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/post-signup" component={FormSuccess} />
                <Route exact path="/forgotpassword" component={ForgetPassword} />
                <Route exact path="/post-forgotpassword" component={ForgetPasswordSuccess} />
                <Route exact path="/forgotpassword-confirm" component={ResetPassword} />
                <Route exact path="/post-forgotpassword-confirm" component={ResetPasswordSuccess} />
            
             <Route exact path='/Unauthorized' component={Unauthorized} />
               <Route exact path="/SearchPage" component={SearchPage} />
               
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/careers" component={Careers} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/SearchPage/" component={SearchPage}/>
             
                <Route exact path="/organize" component={Organizer}/>
                <Route exact path="/SearchPage" component={SearchPage} />

            </Switch>
            
        </main>
    );
};

export default Main;