import React from 'react'
import PalyerList from '../components/PalyerList'
import { Link } from 'react-router-dom'
const Dashboard = () => {
    return (
        
            <div style={{backgroundColor:"white", border:"1px black solid", padding:"30px"}}>
                <p className="d-flex justify-content-start"><Link to="/list">List</Link> &nbsp;|&nbsp;<Link to="/addplayer">Add Player</Link> </p>
                <PalyerList />
            </div>
    )
}

export default Dashboard
