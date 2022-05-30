import React from 'react'
import './Style.css'

export const Intro = () => {
  return (
    <div className='container text-center my-2'>
        <h2 style={{color:"azure",fontFamily:"fantasy",margin:"10px"}}>GROUP 9</h2>
        <div class="d-flex justify-content-between" style={{color:"blanchedalmond", fontSize:"20px", fontFamily:"monospace", marginTop:"10px"}}><span>Jay Purswani</span><span>6th Semester, Medicaps University,Indore</span></div>
        <div class="d-flex justify-content-between" style={{color:"blanchedalmond", fontSize:"20px", fontFamily:"monospace", marginTop:"10px"}}><span>Harsh Jain</span><span>6th Semester, Medicaps University,Indore</span></div>
        <div class="d-flex justify-content-between" style={{color:"blanchedalmond", fontSize:"20px", fontFamily:"monospace", marginTop:"10px"}}><span>Aditya Sharma</span><span>6th Semester, UIT, Bhopal</span></div>
        <div class="d-flex justify-content-between" style={{color:"blanchedalmond", fontSize:"20px", fontFamily:"monospace", marginTop:"10px"}}><span>Arya Agrawal</span><span>6th Semester, UIT, Bhopal</span></div>
        <hr style={{color:"blanchedalmond",marginTop:"20px"}}/>
    </div>
  )
}
