import React from "react"

const Form = props =>{
    return(
        <form>
            <label htmlFor="color">Color</label>
            <input type="text" name="color" id="color"/>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form