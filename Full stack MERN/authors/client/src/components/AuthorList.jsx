import axios from 'axios'
import React, { useState, useEffect } from 'react'
import DeleteBtn from './DeleteBtn'
import {Link} from "react-router-dom"

const AuthorList = () => {
    const[authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res =>setAuthors(res.data))
    }, [authors])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author=> author._id !== authorId))
    }

    return (
        <div>
              <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author, i) => {
              return <tr key={i}>
                        <td>{author.name}</td>
                        <td><Link to={`/edit/${author._id}`}><button className="btn btn-secondary">Edit</button></Link>
                            &nbsp;|&nbsp; 
                            <DeleteBtn authorId={author._id} successCallback={()=> removeFromDom(author._id)}/>
                        </td>
                    </tr>
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default AuthorList
