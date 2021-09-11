import React from 'react'
import {Link} from "react-router-dom"

const ProductList = ({products}) => {
    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product, i) => {
                return <Link to={`/product/${product._id}`}><p key={i}>
                    {product.title}
                </p></Link>
            })}
        </div>
    )
}

export default ProductList
