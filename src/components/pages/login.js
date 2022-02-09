import React from 'react'
import './login.css'
import SignUp from './SignUp';
import {BsFacebook, BsGoogle} from "react-icons/bs";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/firebase';
function login() {
    return (
        <div class="container">
        <form action="#">
<div class="social-container">
<a href="#" class="social"><BsFacebook class="fa fa-facebook fa-2x"/></a>
<a href="#" class="social" onClick={signInWithGoogle}><BsGoogle class="fab fa fa-twitter fa-2x"/></a>
</div>
<span>or use your account</span>
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<div class="sign-up-container">
<a href="#">Forgot your password?/</a>
<a ><Link to="/sign-up">Sign up</Link></a>
</div>
<br></br>


<button ><Route path='/Log In' component={login}/>Log In</button>
</form>
</div>

    )
}

export default login


{/* <button ><a href="#">Log In</a></button> */}
