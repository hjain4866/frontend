import { useState} from "react";
import Urlcontext from "./urlcontext";

const Urlstate=(props)=>{
    const host="http://localhost:5000";
    const [okk,setokk]=useState(null);
    const [urls, seturls] = useState([]);
    const updateurl=(id)=>{
        let newurls=JSON.parse(JSON.stringify(urls));
        for (let index = 0; index < newurls.length; index++) {
           
            if(newurls[index]._id===id)
            {
                newurls[index].count=newurls[index].count+1;
                break;
            }
            
        }
        seturls(newurls);
    }
    const addurl=async(namo,longurlo)=>{
        const response=await fetch(`${host}/workonit`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            
    body:JSON.stringify({name:namo,longurl:longurlo})

        })
        const json=await response.json();
        seturls(urls.concat(json));
        setokk(json);
    }
const deleteurl=async(urlid)=>{
await fetch(`${host}/deleteurl/${urlid}`,{
method:'DELETE',
headers:{
'Content-type':'application/json',
'auth-token':localStorage.getItem('token')
},
body:JSON.stringify()
})
const newurls=urls.filter((element)=>{
    return element._id!==urlid;
            });
            seturls(newurls);
}
    const geturls=async()=>{
const response=await fetch(`${host}/fetchurls`,{
    method:'GET',
    headers:{
        'Content-type':'application/json',
        'auth-token':localStorage.getItem('token')
    }
});
const json=await response.json();
seturls(json);

    }
    
    return(
        <Urlcontext.Provider value={{urls,geturls,updateurl,addurl,deleteurl,okk}}>
            {props.children}
        </Urlcontext.Provider>
    )

}
export default Urlstate;
