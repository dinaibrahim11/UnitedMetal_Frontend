import React from 'react' ;
import ReactDOM from 'react-dom' ;
import Signup from './Signup';
import {render, cleanup, fireEvent} from '@testing-library/react'

import store from '../../storev2/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}> <Router ><Signup /> </Router></Provider>, div);
})

test('testing emailInput', () => {

const {queryByTestId} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
const emailInput = queryByTestId("email");

 fireEvent.change(emailInput, {target: {value:"esraahamedabdalla@hotmail.com"}});
 expect(emailInput.value).toBe("esraahamedabdalla@hotmail.com");

})

test('testing passwordInput', () => {

    const {queryByTestId} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
    const passwordInput = queryByTestId("password");
    expect(passwordInput).not.toBeNull();

     fireEvent.change(passwordInput, {target: {value:"esraa-password"}});
     expect(passwordInput.value).toBe("esraa-password");
    
    })

    test('testing firstnameInput', () => {

        const {queryByTestId} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
        const firstnameInput = queryByTestId("fname");
        expect(firstnameInput).not.toBeNull();
    
         fireEvent.change(firstnameInput, {target: {value:"test-name"}});
         expect(firstnameInput.value).toBe("test-name");
        
        })  

    test('testing lastnameInput', () => {

        const {queryByTestId} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
        const lastnameInput = queryByTestId("lname");
        expect(lastnameInput).not.toBeNull();
        
         fireEvent.change(lastnameInput, {target: {value:"test-name"}});
         expect(lastnameInput.value).toBe("test-name");
            
        })  
         
     test('testing ageInput', () => {

        const {queryByTestId} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
        const ageInput = queryByTestId("age");
        expect(ageInput).not.toBeNull();
            
        fireEvent.change(ageInput, {target: {value:"test-age"}});
        expect(ageInput.value).toBe("test-age");
                
        }) 
    
test('Empty fields validation', () => {

    const {queryByTestId, queryByText} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
    const emailInput = queryByTestId("email");
    const passwordInput = queryByTestId("password");
    const firstnameInput = queryByTestId("fname");
    const lastnameInput = queryByTestId("lname");
    const ageInput = queryByTestId("age");
    const SignupForm = queryByTestId("form");
    fireEvent.change(emailInput, {target: {value:""}});
    fireEvent.change(passwordInput, {target: {value:""}});
    fireEvent.change(firstnameInput, {target: {value:""}});
    fireEvent.change(lastnameInput, {target: {value:""}});
    fireEvent.change(ageInput, {target: {value:""}});
    fireEvent.submit(SignupForm);
    expect(queryByText('Email is required')).toBeInTheDocument();
    expect(queryByText('Password is required')).toBeInTheDocument();
    expect(queryByText('First name is required')).toBeInTheDocument();
    expect(queryByText('Last name is required')).toBeInTheDocument();
    expect(queryByText('Age is required')).toBeInTheDocument();
})

test('Filled fields validation', () => {

    const {queryByTestId, queryByText} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
    const emailInput = queryByTestId("email");
    const passwordInput = queryByTestId("password");
    const firstnameInput = queryByTestId("fname");
    const lastnameInput = queryByTestId("lname");
    const ageInput = queryByTestId("age");
    const SignupForm = queryByTestId("form");
    fireEvent.change(emailInput, {target: {value:"test@test.com"}});
    fireEvent.change(passwordInput, {target: {value:"test-password"}});
    fireEvent.change(firstnameInput, {target: {value:"test-fname"}});
    fireEvent.change(lastnameInput, {target: {value:"test-lname"}});
    fireEvent.change(ageInput, {target: {value:"test-age"}});
    fireEvent.submit(SignupForm);
    expect(queryByText('Email is required')).not.toBeInTheDocument();
    expect(queryByText('Password is required')).not.toBeInTheDocument();
    expect(queryByText('First name is required')).not.toBeInTheDocument();
    expect(queryByText('Last name is required')).not.toBeInTheDocument();
    expect(queryByText('Age is required')).not.toBeInTheDocument();
})

///////////////////////////////////// SPECIFIC VALIDATIONS ///////////////////////////////////////

///////////////////////////////////////// PASSWORD /////////////////////////////////////////////////
// ------------------------------- check for the number of characters------------------------------/

test('Password length validation', () => {

    const {queryByTestId, queryByText} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
    const passwordInput = queryByTestId("password");
    const SignupForm = queryByTestId("form");
    fireEvent.change(passwordInput, {target: {value:"test"}})
    fireEvent.submit(SignupForm);
    expect(queryByText('Password should be 12 characters or more')).toBeInTheDocument();
})

/////////////////////////////////////////// AGE /////////////////////////////////////////////////
// ------------------------------------- age < 13 ----------------------------------------------/

test('Age_less_than_13 validation', () => {

    const {queryByTestId, queryByText} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
    const ageInput = queryByTestId("age");
    const SignupForm = queryByTestId("form");
    fireEvent.change(ageInput, {target: {value:"9"}})
    fireEvent.submit(SignupForm);
    expect(queryByText('Your age should be 13+')).toBeInTheDocument();
})

// --------------------------------------- age > 120 ---------------------------------------------/

test('Age_more_than_120 validation', () => {

    const {queryByTestId, queryByText} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
    const ageInput = queryByTestId("age");
    const SignupForm = queryByTestId("form");
    fireEvent.change(ageInput, {target: {value:"170"}})
    fireEvent.submit(SignupForm);
    expect(queryByText('Invalid Age')).toBeInTheDocument();
})

// ---------------------------------- age inputted as string ---------------------------------------------/

test('Age_as_string validation', () => {

    const {queryByTestId, queryByText} = render(<Provider store={store}> <Router ><Signup /> </Router></Provider>);
    const ageInput = queryByTestId("age");
    const SignupForm = queryByTestId("form");
    fireEvent.change(ageInput, {target: {value:"twenty"}})
    fireEvent.submit(SignupForm);
    expect(queryByText('Age should be inputted as number')).toBeInTheDocument();
})