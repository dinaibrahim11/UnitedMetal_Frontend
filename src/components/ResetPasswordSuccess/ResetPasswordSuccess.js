import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import classes from './ResetPasswordSuccess.module.css' 
import tickImg from './tickicon3.png'

/**
 * A form responsible for showing the user a message that the new password is reset successfully
 * 
 * @author Esraa Hamed
 * @example <ResetPasswordSuccess />
 * @returns {element} The Reset Password Success form contents
 */
const ResetPasswordSuccess = () => {

    const [redirect, setRedirect] = useState(null);

    /**
     * Redirects the user to the home page
     */
    const handleClick = () => {
       setRedirect("/home");
    }

   if(redirect) {
      return <Redirect to = {redirect} />
   }

return (

    <div>
    <div className={classes.div__resetpasswordsucces_page}>
      <form className={classes.form__resetpasswordsuccess}>

       <img src={tickImg} className={classes.img__resetpasswordsuccess} />

       <h4 className={classes.h4__center}> Your flickr password is updated </h4>
       <h6 className={classes.h6__center}> Congratulations, now you are allowed to access your flickr account</h6>
       <br />

        <div>
         <button className={classes.div_resetpasswordsuccessbutton} onClick={handleClick}>Okay, got it </button>
        </div>
       <br />

      </form>
     </div>
     </div>
)
}

export default ResetPasswordSuccess