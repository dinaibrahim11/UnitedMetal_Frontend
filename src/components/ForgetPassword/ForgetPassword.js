import React, { useState, useEffect } from 'react'
import searchImg from './search1.png'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import classes from './ForgetPassword.module.css'
import passImg from './icon-password.jpg'
import API from '../../fakeAPI';


/**
 * A from that takes email as input and searches for it in the database
 * If found the user should be sent verification email, to be able to go to the reset password form  
 * 
 * @author Esraa Hamed
 * @async
 * @example <ForgetPassword />
 * @returns {element} The Forget Password form contents
 *
 */
const ForgetPassword = () => {

    const apiURL = "http://localhost:3000/users" ;   //json server
    const [passwordURL, setPasswordURL] = useState();
    const [redirect, setRedirect] = useState(null);
    const [userError, setUserError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setemailError] = useState();
    const [isSubmitting, setisSubmitting] = useState(false);
    
    /**
     * Handles what happens when form is submitted
     * 
     * @param {object} e - the JavaScript event object
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        checkUserInput();
        validateEmail();
        setisSubmitting(true);
    }
    
    //---------------------------------------- HANDLING INPUTS ---------------------------------------//

    const handleEmailInput = (e) => {
        setEmail(e.target.value);  
    }
    
    // --------------------------------------- VALIDATIONS ------------------------------------------ //

    const validateEmail = () => {
        if(!email){
            setemailError('Email is required'); setUserError('');      
        }
        else {setemailError('')}
    }

    // ---------------------------------------- json server -------------------------------------------//
    /**
     * Checks if the email inputted by the user is in the database
     * If found, the user will be directed another form showing a message to check his/her email for validation
      * Otherwise, the user remains in forget password form page and is shown an error message : 'Invalid email' 
     */
    const checkUserInput = () => {
      API.get('users?email=' + email) 
      .then(response => {
         console.log(response);
         if(response.data.length > 0 ) {
             setemailError('');
             setPasswordURL('localhost3001/forgotpassword-confrim?email=' + email )
             setRedirect("/post-forgotpassword");
         } else if (response.data.length ===0 && email) {
             setUserError('Invalid email');
         }
      })
    }

    // ------------------------------------------ RETURN -------------------------------------------------- //

     if(redirect) {
        return <Redirect to={redirect} />
      }

    return (
        <div className={classes.div__forgetpassword_page}  data-testid="forgetpassword" >           
        <form className={classes.form__forgetpassword} onSubmit={handleSubmit} data-testid="form">
              
               <img className={classes.img__forgotpass} src={passImg} /> 
              <h4 className={classes.h4__center}> Forgot your password ? </h4>
              <h6 className={classes.h6__center}> Please enter your email to search for your account </h6>

              <div className={classes.div__input}>
                  <input type="email" placeholder="Email address" className={classes.div__inputfield} id="email"
                         onChange={handleEmailInput} value={email} data-testid="input"/>
                         <p className={classes.p__error}>{emailError}</p>
              </div>

              <div className={classes.div__usererror}>
              <p className={classes.p__error2}>{userError}</p>
              </div>
                   
              <div className={classes.searching}>
                 <button className={classes.div_forgetpasswordbutton}  id="forgotpassword-button" data-testid="button"> Search </button>
              </div>
                 
                 <br />
                 <br />
               </form>
        </div>
    );
}

export default ForgetPassword