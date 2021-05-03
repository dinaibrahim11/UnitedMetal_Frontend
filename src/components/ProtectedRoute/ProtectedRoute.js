import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Prevents unwanted access to pages
 * @author Abdelrahman Mamdouh
 * @returns a component
 */
const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    
    return (
        <Route {...rest} render={props => {
            if (isLoggedIn) {
                return <Component {...rest} {...props} />
            } else {
                return <Redirect to={
                    {
                        pathname: '/unauthorized',
                        state: {
                            from: props.location
                        }
                    }
                } />
            }

        }} />
    );
}

export default ProtectedRoute;