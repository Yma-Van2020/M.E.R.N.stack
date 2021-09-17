import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { useHistory, Link} from 'react-router-dom'
import Form from '../components/Form';

const Add = () => {
    return (
        <div style={{border:"2px black solid", margin:"50px", overflow:"scroll",width:"800px", height:"600px"}}>
           <div className="d-flex justify-content-around" style={{border:"2px black solid"}}> 
             <h1> </h1>  <h1>Add Pirate</h1> <Link to="/"><h3>Crew Board</h3></Link>
            </div>
            <Form/>
        </div>
           
        
    )
}

export default Add
