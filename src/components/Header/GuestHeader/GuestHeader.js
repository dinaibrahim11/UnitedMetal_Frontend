import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CloudUpload from '@material-ui/icons/CloudUpload';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const GuestHeader = () => {

    return (
        // <header>
        //     <h1>Our React Header. Probably will be on every page </h1>
        // </header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            {/* <Navbar.Brand href="/home">Flickr</Navbar.Brand> */}
            <Link to="/home" style={{textDecoration: 'none'}}>Flickr</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            
        <Nav>
        <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
  
            <Nav.Link href="/login" >Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    );
};

export default GuestHeader;