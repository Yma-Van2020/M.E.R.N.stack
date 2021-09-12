import ProductForm from '../components/ProductForm'
import React, { useState, useEffect } from 'react'
import ProductList from '../components/ProductList';
import axios from "axios"

const Main = () => {
    const [product, setProduct] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
        .catch(err => res.json(err))
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }
    

    const createProduct = person => {
        axios.post('http://localhost:8000/api/product', person)
            .then(res=>{
                setProduct([...product, res.data]);
            })
    }

    return(
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle = "" initialPrice ="" initialDes =""/>
            <hr/>
           {loaded && 
           <ProductList removeFromDom={removeFromDom} products={product}/>}
        </div>
    )
}

export default Main;