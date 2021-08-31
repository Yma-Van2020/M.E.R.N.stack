import React, { Component } from "react"

const nav= {
    height: "300px",
    width: "200px",
    backgroundColor:" blue",
    display: "inline-block",
    margin: "5px 15px",
    position:"relative",
    right:"10px"
}


export class Navigation extends Component{
    render(){
        return <div style={nav}></div>
    }
}

export default Navigation