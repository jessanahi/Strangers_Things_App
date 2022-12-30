import React, { useState } from 'react';
import axios from 'axios';

const URL = {
  postsURL: 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/posts',

  registerURL: 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/users/register',

  loginURL: 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/users/login',

}

function App() {
  // const [postList, setPostList] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // helper function for the username and password inputs
  const setTargetValue = (callback) => {
    return (e) => callback(e.target.value);
  };

  return (
    <>
    <div>
      <h2>New User? Register to Join, Stranger!</h2>
      <form>
        <fieldset>
          <legend>Register</legend>
          <input 
            value={username}
            placeholder='Username'
            onChange={setTargetValue(setUsername)} />
          &nbsp;
          <input 
            value={password}
            type={'password'}
            placeholder='Password'
            onChange={setTargetValue(setPassword)} />
          &nbsp;
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
    </>
  );
}

export default App;