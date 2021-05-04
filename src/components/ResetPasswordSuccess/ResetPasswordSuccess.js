import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import './ResetPasswordSuccess.css' 
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

<div className="form-page">

<form className="formsuccess">

     <img src={tickImg} className="resetpasswordsuccess" />

     <h4 className="center"> Your flickr password is updated </h4>
     <h6 className="formsuccess"> Congratulations, now you are allowed to access your flickr account</h6>

     <br />
     <button className="btn btn-block waves-effect" onClick={handleClick}>Okay, got it </button>
     <br />

      </form>
</div>

    </div>
)

}



export default ResetPasswordSuccess