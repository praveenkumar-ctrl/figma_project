import React from 'react'
import logo from "../assets/logo.png";

import "./Forgetpass.css"
function Forgetpass() {
  return (
    <>
    <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a class="navbar-brand" href="/">
            
        <img src={logo} style={{width:"333px",
                    height:"30" ,
                    width:"30" }} class="d-inline-block align-top" alt=""/>
            
            Overpay
          </a>
       
         
          <button class="button" type="submit"  onClick={() =>  window.location.href='/'}>Sign in</button>
        
    </nav>


    
       
       
    <div class="d-flex  align-items-center container">
        <div class="card py-5 px-3">
            <h2 class="verify">Verify your email</h2>
            <span class="text1">
              We have sent code to your email  
                   <small class="text2">alesiaka******@mail.com</small>
                </span>
            <div class="d-flex flex-row mt-5">
                <input type="text" class="form-control" autofocus=""/>
                
                </div>
                <div class="mt-4">
                        <button class="button-sign" onClick={() =>  window.location.href='/login'}>Validate</button>

                       
                        </div> 
                <div class="content d-flex justify-content-center align-items-center"> 
                            
                            <a href="#" class="text2">Forgot your Email?</a>
                          </div>
                          </div>
                          </div>
    </>
  )
}

export default Forgetpass
