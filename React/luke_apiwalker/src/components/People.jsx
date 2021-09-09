import React from 'react'

const People = ({responseData}) => {

    return (
        <div>
       
            <h1>{responseData.name}</h1>

            <p>
            <b>Height:</b>{responseData.height} cm<br/>
            <b>Mass:</b> {responseData.mass} kg<br/>
            <b>Hair Color:</b> {responseData.hair_color}<br/>
            <b>Skin Color:</b> {responseData.skin_color}<br/>
          </p> 
           
        </div>
    )
}

export default People
