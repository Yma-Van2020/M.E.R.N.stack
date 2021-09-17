
import AuthorForm from '../components/AuthorForm'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, useParams, useHistory} from "react-router-dom"

const Update = () => {
    const { id } = useParams();
    const history = useHistory();
    const[name, setName] = useState("")
    const [loaded, setLoaded] = useState(false);
    const[errors, setErrors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
        .then((res) => {
            setName(res.data.name)
            setLoaded(true);
        })
    }, [])

    const updateAuthor = (name) => {
        axios.put("http://localhost:8000/api/authors/" + id, name)
        .then(() => {
          history.push("/");
        })
        .catch((err) => {
            const errRes = err.response.data.errors;
            const errorArr = []
            for(const key of Object.keys(errRes)){
                errorArr.push(errRes[key].message)
            }
            setErrors(errorArr);
        });
    }

    return (
        <div className="d-flex flex-column justify-content-around align-items-center">
            <Link to="/">Home</Link>
            <p>Edit this author</p>
            {loaded && <AuthorForm errs={errors} onSubmitForm={updateAuthor} initName={name}/>}
        </div>
    )
}

export default Update
