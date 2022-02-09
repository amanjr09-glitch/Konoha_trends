import React from 'react'
import './login.css'
import {BsFacebook, BsGoogle} from "react-icons/bs";
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
<div class="social-container">
<a href="#" class="social" ><BsFacebook class="fa fa-facebook fa-2x"/></a>
<a href="#" class="social" onClick={googleSignInHandler}><BsGoogle class="fab fa fa-twitter fa-2x"/></a>
</div>
<input type="text" placeholder="First Name" />
<input type="text" placeholder="Last Name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<input type="password" placeholder="Confirm Password" />
<button class="register-btn" ><a href="#">Register</a></button><br></br>
<a ><Link to="/log-in">Already a customer?</Link></a>

</form>
</div>

    )
}

export default SignUp