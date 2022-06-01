import React from 'react'
import logo from "../assets/logo.png";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./logged-in.css";
function Login() {
  return (
    
     <body>
   <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a class="navbar-brand" href="/">
            
        <img src={logo} style={{width:"333px",
                    height:"30" ,
                    width:"30" }} class="d-inline-block align-top" alt=""/>
            
            Overpay
          </a>
       
         
          <button class="button" type="submit"onClick={() =>  window.location.href='/'} >Logout</button>
        
    </nav>


    

<div class="container height-100 d-flex justify-content-center align-items-center">
    <div class="position-relative">
        <div class="card3 p-2 text-center"> 
            <h3>Hello John Doe</h3>
             <div>
                  <span class="txt1">
                   you're logged in.Well done
                  </span>  
             </div>
            

                  
                       
                       <div class="mt-4">
                        <button class="button1" onClick={() =>  window.location.href='/'}>Log out</button>
                        </div> 
                       
                       
                        
                       
       </div> 
       
       
</div>
                      
    </div>
    </body>
     
  )
}

export default Login