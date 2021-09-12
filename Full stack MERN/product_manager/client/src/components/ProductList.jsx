import axios from 'axios'
import React from 'react'
import {Link} from "react-router-dom"


const ProductList = ({products, removeFromDom}) => {

    const deleteProduct = (productId) =>{
        axios.delete("http://localhost:8000/api/product/" + productId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product, i) => {
                return <p key={i}>
                <Link to={`/product/${product._id}`}>
                    {product.title}
                </Link>  | <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>)
                </p>
            })}
        </div>
    )
}

export default ProductList
