import React from 'react' 
import mailImg from './mail.png'
import './ForgetPasswordSuccess.css'

const ForgetPasswordSuccess = () => {


return (
  <div className="forgetpassword-page">

  <form className="forgetpasswordsuccess">

       <img src={mailImg} className="formsuccess"/>
       <h4 className="center"> Check your inbox </h4>
       <p className="forgetpasswordsuccess"> We sent a verification link. Please check your email to reset your password </p>

       <br />   

        </form>
</div>
)


}


export default ForgetPasswordSuccess