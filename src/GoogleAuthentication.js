import { auth, db, storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useNavigate, Link } from "react-router-dom";
export function hanleSignInWithGoogle  (result)  {
 
    try{
        console.log(result)
        console.log("dk")
        console.log(result[0]);
        console.log("dssk")
        
        return;
         //Create a unique image name
        // console.log(result.UserImpl[0].auth.displayName)
    //   const date = new Date().getTime();
    //   const storageRef = ref(storage, `${result[0].displayName + date}`);

       }catch(error){
        console.log("Error while login with Google...")
    }
}

// export const startLogout = () => {
//     return () => {
//         return firebase.auth().signOut()
//     }
// }