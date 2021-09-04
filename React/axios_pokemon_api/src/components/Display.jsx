import React, { useState, useEffect } from 'react'
import axios from "axios"

const Display = () => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => setPokemon({
            pokemons: response.data.results,
            isClicked: false
        }))
    }, [])

    const clickHandler = () => {
        setPokemon({
            ...pokemon,
            isClicked: !pokemon.isClicked
        })
        console.log(pokemon)
    }

    return (
        <div>

            <button className="btn btn-warning m-5" onClick={clickHandler} >Fetch Pokemon</button>
            {pokemon.isClicked && pokemon.pokemons !== undefined
            && pokemon.pokemons.map((p,i) => {
                return(<div key={i}>{p.name}</div>)
            })
            }
            
        </div>
    )
}

export default Display
