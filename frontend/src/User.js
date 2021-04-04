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

function User({tok}) {

const history = useHistory();

    return (
        <div>
            <h1>Προφίλ και Αναμνήσεις κλπ κλπ</h1>
          
          <h2>{tok.username}</h2>


          <button className="button" onClick={() => history.push('/')}>
            Πίσω
          </button>
        </div>
        
    );
  }


  export default User;