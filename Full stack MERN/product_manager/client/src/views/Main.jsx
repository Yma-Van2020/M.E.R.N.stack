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

    return(
        <div>
            <ProductForm />
            <ProductList products={product}/>
        </div>
    )
}

export default Main;