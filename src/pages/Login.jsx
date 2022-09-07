import React from 'react'
import './style.css'
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className='maindiv'>
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>React chat app</span>
            <span className='title'>Login</span>
            <form action="">
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
               
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
    </div>
  )
}

export default Login