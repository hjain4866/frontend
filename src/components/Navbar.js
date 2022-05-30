import React from 'react'
import { Link } from 'react-router-dom'
import never from './never.png'
import './Style.css'
export const Navbar = () => {
  
  return (
    <nav style={{backgroundColor:"white"}}>
    {localStorage.getItem('token')!==null? <ul className="nav">
  
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to='/inside'><img src={never} height="40px" alt="" /></Link>
  </li>
  <li className="nav-item">
    
    <Link className="nav-link" id='set' to='/inside' >Home</Link>
  </li>

  
 
  

</ul>:<ul className="nav">
  
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to='/'><img src={never} height="40px" alt="" /></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id='set' to='/' >Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" id='set' to='/' >About</Link>
  </li>
 
  

</ul>}



</nav>
  )
}
