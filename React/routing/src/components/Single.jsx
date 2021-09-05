import React from 'react'
import {useParams} from "react-router"

const Single = () => {
    const {input} = useParams();

    return (
        <div className="d-flex justify-content-center m-5">
            {isNaN(+ input) ? <h1>The word is: {input}</h1>: <h1>The number is: {input}</h1>}
        </div>
    )
}

export default Single
