import React from 'react'
import {useParams} from "react-router"

const Combine = () => {
    const {inp, textColor, bgColor} = useParams()

    return (
        <div>
             <div style={{backgroundColor:bgColor, border:"1px black solid"}} className="d-flex justify-content-center m-5 p-2">
            {isNaN(+ inp) ? <h1 style={{color: textColor}}>The word is: {inp}</h1>: <h1 style={{color: textColor}}>The number is: {inp}</h1>}
        </div>
        </div>
    )
}

export default Combine
