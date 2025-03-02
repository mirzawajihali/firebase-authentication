
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
      .then((result) =>{
        setUser(result.user)   ;

      })
      .catch(error => {
        console.log(error.message);
      })

    }

   const handleSignOut = () => {
    signOut(auth).then(() => {
        setUser(null);
      }).catch((error) => {
        setUser(null);
        console.log(error.message);
        // An error happened.
      });
    }


    return (
        <div>
            

            {user? <button onClick={handleSignOut} className="bg-red-600 p-4 m-4 rounded-3xl font-bold">Sign Out</button> : <button onClick={handleGoogleSignIn} className="bg-red-600 p-4 m-4 rounded-3xl font-bold">Login with google</button>}

            {user && <div className="flex flex-col items-center">
                <img src={user.photoURL} alt="" />  
                <h1>{user.displayName}</h1>
                <h1>{user.email}</h1>
               
                </div> }

                </div>
       
    );
};

export default Login;