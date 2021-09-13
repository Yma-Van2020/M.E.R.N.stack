import AuthorList from '../components/AuthorList'
import DeleteBtn from '../components/DeleteBtn'
import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const Main = () => {
    const [author, setAuthor] = useState([])
    const [loaded, setLoaded] = useState(false);


    return (
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>

            <AuthorList />
        </div>
                )
}

export default Main
