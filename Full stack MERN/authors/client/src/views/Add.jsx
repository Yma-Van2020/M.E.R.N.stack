import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { useHistory, Link} from 'react-router-dom'
import AuthorForm from "../components/AuthorForm"

const Add = () => {
const history = useHistory()
const[errors, setErrors] = useState([])

  const createAuthor = name => {
    axios.post('http://localhost:8000/api/authors/create', name)
        .then(() => history.push('/'))
        .catch(err => {
            const errRes = err.response.data.errors;
            const errorArr = []
            for(const key of Object.keys(errRes)){
                errorArr.push(errRes[key].message)
            }
            setErrors(errorArr);
        })
}

    return (
        <div>
             <Link to="/">Home</Link>
            <p>Addd a new author</p>
             <AuthorForm errs={errors} onSubmitForm={createAuthor}/>
        </div>
    )
}

export default Add
