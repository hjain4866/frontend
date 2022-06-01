import React, { useContext } from 'react'
import Urlcontext from '../context/urlcontext';
import './Style.css'

export const Urlitem = (props) => {

    const context=useContext(Urlcontext);
    const {updateurl,deleteurl}=context;
    const handleonclick=()=>{
        updateurl(props.urlid)
    }
    const handlecopy=()=>{
      navigator.clipboard.writeText(props.short);
      alert("link copied");
    }
  return (
    <div className="card my-2">
              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"95%",zIndex:"1"}}>{props.count}</span>
  
  <div className="card-body">
 <blockquote className="blockquote mb-0">
   <p className='text-center'>{props.name}</p>
   <i className="fa-solid fa-ban mx-1" onClick={()=>{
     deleteurl(props.urlid);
   }}></i>
   <i className="fa-solid fa-copy mx-1" onClick={handlecopy}></i>
{/* <i className="fa-solid fa-pen-fancy mx-1" onClick={()=>{updato(item)}}></i> */}
  
 </blockquote>
 <a target="_blank" rel='noreferrer' onClick={handleonclick} href={props.short}>{props.short}</a>
 

</div>
</div>
  )
}
