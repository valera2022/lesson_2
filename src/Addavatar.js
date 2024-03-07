import React from 'react'
import { useState } from 'react'


export default function Addavatar() {
  const [avatar,setAvatar] = useState()
  const [image,setImage] = useState()
  const [name,setName] =useState()
  const [ability,setAbility] = useState()

  let formData = {
    image: image,
    name: name,
    ability: ability
  }
  // console.log(image)
  // console.log(name)
  // console.log(ability) 
  function handleSubmit(){
    fetch("http//localhost/bla/bla",{
    method: "POST",
    body: JSON.toStringify(formData)
  })
  .then(res => res.json())
  .then(data => setAvatar(data))

  }
 



  return (
    <div>
      <form onSubmit={handleSubmit}>
         <label>Image</label>
        <input onChange={(e)=> setImage(e.target.value)} value = {image}  type="text"/>
        <label>name</label>
        <input type="text"  onChange={(e)=> setName(e.target.value)} value = {name} />
        <label>Ability</label>
        <input type="text"  onChange={(e)=> setAbility(e.target.value)} value = {ability} />
        <button>Submit</button>

      </form>
       
      

    </div>
  )
}
