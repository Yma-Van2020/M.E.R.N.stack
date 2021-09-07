import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import People from './People';
import Planets from './Planets';


const ApiFetch = ({state}) => {
    const [responseData, setReponseData] = useState({});
    const {type, id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
        .then(response=> {setReponseData(response.data)})
        .catch(error => console.log(error))
    },[responseData])

    return (
        <div>
         {type === "people"? <People id={id} type={type} setReponseData={setReponseData} responseData={responseData}/>: <Planets id={id}  type={type} setReponseData={setReponseData}  responseData={responseData}/>}
        </div>
    )
}

export default ApiFetch
