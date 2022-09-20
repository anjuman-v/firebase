import React, { useEffect, useRef } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/Auth'
import { ChatContext } from '../context/ChatContext'
import './style.css'

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() =>{
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div 
    ref={ref}
    className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className='messageInfo'>
      <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          style={{ 
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginTop:'-5px'

        
        }}/>
        -
      <span style={{color: 'black'}}>Just now</span>
      </div>
      <div className='messageContent'>
        <p>{message.text}</p>
        {message.img && <img style={{width:'50%'}} src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message 