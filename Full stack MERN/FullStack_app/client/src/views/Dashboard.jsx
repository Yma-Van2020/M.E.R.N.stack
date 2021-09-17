import React from 'react'
import { Link } from 'react-router-dom'
import List from '../components/List'

const Dashboard = () => {
    return (
        <div style={{border:"2px black solid", margin:"50px",  width:"800px", overflow:"scroll"}}>
           <div className="d-flex justify-content-around" style={{border:"2px black solid"}}> 
             <h1> </h1>  <h1>Pirate Crew</h1> <Link to="/new"><h3>Add Pirate</h3></Link>
            </div>

            <List/>

        </div>
    )
}

export default Dashboard
