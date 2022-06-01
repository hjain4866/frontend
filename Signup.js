import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './Outside.css'
export const Signup = () => {
    const navigate=useNavigate();
    const [cred, setcred] = useState({name:"",email:"",password:""});
    const handleonchange=(event)=>{
        setcred({...cred,[event.target.name]:event.target.value});
    }
    const handlesignup=async(event)=>{
        event.preventDefault();
        console.log(cred.name+" "+cred.email+" "+cred.password);
        const response=await fetch(`http://localhost:5000/auth/createuser`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({name:cred.name,email:cred.email,password:cred.password})

        })
const body=await response.json();
if(body.success)
{localStorage.setItem('token',body.authtoken);
    console.log(body.authtoken);

    navigate('/inside');
}
else{
  alert("not valid credentials");
}
    }
  return (
    <form className='container'  onSubmit={handlesignup} style={{width:"500px",marginBottom:"10px"}}>
         <div className="mb-3">
    <label htmlFor="entername" className="form-label" style={{color:"white", fontSize:"20px", fontFamily:"times new roman", marginTop:"10px"}} >Name</label>
    <input type="text" name="name" onChange={handleonchange} className="form-control" id="entername" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" style={{color:"white", fontSize:"20px", fontFamily:"times new roman", marginTop:"10px"}} >Email address</label>
    <input type="email" name='email' onChange={handleonchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" style={{color:"white", fontSize:"20px", fontFamily:"times new roman", marginTop:"10px"}} >Password</label>
    <input type="password" name='password' onChange={handleonchange} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn but " style={{marginLeft:"380px"}}>Submit</button>
</form>
  )
}
