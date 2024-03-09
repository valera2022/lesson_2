import React, { useState } from 'react'

export default function Doggenerator() {
    const [image,setImage] = useState('https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg')
    const [likes,setLikes] = useState(0)

    function handleNewDogClick(){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data=> setImage(data.message))
        setLikes(0)
    }

function handleLikes(){
    setLikes(likes+1)


}

  return (
    <div className='dog'>
        
        <img width="300px" height="215px" src={image}/>
        <button onClick = {handleLikes}>likes {likes}</button>
        <button onClick={handleNewDogClick}>New Dog</button>
    </div>
  )
}
