import React, { useState,  useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory} from "react-router-dom";
import ProductForm from '../components/ProductForm';

const Update = () => {
    const history = useHistory()
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = product =>{
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => {
                console.log(res.data)
                history.push('/product')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h3>Update a Product</h3>
        {loaded && <ProductForm 
             onSubmitProp={updateProduct}
             initialTitle = {product[0].title} initialPrice ={product[0].price} initialDes ={product[0].description}
            />}
        </div>
    )
}

export default Update
