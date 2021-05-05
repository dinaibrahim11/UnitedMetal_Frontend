import React from 'react'
import classes from './FormSuccess.module.css'
import mailImg from './mail.png'

const FormSuccess = () => {


    return (
 <div className={classes.form_page}>

    <form className={classes.formsuccess}>

         <img src={mailImg} className={classes.formsuccess} />

         <h4 className={classes.center}> Check your inbox </h4>
         <h6 className={classes.formsuccess}> We sent a verification link. Please check your email for confirmation </h6>

         <br />

          </form>
  </div>
    )
}


export default FormSuccess
