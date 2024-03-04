import React from 'react'
import { useState } from 'react'

export default function Switch() {
    const [change,setChange]= useState("off")
    // const [backgroudColor, setBackgroundcolor] = useState("off") 

  return (
    <div>
        <button onClick={handleClick}>{change}</button>
    </div>
  )
}
