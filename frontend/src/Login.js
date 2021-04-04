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





  function Login({setToken}) {

    const [name, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [list_users, setList] = useState([]);



const history = useHistory();

function handleSubmit(){
    const user = {username: name, password: pass};
    if(!list_users.find(x => x.username === name)){
      axios
        .post(`http://localhost:8000/api/users/`, user)
    }
    setToken(user);
}

//function findUser({item}) {

useEffect(() => {
    axios
    .get(`http://localhost:8000/api/users/`)
    .then(res => setList(res.data))
    .catch(err => console.log(err))

    console.log(list_users.findIndex(x => x.username === 'rodanthiiii'));

});



    return (
        <div>
        <form >
        <label>
          <h2>Username</h2>
          <input type="text" className="input" onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <h2>Password</h2>
          <input type="password" className="input" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      </div>
    );
  }


  export default Login;