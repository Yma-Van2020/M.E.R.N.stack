import React, { useState } from 'react'
import axios from 'axios';
import { useParams, useHistory} from "react-router-dom";


const Update = ({state}) => {
    const history = useHistory()
    const {id} = useParams();
    const [title, setTitle] = useState((state.length > 0)? state[0].title: "");
    const [price, setPrice] = useState((state.length > 0)?state[0].price: "");
    const [description, setDescription] = useState((state.length > 0)?state[0].description: "");


    const updateProduct = e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {title, price, description})
            .then(res => {
                console.log(res.data)
                history.push('/product')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h3>Update a Product</h3>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label>
                    <input className="m-3" type="text" name="title" id="" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/><br/>

                    <label>Price:</label>
                    <input className="m-3" type="text" name="price" id="" value={price} onChange={(e) => {
                       setPrice(e.target.value)
                    }}/><br/>

                    <label>Description:</label>
                    <input className="m-3" type="text" name="description" id="" value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }}/><br/>
                </p>
                <input className="btn btn-warning" type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Update
