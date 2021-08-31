import React, { Component } from "react"

const main = {
    height: "440px",
    width: "680px",
    backgroundColor: "red",
    display: "inline-block",
    position: "absolute",
    margin: "5px",
    position:"relative",
    right:"10px",
    bottom:"80px"
}

export class Main extends Component{
    render(){
        return <div style={main}>
            {this.props.children}
        </div>
    }
}

export default Main