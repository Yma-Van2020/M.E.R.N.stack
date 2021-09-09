import React from 'react'

const Planets = ({responseData}) => {

    return (
        <div>
            <div>
            <h1>{responseData.name}</h1>
            <p>
                <b>Climate:</b>{responseData.climate}<br/>
                <b>Terrain:</b> {responseData.terrain} <br/>
                <b>Surface Water:</b> {responseData.surface_water}<br/>
                <b>Population:</b> {responseData.population}<br/>
            </p>
        </div>
        </div>
    )
}

export default Planets
