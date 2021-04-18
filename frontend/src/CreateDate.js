import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
  } from "react-router-dom";
  import './App.css';
  import React, {useEffect, useState} from 'react'
import { Typography, TextField, Button, Tab, Checkbox, FormGroup, FormControlLabel, Input } from "@material-ui/core";
import DateIdea from "./DateIdea"


  function CreateDate({test}) {
    console.log(test);
    const [location, setLocation] = useState('');
    const [friends, setFriends] = useState(1);
    const [number, setNumber] = useState(-1);



const history = useHistory();

    return (
        <div>
            <h1>Ψάχνω Βόλτα</h1>
            
            <h2> Για που: </h2>
            <Input type="text" placeholder="Περιοχή"  onChange={e => setLocation(e.target.value)} />
            
            
            <h2> Πότε; </h2>
          <div>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Μέρα" />
            <FormControlLabel control={<Checkbox />} label="Νύχτα" />
          </FormGroup>
        


          <button className="button" onClick={() => history.push('/dateidea')}>
          Εμφάνισε μια επιλογή
        </button>
          </div>

            <div>
            <button className="button" onClick={() => history.push('/availablebars')}>
            Available Bars
          </button>

          <button className="button" onClick={() => history.push('/')}>
          Πίσω
        </button>
          </div>
        </div>
    );
  }


  export default CreateDate;

  