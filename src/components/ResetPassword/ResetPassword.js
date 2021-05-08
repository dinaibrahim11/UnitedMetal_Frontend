import React, {useState} from 'react' 
import { useParams, useLocation, Redirect } from "react-router-dom";
import classes from './ResetPassword.module.css'
import passImg from './icon-password.jpg'
import axios from 'axios';

/**
 * A from that takes new password as input and records it in the database
 * It accesses the url parameters to obtain the user's email
 *  
 * @author Esraa Hamed
 * @async
 * @example <ResetPassword />
 * @returns {element} The Reset Password form contents
 */

const ResetPassword = () => {

    const apiURL = "http://localhost:3000/users" ;   //json server
    const [redirect, setRedirect] = useState(null);
    const [userId, setID] = useState('');

    const [password, setPassword] = useState('');
    const [passError, setpassError] = useState('');

    let location = useLocation();
    const query = new URLSearchParams(location.search);
    const emailParam = query.get('email');
    console.log(emailParam);
    
    /**
     * Handles what happens when form is submitted
    * 
    * @param {object} e - the JavaScript event object
    */
    const handleSubmit = (e) => {
    e.preventDefault();
    validateInfo();
    checkUserInput();
    }

    
    //---------------------------------------- HANDLING INPUT ---------------------------------------//
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
        if(!e.target.value){
          setpassError('Password is required');
        } else if (e.target.value.length < 12) {
          setpassError('Password should be 12 characters or more');
        } else {setpassError('')}
    }
    
    // --------------------------------------- VALIDATIONS ------------------------------------------ //
    const validateInfo = () => {
    if(!password){
        setpassError('Password is required');
      } else if (password.length < 12) {
        setpassError('Password should be 12 characters or more');
      } else {setpassError('')}
    }

    // ---------------------------------------- json server -------------------------------------------//

    /**
     * Searches for an email in the databse matching the email param accessed from the url 
     * When found, password will be reset successfully, and changed in the databse
     * Also, user will be redirected to another form page showing a message that password was successfully reset
     */
    const checkUserInput = () => {
      axios.get(apiURL + '?email=' + emailParam)        //search for the email parameter we got in the database
      .then(response => {
         console.log(response);
         if(response.data.length > 0 && passError==='' ) {
           alert(response.data.id);
             setID(response.data.id); 
             changePassword();
             setRedirect("/post-forgotpassword-confirm");
         }
      })
    }

    /**
     * Changes the user's password in the database to the new one inputted by the user in this form
     */
    const changePassword = () => {
      const newPass = {
        password: password
      }
      const newURL = apiURL + '/' + userId ;
     // axios.patch(apiURL+'/1', {password: password});
     axios.patch(newURL, {password: password});
    }


  // ------------------------------------------ RETURN -------------------------------------------------- //

    if(redirect){
      return(
        <Redirect to={redirect} />
      )
    }

    return (
        <div className={classes.div__resetpassword_page} > 

        <form className={classes.form__resetpassword} onSubmit={handleSubmit}>
             
        <img className={classes.img__resetpass} src={passImg} />

             <h4 className={classes.h4__center}> Email Verified </h4>
             <h6 className={classes.h6__center}> Please enter your new password </h6>
             
       
                <div className={classes.div__input}>
                 <input type="password" placeholder="New Password" className={classes.div__inputfield} id="resetpassword-password"
                        onChange={handlePasswordInput} value={password} data-testid="rp_input"/>
                        <p className={classes.p__error}>{passError}</p>
                </div>
 
                  <br />
   
                <div>
                 <button className={classes.div_resetpasswordbutton} data-testid="rp_button"> Confrim password </button>
                </div>

                  <br />
                  <br />                
    
              </form>
      </div>
    )
}

export default ResetPassword