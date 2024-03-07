import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
import Switch from './Switch';
import Addavatar from './Addavatar';

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <div className="App">
     <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
     <Addavatar/>
     {/* <Switch/> */}
     
    
    </div>
  );
}

export default App;
