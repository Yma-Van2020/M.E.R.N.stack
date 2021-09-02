import React from 'react'

const Tabs = ({arr, setselectedTab}) => {
    
    const handleTab = (e) =>{
        setselectedTab(e.target.value)
    }

    return arr.map((a, i) => {
        return <button onClick={handleTab} value={i} className="btn btn-outline-dark m-1 p-6">{a.label}</button>
    })
}

export default Tabs
