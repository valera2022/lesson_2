import React from 'react'

export default function Navbar({loggedIn,setLoggedIn}) {

    function handleClick(){
        setLoggedIn(!loggedIn)
        if(loggedIn === true){
            console.log("I'm logged out")

        }
       else if(loggedIn === false){
        console.log("I'm logged in")

    }

    }
   

  return (
    <div className='navBar'>
       {loggedIn?<button onClick={handleClick}>Log out</button> : <button onClick={handleClick}>Log in</button> }   
    </div>
  )
}
