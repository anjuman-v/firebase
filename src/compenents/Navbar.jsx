import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo">Lama Chat</span>
    <div className="user">
      <img src={'https://i.mydramalist.com/wdOeY_5f.jpg'} alt="" />
      <span>{'anzy-v'}</span>
      <button>logout</button>
    </div>
  </div>
  )
}

export default Navbar