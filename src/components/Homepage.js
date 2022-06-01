import React from 'react';
import "./Homepage.css";
import Modal from "../assets/modal.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
function Homepage() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const [isActive, setIsActive] = React.useState(false);
    
    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });
    
    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });

  return (
    <>
    <div className='body'>
<div className={isActive ? "container right-panel-active" : "container"} id="container">
{/* <div className={ `container ${isActive && 'right-panel-active'}` } id="container"> */}
	<div class="form-container sign-up-container">
		<form action="/emailverify">
			<h1>Sign up for an Account</h1>
            <p>send spend and save faster</p>
            <button class="sign-google"><a href="#" ><i class="fab fa-google-plus-g"></i></a>Sign in with Google</button>
			
			<p  >-----------------Or with email-----------------</p>
			<div class="row">
                <div class="col">
                  <input type="text" class="form-control1" placeholder="First name" />
                </div>
                <div class="col">
                  <input type="text" class="form-control1" placeholder="Last name" />
                </div>
              </div>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
            <p class="gt1">By creating an account, you agreeing to our <span class="gt">Privacy Policy</span>, and <span class="gt"> Electronics Communication Policy.</span>
               </p>
			<button  class="btn-sign-up">Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="/login">
			
			   <h1>Sign in to overpay</h1>
                <p>send spend and save faster</p>
                <button class="sign-google"><a href="#" ><i class="fab fa-google-plus-g"></i></a>Sign in with Google</button>
				
                <span>---------Or with Email---------</span>
			<input type="email" placeholder="Username or Email" />
			<input type="password" placeholder="Password" />
            <div class="form-check1">
                <input class="form-check1-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check1-label" for="defaultCheck1">
                        Remeber me
                </label>
              </div>
           
              <a  class="forget-password" href="./forget-pass">Forgot your password?</a>
			
			<button class="btn-sign" >Sign In</button>
            <div class="content d-flex justify-content-center align-items-center"> 
                <span>Don't have an account?</span> 
                <a href="#" class="text">Sign up</a>
              </div>
		</form>
         
	</div>
	<div class="overlay-container ">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
                <img src={Modal}
                    style={{width:"333px",
                    height:"389px" ,
                    left:"930px" ,
                    top:"248px"}} 
                /> 
				<h1>Speedy,Easy and Fast</h1>
				<p>Overpay help you set saving goals, earn cash back offers, Go to disclaimer for
                    more details and get paychecks up to two days early. Get a $20 bonus when you
                     receive qualifying direct deposits</p>
				<button class="btn" id="signIn" onClick={() => {
          setIsActive(false)
        }}>Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
                <img src={Modal}
                    style={{width:"333px",
                    height:"389px" ,
                    left:"930px" ,
                    top:"248px"}} 
                /> 
				<h1 >Get better with Money</h1>
				<p> Overpay help you set saving goals, earn cash back offers, Go to disclaimer for
                     more details and get paychecks up to two days early. Get a $20 bonus when you
                      receive qualifying direct deposits</p>
				<button class="btn" id="signUp" onClick={() => setIsActive(true)}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
</div>
</>
  )
}

export default Homepage