import React from 'react'
import './style.css'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input 
          style={{
            border:'1px solid white',
            height:'4vh'
          }}
          type="text"
          placeholder="Find a user" />
         </div>
       
      
        <div className="userChat" >
          <img src={'https://i.pinimg.com/236x/83/c5/41/83c541e05f73376301c39efff5774fec.jpg'} alt="" />
          <div className="userChatInfo">
            <span>{"anjuman"}</span>
          </div>
        </div>
      
    </div>
  )
}

export default Search