import React from 'react'
import './Style/error.css'
import { useNavigate } from 'react-router-dom'

// import './Style/card.css'
export default function Error() {
let navigate=useNavigate()
const handleclick=(e)=>{
  navigate(e)
}
  return (
    <div className="container">
      <div className="error">
        <div className="symbol">!</div>
        <div className="code"> 404 error</div>
      </div>

      <div className="statement">
        <p>Sorry, we can't find the</p>
        <p>page your are looking for.</p>
      </div>

      <div className="btn">
        <button className="home-btn" onClick={()=>handleclick("/")}><i class="fa-solid fa-house"></i> Go to DSDP Home</button>
        <button className="prev-btn"> <i className="fa-solid fa-arrow-left"></i> Back to previous page</button>
      </div>
    </div>
  )
}
