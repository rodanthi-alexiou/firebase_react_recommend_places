import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Button, Typography, Grid } from "@material-ui/core";
import './App.css';
import React, {useEffect, useState} from 'react'
import CreateDate from "./CreateDate"
import ApiTest from "./ApiTest"
import DateIdea from "./DateIdea"
import AvailableBars from "./AvailableBars"
import Login from "./Login"
import User from "./User"


// https://api.github.com/users/rodanthi-alexiou

// AIzaSyAFg30VuzF36EOPJ0s4ksCOP-WI8j973sk

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
    <Switch>
      <Route
        exact
        path="/" render={() => {
            return(
              
              <div className='text'> Για που λες;
                <div>
                <Button className='card' component={Link} to={'/createdate'} >
                Ψάχνω...
                </Button>
                <Button className='card' component={Link} to={'/history'}>
                    Παλιές Βόλτες
                </Button>
                <Button className='card' component={Link} to={'/user'}>
                Λογαριασμός
            </Button>

                </div>
            </div>);
          }}/>


          <Route
          path='/createdate'
          render={(props) => (
            <CreateDate {...props} test="2" />
          )}
        />
      <Route path="/apitest" component={ApiTest}/>
      <Route path="/dateidea" component={DateIdea}/>
      <Route path="/availablebars" component={AvailableBars}/>
      <Route path="/history" component={History}/>
      <Route path="/login" component={Login}/>
      <Route
      path='/user'
      render={(props) => (
        <User {...props} tok={token} />
      )}
    />

    </Switch>
  </Router>
    
);
}

export default App;
