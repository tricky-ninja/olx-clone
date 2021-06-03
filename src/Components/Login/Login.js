import React, { useState, useContext } from 'react';
import {FirebaseContext} from '../../store/FirebaseContext';
import {Link, useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({
  loading,
  setLoading
}) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext)
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    history.push('/')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    setLoading(false);
    toast.error(error.message, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    
  });
  }

  return (
    <div>
      <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          required
        />
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
            required
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        
        <Link to='/signup' className='a' style={{textDecoration: "none", color: '#002f34'}}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
