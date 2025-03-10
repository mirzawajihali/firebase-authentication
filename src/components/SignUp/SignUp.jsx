import React, { useState } from 'react';
import auth from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSignUp = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,  password);

        const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;



        setErrorMessage('');
        setSuccess(false);

        if(password.length < 6){
            setErrorMessage('Password should be at least 6 characters');
            return;
        }
        if(!strongPasswordRegex.test(password)){
            setErrorMessage('Password should contain at least one uppercase letter, one number and one special character');
        return; }

       
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            setSuccess(true);
            console.log(user);
            // ...
        })
        .catch(error =>{
            console.log("Error", error );
            setErrorMessage(error.message);
            setSuccess(false);
        });
        

    }
    return (
        <div className='max-w-4xl mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
 
 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
 <form onSubmit={ handleSignUp}>
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
            success && <div className="text-green-500  p-4 text-center">User created successfully</div>
        }

        <p>Already have an accout? Go <Link to="/login">Log In</Link></p>
        </div>



       
    );
};

export default SignUp;