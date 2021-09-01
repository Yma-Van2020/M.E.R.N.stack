import React from "react"

const Results = props => {
    const {firstname, lastname, email, password, cpassword} = props.data;

    return (
        <>
        <h4>Your data</h4>
        <div>
          <p>First Name: {firstname}</p>
        </div>

        <div>
        <p>First Name: {lastname}</p>
        </div>

        <div>
        <p>Email: {email}</p>
        </div>

        <div>
        <p>Password: {password}</p>
        </div>

        <div>
        <p>Confirm password: {cpassword}</p>
        </div>
        </>
    )
}

export default Results