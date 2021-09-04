import React, { useState, useEffect } from 'react'

const Display = () => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(response => setPokemon({
            pokemons: response.results,
            isClicked: false
        }))
    }, [])

    const clickHandler = () => {
        setPokemon({
            ...pokemon,
            isClicked: !pokemon.isClicked
        })
    }

    return (
        <div>

            <button className="btn btn-warning m-5" onClick={clickHandler} >Fetch Pokemon</button>
            {pokemon.isClicked
            && pokemon.pokemons.map((p,i) => {
                return(<div key={i}>{p.name}</div>)
            })
            }
            
        </div>
    )
}

export default Display
