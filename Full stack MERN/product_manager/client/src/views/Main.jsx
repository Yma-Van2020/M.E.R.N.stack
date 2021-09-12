import ProductForm from '../components/ProductForm'
import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProductList';
import axios from "axios"

const Main = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res => {
            setProduct(res.data)
        })
        .catch(err => res.json(err))
    }, [product])

    const removeFromDom = productId =>{
        setProduct(product.filter(product => product._id !== productId))
    }
    return(
        <div>
            <ProductForm />
            <ProductList removeFromDom={removeFromDom} products={product}/>
        </div>
    )
}

export default Main;