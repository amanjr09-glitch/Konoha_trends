import React from 'react'
import './login.css'
import SignUp from './SignUp';
import { FcGoogle} from "react-icons/fc";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/firebase';
function login() {
    return (
        <div class="container">
        <form action="#">
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<div class="sign-up-container">
<button ><Route path='/Log In' component={login}/>Log In</button>
<div className="or">or</div>
<button onClick={signInWithGoogle}>
    <a href="#" class="social" > Login With  
        <FcGoogle class="fab fa fa-Google fa-2x"/></a>
        </button>

</div>
<div className='forgot'>
<a href="#">Forgot your password?</a>

<div class="signup"><a ><Link to="/sign-up">Sign up</Link></a></div>

</div>


</form>
</div>

    )
}
//<a href="#" class="social" onClick={signInWithGoogle}><BsGoogle class="fab fa fa-twitter fa-2x"/></a>
export default login


{/* <button ><a href="#">Log In</a></button> */}
