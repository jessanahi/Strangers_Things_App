import { React } from 'react';

function Register(props) {

  async function handleRegister() {
    
  }
  return (
    <div>
      <h2>New User? Register to Join, Stranger!</h2>
      <form>
        <fieldset>
          <legend>Register</legend>
          <input value={username}placeholder='Username'
          onChange={(e) => {props.setUsername(e.target.value)}} />
          &nbsp;
          <input value={password}
          type={'password'}
          placeholder='Password'
          onChange={() => {}} />
          &nbsp;
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;