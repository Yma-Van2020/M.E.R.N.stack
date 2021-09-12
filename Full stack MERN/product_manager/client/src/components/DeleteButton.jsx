import React from 'react'
import axios from 'axios';

export default props => {
    const {prodId, successCallback} = props;
    const deleteProduct = e => {
        axios.delete("http://localhost:8000/api/product/" + prodId)
            .then(res => {
                successCallback();
            })
    }
    return (
        <button className="btn btn-outline-secondary" onClick={deleteProduct}>
            Delete
        </button>
    )

}