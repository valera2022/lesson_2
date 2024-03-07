import React from 'react'
import { useState } from 'react'

export default function Switch() {
    const [change,setChange]= useState("off")
    // const [backgroudColor, setBackgroundcolor] = useState("off") 
    function handleClick(){
        
        if(change ==="off"){
            setChange("on")
        }
        else if(change ==="on"){
            setChange("off")
        }
    }

  return (
    <div className={change}>
        <button onClick={handleClick}>{change}</button>
    </div>
  )
}
