import React from 'react' 
import mailImg from './mail.png'
import classes from './ForgetPasswordSuccess.module.css'

/**
 * A form responsible for showing the user a message to check his/her email for validation
 * 
 * @author Esraa Hamed
 * @example <ForgetPasswordSuccess />
 * @returns {element} The Forget Password Success form contents
 */
const ForgetPasswordSuccess = () => {

return (
  <div className={classes.div__forgetpasswordsucces_page}>

  <form className={classes.form__forgetpasswordsuccess}>

       <img src={mailImg} className={classes.img__formsuccess}/>
       <h4 className={classes.h4__center}> Check your inbox </h4>
       <h6 className={classes.h6__center}> We sent a verification link. Please check your email to reset your password </h6>
       <br />   
       
        </form>
</div>
)
}

export default ForgetPasswordSuccess