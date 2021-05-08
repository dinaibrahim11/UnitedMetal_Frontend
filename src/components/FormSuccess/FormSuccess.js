import React from 'react'
import classes from './FormSuccess.module.css'
import mailImg from './mail.png'

/**
 * A form responsible for showing the user a message to check his/her email for confirmation
 * 
 * @author Esraa Hamed
 * @example <ForgetSuccess />
 * @returns {element} The FormSuccess form contents
 */
const FormSuccess = () => {

return (
 <div className={classes.form_page}>
    <form className={classes.formsuccess}>

     <img src={mailImg} className={classes.img__formsuccess} />
     <h4 className={classes.center}> Check your inbox </h4>
     <h6 className={classes.center} > We sent a verification link. Please check your email for confirmation </h6>

         <br />
          </form>
  </div> 
    )
}

export default FormSuccess
