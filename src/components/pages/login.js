import React,{useState} from 'react';
import './login.css'
import SignUp from './SignUp';
import { FcGoogle} from "react-icons/fc";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/firebase';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const loginUser = ()=> {
        console.log(email);
        console.log(password);
    }
    return (
        <div class="container">
        <form >
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div class="sign-up-container">
                <button disabled={!validateForm()} onClick={loginUser}>Log In</button>
                <div className="or">or</div>
                <button onClick={signInWithGoogle}>
                    <a href="#" class="social" > Login With  <FcGoogle class="fab fa fa-Google fa-2x"/></a>
                </button>
            </div>

            <div className='forgot'>
                <a href="#">Forgot your password?</a>
                <div class="signup">
                    <a >
                        <Link to="/sign-up">Sign up</Link>
                    </a>
                </div>
            </div>
        </form>
        </div>

    )
}
//<a href="#" class="social" onClick={signInWithGoogle}><BsGoogle class="fab fa fa-twitter fa-2x"/></a>
export default Login


{/* <button ><a href="#">Log In</a></button> */}
