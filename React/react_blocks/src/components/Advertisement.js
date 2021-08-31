import React, { Component } from "react"

const advertise = {
    height: "110px",
    width: "650px",
    backgroundColor:" purple",
    marginLeft: "10px",
    marginRight: "auto",
    marginTop: "20px",
}

export class Advertisement extends Component{
    render(){
        return <div style={advertise}></div>
    }
}

export default Advertisement