import React, { useState, useEffect} from 'react'
import classes from './Signup.module.css'
import {Link} from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';
import { Redirect } from "react-router-dom";
import axios from 'axios'
import Recaptcha from 'react-recaptcha';
import API from '../../fakeAPI';


/**
 * Signup new user
 * @author Esraa Hamed
 * @async
 * @example <Signup />
 * @returns {element} The sign up form contents
 * 
 */
const Signup = () => {

const apiURL = "http://localhost:3000/users" ;   //json server
const [redirect, setRedirect] = useState(null);

const [firstName, setFirstname] = useState('');
const [lastName, setLastname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [age, setAge] = useState('');

const [isChecked, setIsChecked] = useState('false');

const [fnError, setfnError] = useState();
const [lnError, setlnError] = useState();
const [emailError, setemailError] = useState();
const [passError, setpassError] = useState();
const [ageError, setageError] = useState();
const [checkboxErr, setCheckboxErr] = useState();
const [errorcount, setErrorCount] = useState('');

const [isSubmitting, setisSubmitting] = useState(false);

/**
 * Handles what happens when form is submitted
 * 
 * @param {object} e - the JavaScript event object
 */
const handleSubmit = (e) => {
    e.preventDefault();
    setisSubmitting(true);
    checkUserInput();
    validateInfo();
    postDataHandler();
    submitForm();
}   

/**
 *  Checks if all inputs are valid, then user will be registered and will be redirected to another form
 *  that shows the user a message to check his/her email for confirmation 
 */
const submitForm = () => {
  if(emailError=='' && passError=='' && checkboxErr=='' && fnError=='' && lnError=='' && ageError=='') {
    setRedirect("/post-signup");
  }
}

// ------------------------------------- json server -------------------------------------------//

/**
 * Checks the availability of the email, if it's already in the fakeAPI, function will return 'Email unavailable'
 * It's considered to be part of the email validation, but it's written in a separate function since it has different logic than other validations 
 * & depends on the server 
 */
 const checkUserInput = () => {
  API.get('users?email=' + email)
  .then(response => {
    console.log(response.data);
    if(response.data.length > 0) {
      setemailError('Email unavailable');
    }
  })
}

/**
 * Responsible for posting/recording the data inputted by the user in the fakeAPI, but it checks first if all inputs are valid 
 * 
 */
const postDataHandler = () => {
if(emailError==='' && passError==='' && ageError==='' && fnError==='' && lnError===''){
  const userInfo = {
    firstname : firstName,
    lastname: lastName,
    age: age,
    emailaddress: email,
    password: password 
   }
  API.post('users', userInfo)      //json server
  .then(response => {
   console.log(response)
 })
}
}

//---------------------------------------- HANDLING INPUTS ---------------------------------------//
// ** Handling input functions also contain validations to provide instant validation on typing ** //

//First Name
const handleFirstNameInput = (e) => {
setFirstname(e.target.value);

if(e.target.value) 
{setfnError(''); setErrorCount(0)}
else {
  setfnError('First name required')
}
}

//Last Name
const handleLastNameInput = (e) => {
setLastname(e.target.value); 

if(e.target.value) 
{setlnError(''); setErrorCount(0)}
else {
  setlnError('Last name required')
}
}

//Age
const handleAgeInput = (e) => {
  setAge(e.target.value) ;

  if(!e.target.value) {
    setageError('Age is required')
    setErrorCount(1);
  }
   else if (e.target.value < 13) {
    setageError('Your age should be 13+ ');
    setErrorCount(1);
  } 
  else if (e.target.value >120) {
    setageError('Invalid Age');
    setErrorCount(1);
  }
  else if (!Number.isInteger(parseInt(e.target.value,10))) 
  {
     setageError('Age should be inputted as number')
     setErrorCount(1);
  }
   else {setageError(''); setErrorCount(0)}
}

//Email
const handleEmailInput = (e) => {
setEmail(e.target.value);  
API.get('users?email=' + e.target.value )
.then(response => {
  console.log(response.data);
  if(response.data.length > 0) {
    setemailError('Email unavailable');
  }
})

if(!e.target.value){
  setemailError('Email is required');
  setErrorCount(1);
}
else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
  setemailError('Email address is invalid');
  setErrorCount(1);
}
else {setemailError(''); setErrorCount(0)}
}

//Password
const handlePasswordInput = (e) => {
setPassword(e.target.value);

if(!e.target.value){
  setpassError('Password is required');
  setErrorCount(1);
} else if (e.target.value.length < 12) {
  setpassError('Password should be 12 characters or more');
  setErrorCount(1);
} else {setpassError(''); setErrorCount(0)}
}


//Recapcha
const handleCheckboxInput = (response) => {
  if(response) {
setIsChecked(true);
  }

  if(response == 'false') {
    setCheckboxErr('Please verify that you are a human')
    setErrorCount(1);
  } else {setCheckboxErr(''); setErrorCount(0)}
}

const RecapchaLoaded = () => {
  console.log("loaded successfully") ;
}

// ---------------------------------------- VALIDATIONS ---------------------------------------------- //
// **Beside the validations written inside handling functions, we also need separate validation function ** //

/**
 * Insures that all input data is valid
 * This is what provides instant validation on submiiting the form
 */
 const validateInfo = () => {

    //First name
    if(!firstName) {
        setfnError('First name is required');
        setErrorCount(1);
    } else{setfnError(''); setErrorCount(0)}

    //Last name
    if(!lastName) {
        setlnError('Last name is required');
        setErrorCount(1);
    } else{setlnError(''); setErrorCount(0)}

    //Email
    if(!email){
        setemailError('Email is required');
        setErrorCount(1);
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
        setemailError('Email address is invalid');
        setErrorCount(1);
    }
    else {setemailError(''); setErrorCount(0)}

    //Password
    if(!password){
        setpassError('Password is required');
        setErrorCount(1);
    } else if (password.length < 12) {
        setpassError('Password should be 12 characters or more');
        setErrorCount(1);
    } else {setpassError(''); setErrorCount(0)}

    //Age
    if(!age) {
      setageError('Age is required')
      setErrorCount(1);
    }
     else if (age < 13) {
      setageError('Your age should be 13+ ');
      setErrorCount(1);
    } 
    else if (age >120) {
      setageError('Invalid Age');
      setErrorCount(1);
    }
    else if (!Number.isInteger(parseInt(age,10))) 
    {
       setageError('Age should be inputted as number')
       setErrorCount(1);
    }
     else {setageError(''); setErrorCount(0)}

    //Recapcha
    if(isChecked == 'false') {
      setCheckboxErr('Please verify that you are a human')
      setErrorCount(1);
    } else {setCheckboxErr(''); setErrorCount(0)}

} 
 
// --------------------------------------- FACEBOOK LOGIN ----------------------------------------------- //

const [data, setData] = useState({});
const [login, setLogin] = useState(false);
const [picture, setPicture] = useState('');
const [userID, setUserID] = useState('');
const [name, setName] = useState('');
const [facebookEmail, setFacebookEmail] = useState();
const [isRegistered, setIsRegistered] = useState();

/**
 * Facebook login component to be returned with other form components
 */
let fbContent;

const responseFacebook = (response) => {
  console.log(response);
  setData(response);
  setPicture(response.picture.data.url);
  setFacebookEmail(response.email);
  setUserID(response.id);
  setName(response.name);

  if (response.accessToken) {
    setLogin(true);
  } else {
    setLogin(false);
  }
} 

/**
 * Search for the user in our database, and if not found, record his/her info 
 * Since an already-registered user can click on login with facebook button
 * We want to avoid multiple records for a single person
 */
const postFacebookDataHandler = () => {
  API.get('users?email=' + facebookEmail)
  .then(response => {
    console.log(response.data);
    if(response.data.length === 0) {
          setIsRegistered(false);
       }})
       if(isRegistered === false) {
        const facebookUserInfo = {
          name: name,
          email: facebookEmail }
      API.post('users', facebookUserInfo)      //json server
      .then(response => {
       console.log(response)
     })  
}
}

/**
 * If user clicked on the Facebook login button he/she will be redirected to home page as well as
 * having their data recorded (if it wasn't already recorded)
 */
const componentClicked = () =>{
  postFacebookDataHandler();
  setRedirect("/home");
}

if(login) { 
  fbContent = <FacebookLogin />
}
else {
  fbContent = (
    <FacebookLogin
    appId="942791213199046"
    autoLoad={false}
    returnScopes={true}
    size="small"
    fields="name,email,picture"
    scope="public_profile,user_friends"
    callback={responseFacebook}
    onClick={componentClicked}
    icon="fa-facebook" 
    />
  )
}

// ------------------------------------------ RETURN -------------------------------------------------- //

if(redirect) {
  return (
    <Redirect to={redirect} />
  )
}

return (

  <div className="page"  data-testid="signup">
 <div  className={classes.div__signup_page}>

    <form className={classes.form__signup_page} onSubmit={handleSubmit} data-testid="form">
         <h5 className={classes.center}> Create your account</h5>

         <div className={classes.div__input}>
         <input type="text" placeholder="First name" className={classes.div__inputfield} id="signup-firstname" data-testid="fname"
                onChange={handleFirstNameInput} value={firstName} />
               <p className={classes.p__error}>{fnError}</p>
         </div>

         <div className={classes.div__input}>
         <input type="text" placeholder="Last name" className={classes.div__inputfield} id="signup-last name" data-testid="lname"
                onChange={handleLastNameInput} value={lastName} />
                <p className={classes.p__error}>{lnError}</p>
         </div>

         <div className={classes.div__input}>
          <input type="text" placeholder="Your age" className={classes.div__inputfield} id="signup-age" data-testid="age"
                  onChange={handleAgeInput} value={age}/>
          <p className={classes.p__error}>{ageError}</p>
         </div>

         <div className={classes.div__input}>
          <input type="email" placeholder="Email address" className={classes.div__inputfield} id="signup-email" data-testid="email"
                 onChange={handleEmailInput} value={email} />
                 <p className={classes.p__error}>{emailError}</p>
         </div>

         <div className={classes.div__input}>
          <input type="password" placeholder="Password" className={classes.div__inputfield} id="signup-password" data-testid="password"
                 onChange={handlePasswordInput} value={password} />
                 <p className={classes.p__error}>{passError}</p>
           </div>
         
         <div className={classes.div__recaptcha}>
         <Recaptcha
          sitekey="6LdeKMIaAAAAAKqTK1fu3QZUmB7Lzu0A804Ln1hN"
          render="explicit"
          onloadCallback={RecapchaLoaded}
          verifyCallback={handleCheckboxInput}
          />  
        </div>
         
        <div className={classes.div__usererror}>
        <p className={classes.p__error2}>{checkboxErr}</p>
        </div>

         <div className={classes.div__input}>
         <button className={classes.div_signupbutton} id="signup" data-testid="button">Sign up</button>
         </div>
        
          <hr className={classes.hr__or}/>
          <p  className={classes.p__or}> OR </p>
          <br />
          
        {/*  <div>
            {fbContent}
          </div> */}

          <br />
          <hr />
          <p> Already have an account? Log in <Link to ="/login">here </Link> </p>
          <br />
          </form>
  </div>
 </div> 
)
}

export default Signup;