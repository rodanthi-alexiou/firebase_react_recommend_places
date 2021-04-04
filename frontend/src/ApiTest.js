import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import './App.css';
  import React, {useEffect, useState} from 'react'


// AIzaSyAFg30VuzF36EOPJ0s4ksCOP-WI8j973sk

function ApiTest() {
    const [login, setLogin] = useState('rodanthi-alexiou');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
      if(!login) return;
      setLoading(true);
      //fetch(`https://api.github.com/users/${login}`)
      fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyAFg30VuzF36EOPJ0s4ksCOP-WI8j973sk`)
      .then((response)=>response.json())
      .then(setData)
      .then(()=>setLoading(false))
      .catch(setError);
    }, [login]);
    
    if(loading) return <h1>Loading...</h1>
    if (error)
      return <pre>{JSON.stringify(error,null,2)}</pre>;
    if(!data) return null;
    
      return (
        <div className='body'>
          <h1>{data}</h1>
    
        </div>
      );
    }
    
    export default ApiTest;