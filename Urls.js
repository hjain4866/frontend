import {React,useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Urlcontext from '../context/urlcontext'
import { Urlitem } from './Urlitem';


export const Urls = () => {
  document.body.style.backgroundImage='none';
  const navigate=useNavigate();
  const handlesignout=()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  const context=useContext(Urlcontext);
  const {urls,geturls}=context;
  useEffect(() => {
    
  
    geturls();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])
  

  


  return (
    <div className='container'>
     { urls.map((element)=>{

        return <div>
         <Urlitem name={element.name} urlid={element._id} short={element.shorturl} key={element._id} count={element.count}/>
         </div>
      })}
      <li className="nav-item">
    <Link className="nav-link" id='sot' onClick={handlesignout} to='/' >Sign Out</Link>
  </li>
    </div>
  )
}
