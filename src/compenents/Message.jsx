import React from 'react'
import './style.css'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
      <img src="https://images6.fanpop.com/image/photos/42700000/V-Taehyung-v-bts-42757505-300-450.jpg" alt="" 
       style={{ 
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginTop:'-5px'

        
        }}/>
      <span style={{color: 'black'}}>Just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img style={{width:'50%'}} src="https://play-lh.googleusercontent.com/J479MnIciFy3mnKs9AbK3DCbwdo4SYF0Tod1SELrwNTQ4kJEcvSP_aiRZipY8ZmfEP8=w526-h296-rw" alt="" />
      </div>
    </div>
  )
}

export default Message 