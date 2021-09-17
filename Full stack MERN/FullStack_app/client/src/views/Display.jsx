import React from 'react'
import { Link , useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from 'react'

const Display = () => {
    const [pirate, setPirate] = useState({})
    const history = useHistory();
    const{id} = useParams();
    const [state, setState] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
        .then(res => {
            setPirate(res.data)
        })
        .catch(err => console.error(err))
    }, [state])

    const clickHandler = (id, str) =>{
        axios.put("http://localhost:8000/api/pirates/" + id,  {pegLeg: str})
        .then(res => setState(!state))
        .catch(err => console.log(err))
        console.log(str)
    }

    const clickHandler2 = (id, str) =>{
        axios.put("http://localhost:8000/api/pirates/" + id,  {eyePatch: str})
        .then(res => setState(!state))
        .catch(err => console.log(err))
    }

    const clickHandler3 = (id, str) =>{
        axios.put("http://localhost:8000/api/pirates/" + id,  {hookHand: str})
        .then(res => setState(!state))
        .catch(err => console.log(err))
    }


    return (
        <div>
            <div style={{border:"2px black solid", margin:"50px", overflow:"scroll"}}>
           <div className="d-flex justify-content-around" style={{border:"2px black solid"}}> 
             <h1> </h1>  <h1>{pirate.name}</h1> <Link to="/"><h3>Crew Board</h3></Link>
            </div>

            <div className="d-flex justify-content-around p-5">
            <img src={pirate.imageUrl} alt="" />

            <div style={{border:"1px black solid", padding:"15px"}}>
                <h3>About</h3>
                <p>Position:{pirate.position}</p>
                <p>Treasures:{pirate.numOfTreasure}</p>
                <p>Peg Leg:{pirate.pegLeg} { (pirate.pegLeg === "true")? <button onClick={() => clickHandler(pirate._id, "false")} style={{backgroundColor:"red"}}>False</button>:<button onClick={() => clickHandler(pirate._id, "true")} style={{backgroundColor:"green"}}>True</button>}
                </p>
                <p>Eye Patch:{pirate.eyePatch} { (pirate.eyePatch === "true")? <button onClick={() => clickHandler2(pirate._id, "false")}  style={{backgroundColor:"red"}}>False</button>:<button onClick={() => clickHandler2(pirate._id, "true")}  style={{backgroundColor:"green"}}>True</button>}
                </p>
                <p>Hook Hand:{pirate.hookHand} {(pirate.hookHand === "true")? <button onClick={() => clickHandler3(pirate._id, "false")}  style={{backgroundColor:"red"}}>False</button>:<button onClick={() => clickHandler3(pirate._id, "true")}  style={{backgroundColor:"green"}}>True</button>}
                </p>
            </div>

            <h1>"{pirate.catchPhrase}"</h1>
            </div>
        </div>
        </div>
    )
}

export default Display
