import React, { useEffect, useContext } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

/**
 * ?  =====Import Components=====
 */


import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login' 
import Home from './Pages/Home';

function App() {

  const {user, setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  }, [])

  return (
    <div>
      <Router>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

      </Router>
    </div>
  );
  }

export default App
