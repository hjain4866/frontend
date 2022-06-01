import React, { useContext, useState } from 'react'
import Urlcontext from '../context/urlcontext';

import './Style.css'
export const Addurl = () => {
    document.body.style.backgroundImage='none';
    document.body.style.backgroundColor="cadetblue";
    const context=useContext(Urlcontext);
    const {addurl, okk,updateurl}=context;
    const [item, setitem] = useState({name:"",longurl:""});
    const handleonchange=(event)=>{
        setitem({...item,[event.target.name]:event.target.value});

    }
    const handleonclick=()=>{
        updateurl(okk._id)
    }
    const adding=()=>{
        addurl(item.name,item.longurl);
       setitem({name:"",longurl:""});



    }
  return (
    <div className='container my-5 text-center'>
        <h2 className='text-center'>Shorten a URL</h2>
        <textarea name="name" id="name" cols="173" rows="1" onChange={handleonchange} placeholder='Enter a name for your short url'></textarea>
       <textarea name="longurl" id="longurl" cols="173" rows="3" onChange={handleonchange} placeholder='Enter long url'></textarea>
        <button className='text-center bot' onClick={adding}>Short It</button>
        <br/>
        { okk &&
        <div className='d-flex container'>
            <h3>Your Short Url:</h3>
        <a id="okk" className='mx-2' style={{marginTop:"5px"}} target="_blank" rel='noreferrer' href={okk.shorturl} onClick={handleonclick} >{okk.shorturl}</a>
        </div>
}

    </div>
  )
}
