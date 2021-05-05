import React, {useState} from 'react' 
import { useParams, useLocation, Redirect } from "react-router-dom";
import classes from './ResetPassword.module.css'
import passImg from './icon-password.jpg'
import axios from 'axios';

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
    
    const handleSubmit = (e) => {
    e.preventDefault();
    validateInfo();
    checkUserInput();
    }

    const handlePasswordInput = (e) => {

        setPassword(e.target.value);
        if(!e.target.value){
          setpassError('Password is required');
        } else if (e.target.value.length < 12) {
          setpassError('Password should be 12 characters or more');
        } else {setpassError('')}
    }

    const validateInfo = () => {

    if(!password){
        setpassError('Password is required');
      } else if (password.length < 12) {
        setpassError('Password should be 12 characters or more');
      } else {setpassError('')}
    }

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

    const changePassword = () => {
      const newPass = {
        password: password
      }
      const newURL = apiURL + '/' + userId ;
     // axios.patch(apiURL+'/1', {password: password});
     axios.patch(newURL, {password: password});
    }

    if(redirect){
      return(
        <Redirect to={redirect} />
      )
    }

    return (
        <div className={classes.resetpassword_page} > 

        <form className={classes.resetpassword} onSubmit={handleSubmit}>
             
        <img className={classes.searchImg} src={passImg} />

             <h4 className={classes.center}> Email Verified </h4>
             <h6 className={classes.resetpassword}> Please enter your new password </h6>
             
       
                <div className="input-field">
                 <input type="password" placeholder="New Password" className="active" id="resetpassword-password"
                        onChange={handlePasswordInput} value={password} />
                        <p className="error">{passError}</p>
                </div>

                <br />
                  <div className="col s12">
                 <button className={`btn ${classes.btn__block} waves-effect`} > Confrim password </button>
                 </div>

                  <br />
                  <br />                
    
              </form>
      </div>
    )


}


export default ResetPassword