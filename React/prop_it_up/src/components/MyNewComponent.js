import React, { Component } from "react"

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            personage: props.age
        }
    }

    increaseAge = () => {
                this.setState({
                    personage: this.state.personage + 1
                })
            }

     render() {
        const {firstName, lastName, hairColor} = this.props;
        
        return (
            <div>
                <h2>{firstName} {lastName} </h2>
                <p>{this.state.personage}</p>
                <p>{hairColor}</p>
                <button onClick={this.increaseAge}>Birthday button for {firstName} {lastName}</button>
            </div>
        );
    }
}
export default PersonCard;