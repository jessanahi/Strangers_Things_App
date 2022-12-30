import React, { useState, useEffect } from 'react';
//import { Switch, Route } from 'react-router-dom';
//import Register from './Register.js';
//import Login from './Login';

function App() {
  // const [postList, setPostList] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <div>
      <h2>New User? Register to Join, Stranger!</h2>
      <form>
        <fieldset>
          <legend>Register</legend>
          <input 
            value={username}placeholder='Username'
            onChange={(e) => {setUsername(e.target.value)}} />
          &nbsp;
          <input 
            value={password}
            type={'password'}
            placeholder='Password'
            onChange={(e) => {setPassword(e.target.value)}} />
          &nbsp;
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
    </>
  );
}

export default App;