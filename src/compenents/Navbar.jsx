import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import './style.css'
import { useContext } from 'react'
import { AuthContext } from '../context/Auth'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
    <span className="logo" style={{color:"#fff"}}>BTS Chat</span>
    <div className="user">
      <img src={currentUser.photoURL} alt=""  />
      <span 
      style={{
        marginTop : '2.6vh',
        fontWeight:'bold'
        }}>
        {currentUser.displayName}
          </span>
      <button onClick={() =>signOut(auth)} className='logoutbtn'>logout</button>
    </div>
  </div>
  )
}

export default Navbar;