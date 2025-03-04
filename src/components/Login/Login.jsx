
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

    const [user, setUser] = useState(null);
       const [success, setSuccess] = useState(false);
        const [errorMessage, setErrorMessage] = useState('');
        const [showPassword, setShowPassword] = useState(false);
    
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


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;


        setSuccess(false);

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
           setSuccess(true);
        })
        .catch(error =>{
            console.log(error.message);
        })
      
      }





    return (
        <div>
            

            {user? <button onClick={handleSignOut} className="bg-red-600 p-4 m-4 rounded-3xl font-bold">Sign Out</button> : <button onClick={handleGoogleSignIn} className="bg-red-600 p-4 m-4 rounded-3xl font-bold">Login with google</button>}

            {user && <div className="flex flex-col items-center">
                <img src={user.photoURL} alt="" />  
                <h1>{user.displayName}</h1>
                <h1>{user.email}</h1>
               
                </div> }



                <div className='max-w-4xl mx-auto'>
                            <div className="hero bg-base-200 min-h-screen">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                      <h1 className="text-5xl font-bold">Login</h1>
                      <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>
                    </div>
                 
                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                 <form onSubmit={handleLogin}>
                      <div className="card-body relative">
                        <fieldset className="fieldset">
                          <label className="fieldset-label">Email</label>
                          <input type="email" name='email' className="input" placeholder="Email" />
                          <label className="fieldset-label">Password</label>
                          <input name='password'
                           type={showPassword ? 'text' : 'password'}
                            className="input" placeholder="Password" />
                          <button onClick={()=> setShowPassword(!showPassword)} className='btn btn-xs absolute right-12 top-32'>{
                              showPassword? <FaEyeSlash /> : <FaEye />
                
                            
                            }</button>
                          <div><a className="link link-hover">Forgot password?</a></div>
                          <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                      </div>
                      </form>
                    </div>
                 <FaEye />
                  </div>
                </div>
                {
                            errorMessage && <div className="text-red-500  p-4 text-center">{errorMessage}</div>
                        }{
                            success && <div className="text-green-500  p-4 text-center">User login successfully</div>
                        }

                        <p>New this website? please <Link to="/signup">Sign Up</Link></p>
                        </div>
                        


                </div>
       
    );
};

export default Login;