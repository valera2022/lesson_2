import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
import Switch from './Switch';

function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  return (
    <div className="App">
     <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
     <Switch/>
    
    </div>
  );
}

export default App;
