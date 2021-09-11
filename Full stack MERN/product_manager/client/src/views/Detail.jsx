import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const{id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div className="p-5">
            {(product.length > 0)? 
            <>
            <h3>{product[0].title}</h3>
            <p>Price: ${product[0].price}</p>
            <p>Description: {product[0].description}</p>
            </> : null
        }
            
        </div>
    )
}

export default Detail
