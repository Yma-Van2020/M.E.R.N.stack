import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);

  const [formState, setFormState] = useState({
    name: "",
    imageUrl: "",
    numOfTreasure: 0,
    catchPhrase:"",
    position:"",
    pegLeg:true,
    eyePatch:true,
    hookHand:true
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pirates", formState)
      .then(() => history.push("/"))
      .catch((err) => {
        const errRes = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message);
        }
        setErrors(errArr);
      });
  };



const handleOnChange1 = (e) => {
    setIsChecked1(!isChecked1);
    const { name} = e.target;
    setFormState({
      ...formState,
      [name]: !isChecked1,
    });
  };
  const handleOnChange2 = (e) => {
    setIsChecked2(!isChecked2);
    const { name} = e.target;
    setFormState({
      ...formState,
      [name]: !isChecked2,
    });
  };
  const handleOnChange3 = (e) => {
    setIsChecked3(!isChecked3);
    const { name} = e.target;
    setFormState({
      ...formState,
      [name]: !isChecked3,
    });
  };

  return (
    <div>
      {/* {errors.map((err, index) => <p style={{color:"red"}}key={index}>{err}</p>)} */}
      <form onSubmit={submitHandler}>
        <p  className="d-flex flex-column align-content-around" style={{padding:"20px 250px 250px 250px"}}>
          Pirate Name:
          <input onChange={changeHandler} type="text" name="name" id="" />
          <p style={{color:"red"}}key={0}>{errors[0]}</p>
          Image url:
          <input onChange={changeHandler} type="text" name="imageUrl" id="" />
          <p style={{color:"red"}}key={1}>{errors[1]}</p>
          # of Treasure Chests:
          <p style={{color:"red"}}key={2}>{errors[2]}</p>
          <select onChange={changeHandler} type ="number" name="numOfTreasure">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          Pirate Catch Phrase:
          <p style={{color:"red"}}key={3}>{errors[3]}</p>
          <input onChange={changeHandler} type="text" name="catchPhrase" id="" />
    
          Crew Position:
          <p style={{color:"red"}}key={4}>{errors[4]}</p>
          <select onChange={changeHandler} name="position">
            <option></option>
            <option>Captain</option>
            <option>First Mate</option>
            <option>Quarter Master</option>
            <option>Boatswain</option>
            <option>Powder Monkey</option>
          </select>

          <label htmlFor="pl">Peg Leg</label>
          <input  checked={isChecked1} onChange={handleOnChange1} className="form-check-input" type="checkbox" name="pegLeg" value={isChecked1} />
          <label htmlFor="ep">Eye Patch</label>
          <input checked={isChecked2} onChange={handleOnChange2} className="form-check-input" type="checkbox" name="eyePatch" value={isChecked2}/>
          <label htmlFor="hh">Hook Hand</label>
          <input checked={isChecked3} onChange={handleOnChange3} className="form-check-input" type="checkbox"  name="hookHand" id="hh" value={isChecked3}/>

          <input type="submit" value="Add pirate" />
        </p>
      </form>
    </div>
  );
};

export default Form;
