import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Button, Typography, Grid, Modal, Input, makeStyles, TextField } from "@material-ui/core";
import './App.css';
import React, {useEffect, useState} from 'react'
import CreateDate from "./CreateDate"
import ApiTest from "./ApiTest"
import DateIdea from "./DateIdea"
import AvailableBars from "./AvailableBars"
import Login from "./Login"
import User from "./User"
import CustomDate from "./CustomDate"
import { db, auth } from './firebase';


// https://api.github.com/users/rodanthi-alexiou

// AIzaSyAFg30VuzF36EOPJ0s4ksCOP-WI8j973sk

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




function App() {

  

  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState(null);

  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if (authUser) {
        //user has logged in...
        console.log(authUser);
        setUser(authUser);


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
      .then((authUser)  => {
        return authUser.user.updateProfile({
          displayName: username
        })
        })
      .catch((error) => alert(error.message));
  }

   const signIn = (event) => {
    event.preventDefault();
    
    auth
      .signInWithEmailAndPassword(email,password)
      .catch((error) => alert(error.message));

    setOpenSignIn(false);
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
                <Button className='card' component={Link} to={'/customdate'}>
                    Φτιάχνω την δική μου διαδρομή...
                </Button>
                <Button className='card' component={Link} to={'/user'}>
                  Λογαριασμός
                </Button>
                

                
                {user ? (
                  <div>
                  <button  className="button" onClick={() => auth.signOut()}>
                    Αποσυνδέσου
                </button>
                
                  </div>
                ): (
                  <div>
                    <button  className="button" onClick={() => setOpenSignIn(true)}>
                      Συνδέσου
                    </button>
                    <button  className="button" onClick={() => setOpen(true)}>
                      Καινούριος Λογαριασμός
                    </button>

                  </div>
                  
                )}
                
              <Modal
                open={open}
                onClose={() => setOpen(false)}
              >
                <div style={modalStyle} className={classes.paper}>
                  <form className="signup">
 
                  <Input
                    type="text"
                    placeholder="username"
                    
                    onChange={e => setUsername(e.target.value)}
                  />
                  

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
                
                  </form>
                </div>
              </Modal>


              <Modal
                open={openSignIn}
                onClose={() => setOpenSignIn(false)}
              >
                <div style={modalStyle} className={classes.paper}>
                  <form className="signup">


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
                
                  <Button onClick={signIn}>Sign In</Button>
                
                  </form>
                </div>
              </Modal>

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
      <Route path="/customdate" render={(props) => (
        <CustomDate {...props} username={user.displayName} />
      )}/>
      <Route
      path='/user'
      component={User}
    />

    </Switch>
  </Router>
    
);
}

export default App;
