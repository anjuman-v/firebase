import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo" style={{color:"#fff"}}>BTS Chat</span>
    <div className="user">
      <img src={'https://i.mydramalist.com/wdOeY_5f.jpg'} alt="" />
      <span>{'anzy-v'}</span>
      <button onClick={() =>signOut(auth)}>logout</button>
    </div>
  </div>
  )
}

export default Navbar