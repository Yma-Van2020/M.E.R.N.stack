import React, { Component } from "react"

//Class components

// class PersonCard extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             personage: props.age
//         }
//     }

//     increaseAge = () => {
//                 this.setState({
//                     personage: this.state.personage + 1
//                 })
//             }

//      render() {
//         const {firstName, lastName, hairColor} = this.props;
        
//         return (
//             <div>
//                 <h2>{firstName} {lastName} </h2>
//                 <p>{this.state.personage}</p>
//                 <p>{hairColor}</p>
//                 <button onClick={this.increaseAge}>Birthday button for {firstName} {lastName}</button>
//             </div>
//         );
//     }
// }

//functional components
const PersonCard = props =>{
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    )
}


export default PersonCard;