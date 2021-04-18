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
import UploadImage from "./UploadImage";
import { db } from './firebase';

function User() {

  const [dates, setDates] = useState([]);

const history = useHistory();

useEffect(() => {
  db.collection('dates').onSnapshot(snapshot => {
      setDates(snapshot.docs.map(doc=> doc.data()))
  })
}, []);
 

    return (
        <div>
            <h1>Προφίλ και Αναμνήσεις κλπ κλπ</h1>
          

          {
            dates.map(date => (
              <div className='card'>
              <div className="text-card-title"> ο τόπος: {date.loc} </div>
              <div className="text-card-title">και ο χρόνος: {date.time} </div>
              </div>
            ))
          }

          <button className="button" onClick={() => history.push('/')}>
            Πίσω
          </button>
        </div>
        
    );
  }


  export default User;