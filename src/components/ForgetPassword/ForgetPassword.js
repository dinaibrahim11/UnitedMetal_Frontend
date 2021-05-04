import React, { useState, useEffect } from 'react'
import searchImg from './search1.png'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import './ForgetPassword.css'
import passImg from './icon-password.jpg'

const ForgetPassword = () => {

    const apiURL = "http://localhost:3000/users" ;   //json server
    const [passwordURL, setPasswordURL] = useState();
    const [redirect, setRedirect] = useState(null);
    const [userError, setUserError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setemailError] = useState();
    const [isSubmitting, setisSubmitting] = useState(false);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        checkUserInput();
        validateEmail();
        setisSubmitting(true);
    }
    
    const handleEmailInput = (e) => {
        setEmail(e.target.value);  
    }
    
    const validateEmail = () => {
        if(!email){
            setemailError('Email is required'); setUserError('');      
        }
        else {setemailError('')}
    }

    const checkUserInput = () => {
      axios.get(apiURL + '?email=' + email) 
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

     if(redirect) {
        return <Redirect to={redirect} />
      }

    return (
        <div className="resetpassword-page"  data-testid="forgetpassword" >           
        <form className="resetpassword" onSubmit={handleSubmit} data-testid="form">
              
               <img className="forgotpass" src={passImg} /> 
              <h4 className="center"> Forgot your password ? </h4>
              <h6 className="center"> Please enter your email to search for your account </h6>

              <div className="input-field">
                  <input type="email" placeholder="Email address" className="active validate" id="email"
                         onChange={handleEmailInput} value={email} data-testid="input"/>
                         <p className="error">{emailError}</p>
                         <p className="error">{userError}</p>
              </div>
                   
              <div className="searching">
                 <button className="btn btn-block waves-effect" id="forgotpassword-button" data-testid="button"> Search </button>
              </div>
                 
                 <br />
                 <br />
               </form>
        </div>
    );


}



export default ForgetPassword