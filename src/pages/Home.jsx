import React from 'react'
 import '../compenents/style.css'
import Chat from '../compenents/Chat'
import Sidebar from '../compenents/Sidebar'


const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
        
      </div>
    </div>
  )
}

export default Home