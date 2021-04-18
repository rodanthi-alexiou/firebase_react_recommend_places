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
import axios from "axios";
import { db, auth } from './firebase';





  function Login() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
  
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) =>{
        if (authUser) {
          //user has logged in...
          console.log(authUser);
          setUser(authUser);
  
          if (authUser.displayName) {
            //dont update username
          } else {
            // if we just created someone...
            return authUser.updateProfile({
              displayName: username,
            });
          }
  
        } else {
          // user has logged out
          setUser(null);
        }
      })
  
      return () => {
        //perfom some cleanup actions
        unsubscribe();
      }
    }, [user, username]);
  
  
    const signUp = (event) => {
      event.preventDefault();
      
      auth
        .createUserWithEmailAndPassword(email,password)
        .catch((error) => alert(error.message));
    }



    return (
        <div>
            <Input type="text" placeholder="username"  onChange={e => setUsername(e.target.value)} />
            <button onClick={() => console.log(username)}>Log value</button>
 
          <Input type="text" placeholder="username" onChange={e => setUsername(e.target.value)}
          />
        
          <button onClick={() => console.log(username)}>Log value</button>
          <Input
          type="text"
          placeholder="email"
          onChange={(e)=> setEmail(e.target.value)}
          />

          <Input
          type="password"
          placeholder="password"
          onChange={(e)=> setPassword(e.target.value)}
          />
      
          <Button onClick={signUp}>Sign Up</Button>
      
        
        </div>
    );
  }


  export default Login;