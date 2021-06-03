import React, { useState, useContext } from 'react';
import {useHistory, Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup({
  loading,
  setLoading
}) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext);

  let error;

  //const validate = () => {
    //if (password.length < 6) error = "Password must be at least 6 characters in length"
  //}

  const handleSubmit = (event) => {
    event.preventDefault()
    //validate();
    //if (error) return alert(error)
    setLoading(true)
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      result.user.updateProfile({displayName: username}).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: phone
        }).then(() => {
          history.push('/login')
        })
        
      })
    }).catch((error) => {
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
      />
      <div className="signupParentDiv">
      
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
            required
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <Link to='/Login' className='a' style={{textDecoration: "none", color: '#002f34'}}>Login</Link>
      </div>
    </div>
  );
}
