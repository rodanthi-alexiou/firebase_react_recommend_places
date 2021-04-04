import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
  } from "react-router-dom";
import './App.css';
import React, {useEffect, useState} from 'react'
import { Typography, TextField } from "@material-ui/core";
import { placeData } from "./data";

function DateIdea() {



var keys = [...placeData.values()];
console.log(keys[0].Name);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const [number, setNumber] = useState(getRandomInt(0,29));
const history = useHistory();

    return (
        <div>
            <h1>Βόλτα</h1>
            <h2> Μπαρ: {keys[number].Name}</h2>


          <button className="button" onClick={() => history.push('/')}>
            Πίσω
          </button>
        </div>
        
    );
  }


  export default DateIdea;