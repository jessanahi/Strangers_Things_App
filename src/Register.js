import { React } from 'react';
import { URL } from './constants';

function Register({ username, password, setUsername, setPassword }) {
  async function registerHandler() {
    const body = JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    });

    try {
      const response = await fetch(URL.registerURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
    });

    const json = await response.json();
    
    } catch (e) {
      console.log('ERROR: Registration Failed');
      console.error(e);
    }
  };
  
  return (
    <div>
      <h2>New User? Register to Join, Stranger!</h2>
      <form>
        <fieldset>
          <legend>Register</legend>
          <input value={username}placeholder='Username'
          onChange={(e) => {setUsername(e.target.value)}} />
          &nbsp;
          <input value={password}
          type={'password'}
          placeholder='Password'
          onChange={(e) => {setPassword(e.target.value)}} />
          &nbsp;
          <button onClick={registerHandler}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;