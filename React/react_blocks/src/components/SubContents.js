import React, { Component } from "react"

const subcontent = {
    height:" 200px",
    width: "200px",
    backgroundColor: "yellow",
    display: "inline-block",
    margin: "20px 10px 10px 10px",
}

export class SubContents extends Component{
    render(){
        return <div style={subcontent}></div>
    }
}

export default SubContents