import React from 'react'
import logo from "../assets/logo.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./Emailverify.css"

function EmailVerify() {
  return (
    <>

     <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a class="navbar-brand" href="/">
            
        <img src={logo} style={{width:"333px",
                    height:"30" ,
                    width:"30" }} class="d-inline-block align-top" alt=""/>
            
            Overpay
          </a>
       
         
          <button class="button" type="submit" onClick={() =>  window.location.href='/'}>Sign in</button>
        
    </nav>
    
<div class="container height-100 d-flex justify-content-center align-items-center">
    <div class="position-relative">
        <div class="card2 p-2 text-center">
            <h3>Verify your email</h3>
            <div> <span class="text1">Verify your email
                   We have sent code to your email 
                  </span> <small class="text2">alesiaka******@mail.com</small></div>
            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2"> 
            <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" />
             <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" /> 
             <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
             <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> 
             <input class="m-2 text-center form-control rounded" type="text" id="fifth" maxlength="1" /> 
             
             </div>
            <div class="mt-4"> <button class="button-sign" onClick={() =>  window.location.href='/login'}>Validate</button> </div>
            <div class="content d-flex justify-content-center align-items-center"> 
                            <span class="txt1">Didn't get the code</span> 
                            <a href="#"  class="txt2">Resend</a>
                  </div>
        </div>
    </div>
</div>

</>
  )
}

export default EmailVerify