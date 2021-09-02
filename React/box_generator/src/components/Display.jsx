import React from "react"
import {useState} from "react"

const Display = props =>{
    const {colors} = props
    console.log(props)
    return(
        <div className="d-flex justify-content-center">
      {colors.map((c) => <div key={c} className="m-1"style={{backgroundColor: c, width:"80px", height:"80px"}}></div>)
    }
    </div>
    )
}

export default Display