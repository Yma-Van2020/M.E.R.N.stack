import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

const Search = ({setState, id}) => {

    const history = useHistory();

    const [select, setSelect] = useState({
        type:"",
        id: 0
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        setState(select)
        history.push(`/${select.type}/${select.id}`)
    }

    const typeHandler = (e) =>{
        setSelect({...select, type:e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>
                Search for:
                <select name="type" id="" onChange={typeHandler}>
                    <option value=""></option>
                    <option value="people">People</option>
                    <option checked value="planets">Planets</option>
                </select>

                ID:
                <input type="number" name="id" id="" onChange={(e) => setSelect({...select, id:e.target.value})}/>

                <input type="submit" value="Search" placeholder={id}/>
                </p>
            </form>
        </div>
    )
}

export default Search
