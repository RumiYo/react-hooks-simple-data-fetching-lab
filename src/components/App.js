// create your App component here
import React, { useState, useEffect } from "react"

function App(){

    const [ img, setImg ] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then( res => res.json() )
        .then( data => setImg(data.message) )
    },[])

    if(!img){
        return <p>Loading...</p>
    }

    return(
        <img src={img} alt="A Random Dog" />
    )
}

export default App;