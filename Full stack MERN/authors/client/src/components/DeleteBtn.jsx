import React from 'react'
import axios from 'axios';

export default props => {
    const {authorId, successCallback} = props;
    const deleteAuthor = () => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
            .then(() => {
                successCallback();
            })
    }
    return (
        <button className="btn btn-outline-secondary" onClick={deleteAuthor}>
            Delete
        </button>
    )

}