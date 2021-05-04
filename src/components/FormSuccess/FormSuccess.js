import React, { useState } from 'react'
import './FormSuccess.css'
import mailImg from './mail.png'

const FormSuccess = () => {


    return (
 <div className="form-page">

    <form className="formsuccess">

         <img src={mailImg} className="formsuccess" />

         <h4 className="center"> Check your inbox </h4>
         <h6 className="formsuccess"> We sent a verification link. Please check your email for confirmation </h6>

         <br />

          </form>
  </div>
    )
}


export default FormSuccess
