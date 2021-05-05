import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const GuestHeader = () => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');

    //To avoid the refreshing problem:
    //https://stackoverflow.com/questions/63880605/react-js-how-to-prevent-page-reload-once-click-on-the-link-right-now-the-whole

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (searchQuery === '') {
            return;
        }
        setSearchQuery('');
        history.push("/SearchPage");
    }

 

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            {/* <Navbar.Brand href="/home">Flickr</Navbar.Brand> */}
            <Link to={isLoggedIn ?  "/home" : "/"} style={{textDecoration: 'none'}}>Flickr</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            
        <Nav>
        <Form inline>
                <FormControl value={searchQuery} onChange={handleChange} type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info" type="submit" onClick={handleClick}>Search</Button>
            </Form>
  
            <NavLink className="navbar navbar-dark bg-dark" to="/login" >Login</NavLink>
            <NavLink className="navbar navbar-dark bg-dark" to="/signup">Signup</NavLink>
        </Nav>
    
        </Navbar.Collapse>
        </Navbar>
    );
};

export default GuestHeader;