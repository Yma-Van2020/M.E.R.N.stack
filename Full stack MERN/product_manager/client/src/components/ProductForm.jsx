import React, { useState } from 'react'

export default ({onSubmitProp, initialTitle, initialPrice, initialDes}) => {
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDes] = useState(initialDes);

    const submitHandler = e =>{
        e.preventDefault();
        onSubmitProp({title, price, description})
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
            <input className="btn btn-warning" type="submit" value="Submit"/>
        </form>
    )
}