import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber  } from "firebase/auth";
//import { auth, db, storage } from "../firebase";


//import {SignInWithGoogle} from '../GoogleAuthentication';

import { auth, signInWithGoogle } from "../firebase";

const LoginWithPhone = () => {

    const [err, setErr] = useState(false);

    const [number, setNumber] = useState();
    const [showOTP, setShowOTP] = useState(false);
    const navigate = useNavigate();

    function render(){
        const auth = getAuth();
        window.recaptchaVerifier = auth.RecaptchaVerifier('recaptcha-container');
       // recaptchaVerifier.render();
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const number = e.target[0].value;
            console.log(number)
            setNumber(number);
            setShowOTP(true);
            render();

            const auth = getAuth();
            auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
                window.confirmationResult = confirmationResult;
               const coderesult = confirmationResult;
                document.getElementById('sender').style.display = 'none';
                document.getElementById('verifier').style.display = 'block';
            }).catch(function(error){
                alert(error.message);
            });





        } catch (err) {
            setErr(true);
        }
    }
    const handleOPT = async (e) => {
        e.preventDefault();
        const OTP = e.target[0].value;
       

        try {
            //await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            setErr(true);
        }
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className="title">Login With Phone Number</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Number" />
                    <div id="recaptcha-container"></div>
                    {!showOTP && <button>Send</button>}
                    {err && <span>Something went wrong</span>}
                </form>
                {showOTP && <form onSubmit={handleOPT}>
                    <input type="text" placeholder="OTP" />
                    <button>Login</button>
                    {err && <span>Something went wrong {err}</span>}
                </form>}

                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginWithPhone;
