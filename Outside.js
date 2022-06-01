import React, { useEffect } from 'react'
// import photo from './Wk7vJUd.jpg'
import './Outside.css'

import {Link} from 'react-router-dom'
import bgimg from './bluebg.jpg'
// import { Login } from './Login'
// import { Signup } from './Signup'

export const Outside = () => {
  useEffect(() => {
    document.body.style.backgroundImage=`url(${bgimg})`;
 
      }, [])
  
  return (
<div className="body">

      <div className='container'  >
     <div className=" text-center my-2 tt" style={{color:"white", fontSize:"30px", fontFamily:"algerian", marginTop:"10px"}} >Welcome</div>
     <p className='pala'>This is a free of cost website where you can shorten your URLs<br/>with your private accounts and store them,<br/>and log user activites.</p>
    <div className=" text-center " style={{marginTop:'20px'}}>
     <Link className='but' to="/login">Login</Link>
     <Link className='but' to="/signup">Signup</Link>
    
     </div>
     </div>
     
      </div>
    
  )
}
