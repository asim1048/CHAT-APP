import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {hanleSignInWithGoogle} from '../src/GoogleAuthentication';

const firebaseConfig = {
  apiKey: "AIzaSyAxypaOUMV56kqv4z98wza5PhGCzl_41_w",
  authDomain: "chat-app-cb411.firebaseapp.com",
  projectId: "chat-app-cb411",
  storageBucket: "chat-app-cb411.appspot.com",
  messagingSenderId: "865975995962",
  appId: "1:865975995962:web:0ca55ab15c51ed09efaf03",
 // measurementId: "G-L0LSF84EYJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

//export const googleProvider = new firebase.auth.GoogleAuthProvider();

const provider= new GoogleAuthProvider();
 export const signInWithGoogle= ()=>{  //Call this function to get the user data
    signInWithPopup(auth, provider).then((result)=>{
        //console.log(result);
        //hanleSignInWithGoogle(result);
    }).catch((error)=>{
        console.log(error);
    })
};

