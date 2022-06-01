import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Urlcontext from '../context/urlcontext'
import './Outside.css'
export const Login = () => {
    const [cred, setcred] = useState({email:"",password:""})
    // const context=useContext(Urlcontext);
    // const {login}=context;
    let navigate=useNavigate();
    const handleonchange=(event)=>{
setcred({...cred,[event.target.name]:event.target.value});
    }
    const handlelogin=async(event)=>{
        event.preventDefault();
        console.log(cred.email+" "+cred.password);
       
            const response=await fetch(`http://localhost:5000/auth/login`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({email:cred.email,password:cred.password})
            })
     const body=await response.json();
     console.log(body);
     if(body.success)
     {
         localStorage.setItem('token',body.authtoken);
         document.body.style.backgroundImage="none";
         document.body.style.backgroundColor='cadetblue';
         navigate('/inside');
         console.log(body.authtoken);
     }
     else{
       alert("incorrect credentials");
     }
        














    }

  return (
    <form className=' container' onSubmit={handlelogin} style={{width:"500px"}}>
    <div className="form-group" >
      <label htmlFor="exampleInputEmail1" style={{color:"white", fontSize:"20px", fontFamily:"times new roman", marginTop:"10px"}} >Email address</label>
      <input type="email" className="form-control" name='email' onChange={handleonchange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
      <small id="emailHelp" className="form-text text-muted" style={{color:"white", fontSize:"15px", fontFamily:"bell mt", marginTop:"10px"}} >We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1" style={{color:"white", fontSize:"20px", fontFamily:"times new roman", marginTop:"10px"}} >Password</label>
      <input type="password" className="form-control" name="password" onChange={handleonchange} id="exampleInputPassword1" placeholder="Password" required/>
    </div>
   
    <button type="submit" className="btn but my-1 " style={{marginLeft:"380px"}}>Submit</button>
  </form>
  )
}
