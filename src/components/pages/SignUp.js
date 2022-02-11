import React from 'react'
import './login.css'
import {FcGoogle} from "react-icons/fc";
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/firebase';
/* import {firebase} from '../firebase/firebase'; */
function SignUp() {
  
  /* const signInWithGoogle = () => {
    const provder = new GoogleAuthProvider();
    console.log('authentication',authentication);
    signInWithPopup(authentication,provder).then( (res) => {
      console.log(res); 
    }).catch(err => {
      console.log(err);
    });
  } */

  const googleSignInHandler = signInWithGoogle; 
  return (
        <div class="container">
        <form action="#">

<input type="text" placeholder="First Name" />
<input type="text" placeholder="Last Name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<input type="password" placeholder="Confirm Password" />
<div class=""></div>
<button class="register-btn"><a href="#" class="register">Register</a></button><br></br>
<div className="or">or</div>
<button onClick={signInWithGoogle}>
    <a href="#" class="social" > Register With
        <FcGoogle class="fab fa fa-Google fa-2x"/></a></button><br></br>
<a ><Link to="/log-in">Already a customer?</Link></a>
</form>
</div>

    )
}

export default SignUp