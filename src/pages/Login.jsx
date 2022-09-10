import React, { useState } from 'react'
import './style.css'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


const Login = () => {

  const [err, setErr] = useState(false)
const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target[1].value;
    const password = e.target[2].value;
    
    
    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    }catch(error){
      setErr(true)
      // console.log('err:',error)
    }
  }
  return (
    <div  className='registrationdiv' >
    <div className='maindiv' style={{border:"1px solid transparent"}}>
    <div className='formContainer'>
        <div className="formWrapper" style={{backgroundColor:"white" ,marginTop:"5rem"}} >
            <span className='logo' style={{marginTop:"1rem"}}>React chat app</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input className='signin_login_input' type="email" placeholder='email' />
                <input className='signin_login_input' type="password" placeholder='password' />
               
                <button>Sign in</button>
            </form>
            <p>You don't have an account? <Link to = {'/register'}>Register</Link> </p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Login