import React from 'react' 
import mailImg from './mail.png'
import classes from './ForgetPasswordSuccess.module.css'

const ForgetPasswordSuccess = () => {


return (
  <div className={classes.forgetpassword_page}>

  <form className={classes.forgetpasswordsuccess}>

       <img src={mailImg} className={classes.formsuccess}/>
       <h4 className={classes.h4__center}> Check your inbox </h4>
       <p className={classes.forgetpasswordsuccess}> We sent a verification link. Please check your email to reset your password </p>

       <br />   

        </form>
</div>
)


}


export default ForgetPasswordSuccess