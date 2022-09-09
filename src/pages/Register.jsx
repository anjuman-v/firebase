import React from 'react'
import './style.css'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  }


  return (
    <div className='maindiv'>
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>React chat app</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor='file'>
                  <img src={Add} alt="" />
                  <span>add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
    </div>
  )
}

export default Register