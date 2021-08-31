import React, { Component } from "react"


const header = {
    width: "95%",
    height: "110px",
    backgroundColor: "green",
    margin: "15px",
}

class Header extends Component{
    render(){
        return <div style={header}></div>
    }
}

export default Header