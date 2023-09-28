import React from 'react'
import axios from 'axios'

function character() {

    const characters = axios.get('http://localhost:8000/Character')
    const character = characters.data
  return (
    <div>
        <h1>Characters</h1>
        { character & character.map((actor,key)=>{
                <ul key={key}>
                    <li>{charactactorer.name}</li>
                    <li>{actor.birth_year}</li>
                    <li>{actor.gender}</li>
                    <li>{actor.homeworld}</li>
                </ul>
            })
        }

    </div>
  )
}

export default character