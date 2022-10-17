import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

//import {SignInWithGoogle} from '../GoogleAuthentication';

import { auth ,signInWithGoogle} from "../firebase";
import { async } from "@firebase/util";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  const hanleLoginWithGoogle=async()=>{
    //console.log("jj");
   
    const result=await signInWithGoogle();
    navigate("/")
    const user=result.user;
    // const profile=user.photoURL;
    // console.log(result);
   
    // return firebase.auth().signInWithPopup(googleProvider)
    //     .then(async result =>{
    //         console.log(result.credential.accessToken)
    //         const user = result.user
    //         console.log(user)
    //         localStorage.setItem('userid', user.uid)
    //         localStorage.setItem('photoURL', user.photoURL)
    //         //TODO if userid exists IN USERS db then use update IF NULL use set
    //         await db.collection('users').doc(user.uid).update({
    //            // id: user.uid,
    //             name: user.displayName,
    //             email: user.email,
    //             phone: user.phoneNumber,
    //             photoURL: user.photoURL
    //         })
    //     })
        
        
    //     .catch( err => {
    //         console.log(err)
    //     })       
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p onClick={()=>hanleLoginWithGoogle()}> Login With Google</p>
        
        <p>Login With <Link to="/loginWithPhone">Number</Link></p>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
