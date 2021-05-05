import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import classes from './ResetPasswordSuccess.module.css' 
import tickImg from './tickicon3.png'

const ResetPasswordSuccess = () => {

    const [redirect, setRedirect] = useState(null);

    const handleClick = () => {
       setRedirect("/home");
    }

   if(redirect) {
      return <Redirect to = {redirect} />
   }

return (
    <div>

<div className={classes.form_page}>

<form className={classes.formsuccess}>

     <img src={tickImg} className={classes.resetpasswordsuccess} />

     <h4 className={classes.center}> Your flickr password is updated </h4>
     <h6 className={classes.formsuccess}> Congratulations, now you are allowed to access your flickr account</h6>

     <br />
     <button className={`btn ${classes.btn__block} waves-effect`} onClick={handleClick}>Okay, got it </button>
     <br />

      </form>
</div>

    </div>
)

}



export default ResetPasswordSuccess