import React, { useState } from 'react'
import axios from 'axios';

export default ({}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDes] = useState("");

    const submitHandler = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setTitle("")
        setPrice("")
        setDes("")  
    }

    return(
        <form className="p-5" onSubmit={submitHandler}>
            <h3 className="m-4">Product Manager</h3>
            <p>
                <label style={{width:"100px"}}>Title</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label style={{width:"100px"}}>Price</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label style={{width:"100px"}}>Description</label>
                <input type="text" onChange={(e)=>setDes(e.target.value)} value={description}/>
            </p>
            <input className="btn btn-warning" type="submit" value="Create"/>
        </form>
    )
}