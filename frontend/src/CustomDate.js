import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
  } from "react-router-dom";
import './App.css';
import React, {useEffect, useState} from 'react'
import { Typography, TextField, Input, Button } from "@material-ui/core";
import { placeData } from "./data";
import UploadImage from "./UploadImage";
import { storage, db } from './firebase';

function CustomDate({username}) {

  const [location, setLocation] = useState('');
  const [friends, setFriends] = useState([]);
  const [time, setTime] = useState('');
  const [imagearray, setImageArray] = useState([]);
  



  const [openImage, setOpenImage] = useState(false);

  

const history = useHistory();

    if(openImage){
      return <UploadImage setImageArray={setImageArray} imagearray={imagearray} setOpenImage={setOpenImage} username={username}/>
    }

    
    const handleUpload = () => {
        db.collection("dates").add({
          username: username,
          img: imagearray,
          loc: location,
          time: time
        })
        history.push('/user')
    }
   





    return (
        <div>
            <h1>Καινούρια Διαδρομή...</h1>
            <h1>{username}</h1>

            

            <h2> Που: </h2>
            <Input type="text" placeholder="Περιοχή"  onChange={e => setLocation(e.target.value)} />
            
            
            <h2> Πότε; </h2>
            <Input type="text" placeholder="Ημέρα/Ώρα"  onChange={e => setTime(e.target.value)} />


            {imagearray.map((images,index) => (
              <div>
              <h2>{images.name}</h2>
              <img src={images.name} />
                         
              </div>
            ))}

            

            <button  className="button" onClick={() => setOpenImage(true)}>
                Ανέβασε φώτος!!
            </button>

            <button  className="button" onClick={handleUpload}>
              Αποθήκευσε την βόλτα!!!!
            </button>



          <button className="button" onClick={() => history.push('/')}>
            Πίσω
          </button>
        </div>
        
    );
  }


  export default CustomDate;