import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
import Switch from './Switch';
import Addavatar from './Addavatar';
import Doggenerator from './Doggenerator';

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <div className="App">
     <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
     {/* <Addavatar/> */}
     {/* <Switch/> */}
     <Doggenerator/>
     
    
    </div>
  );
}

export default App;
