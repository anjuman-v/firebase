import React from 'react'
import './style.css'

const Chats = () => {
  return (
    <div className='chats'>
        <div className="userChat" >
          <img src={'https://i.pinimg.com/236x/83/c5/41/83c541e05f73376301c39efff5774fec.jpg'} alt="" />
          <div className="userChatInfo">
            <span>{"anjuman"}</span>
            <p>Hello</p>
          </div>
        </div>
    </div>
  )
}

export default Chats