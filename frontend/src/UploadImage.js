import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import './App.css';
import React, {useEffect, useState} from 'react'
import { Typography, TextField, Button, Tab, Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";
import axios from "axios";
import { storage, db } from './firebase';





function UploadImage({setImageArray, imagearray, setOpenImage, username}) {
  var storageRef = storage.ref();

  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [caption, setCaption] = useState("");


const history = useHistory();



  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log(file);
 }

const handleUpload = (e) => {


  e.preventDefault();
const uploadTask = storage.ref(`/images/${file.name}`).put(file);
uploadTask.on("state_changed", console.log, console.error, () => {
  storage
    .ref("images")
    .child(file.name)
    .getDownloadURL()
    .then((url) => {
      setFile(null);
      setURL(url);
    });
});


setImageArray([
  ...imagearray,
  {
    id: imagearray.length,
    name: file.name,
    caption: caption
  }
]);

}

useEffect(() => {
  console.log(file);
});


  return (
      <div>
    

      <form onSubmit={handleUpload}>
      <input type="file" onChange={handleChange} />
      <input type="text" onChange={e => setCaption(e.target.value)} />
      <button disabled={!file}>αποθήκευσε</button>
    </form>
    <button onClick={()=>setOpenImage(false)}>τέλος</button>
    </div>
  );
}


export default UploadImage;