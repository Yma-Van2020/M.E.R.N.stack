import axios from 'axios'
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton'
import React, { useState, useEffect } from 'react'


const ProductList = () => {
   const [products, setProducts] = useState([])
   useEffect(() => {
       axios.get("http://localhost:8000/api/product")
          .then(res => setProducts(res.data))
   }, [products])
   
   const removeFromDom = prodId => {
       setProducts(products.filter(product=> product._id !== prodId))
   }

    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product, i) => {
                return <p key={i}>
                <Link to={`/product/${product._id}`}>
                    {product.title}
                </Link>  | <DeleteButton prodId={product._id} successCallback={()=> removeFromDom(product._id)}/>
                </p>
            })}
        </div>
    )
}

export default ProductList
