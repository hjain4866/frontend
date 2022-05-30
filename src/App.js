
import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Intro } from './components/Intro';

// import { Urlitem } from './components/Urlitem';

import Urlstate from './context/Urlstate';

import { Outside } from './components/Outside';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Inside } from './components/Inside';
function App() {
 // document.body.style.backgroundColor="cadetblue";

  return (
   <Router>
     <Urlstate>
     <div >
     <Navbar/>
     <Intro/>

 
       <Routes>
       <Route path='/' element={<>    <Outside/></>}/>
   <Route path='/inside' element={ <><Inside/></>}/>
         
        
         
        
         <Route path='/login' element={<><Outside/><Login/></>}/>
         <Route path='/signup' element={<><Outside/><Signup/></>}/>
        
   
     {/* <Addurl/>
     <Urls/> */}
     {/* <Urlitem/> */}
     </Routes>
     </div>
     </Urlstate>
   </Router>
  )
}

export default App;
