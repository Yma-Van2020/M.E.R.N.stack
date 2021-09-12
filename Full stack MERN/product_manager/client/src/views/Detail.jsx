import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useParams, useHistory} from "react-router-dom";

const Detail = ({setState, removeFromDom}) => {
    const [product, setProduct] = useState({})
    const history = useHistory();
    const{id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then(res => {
            setProduct(res.data)
            setState(res.data)
        })
        .catch(err => console.error(err))
    }, [])

    const deleteProduct = proId =>{
        axios.delete("http://localhost:8000/api/product/" + proId)
            .then(() => {
                removeFromDom(proId)
                history.push('/product')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="p-5">
            {(product.length > 0)? 
            <>
            <h3>{product[0].title}</h3>
            <p>Price: ${product[0].price}</p>
            <p>Description: {product[0].description}</p>
            <Link to={"/product/" + product[0]._id + "/edit"}>Edit</Link><br/>
            <button onClick={() => {deleteProduct(product[0]._id)}}>Delete</button>
            </> : null
        }
            
        </div>
    )
}

export default Detail
