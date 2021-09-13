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

    
    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res=>{
                setProduct([...product, res.data]);
                
            })
    }

    return(
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle = "" initialPrice ={0} initialDes =""/>
            <hr/>
           {loaded && 
           <ProductList />}
        </div>
    )
}

export default Main;