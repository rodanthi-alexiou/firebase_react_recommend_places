import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";
  import './App.css';
  import React, {useEffect, useState} from 'react'
import { Typography, TextField, Button, Tab } from "@material-ui/core";
import { placeData } from "./data";


function AvailableBars() {

var keys = [...placeData.values()];
console.log(keys[0].Name);

const history = useHistory();

    return (
        <div>
            <h1 className="text">Available Bars</h1>
            
            <div>
            <button className="button" onClick={() => history.push('/')}>
                Πίσω
            </button>
            </div>

            
            <div className = 'grid'>
            {placeData.map((data, key) => {
              return (
                <div key={key} className='card'>
                <div className="text-card-title">{data.Name} </div>
                <div className="text-card-info">{data.Type} </div>
                <div className="text-card-info">{data.Map} </div>

                </div>
              );
            })}
            </div>

        </div>
    );
  }


  export default AvailableBars;