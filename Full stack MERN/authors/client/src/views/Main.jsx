import AuthorList from '../components/AuthorList'
import React from 'react'
import {Link} from "react-router-dom"

const Main = () => {

    return (
        <div>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by:</p>
            <AuthorList />
        </div>
                )
}

export default Main
