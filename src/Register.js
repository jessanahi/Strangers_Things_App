import axios from 'axios';
import { REGISTER_URL } from './constants';

function Register({
  username,
  password,
  setUsername,
  setPassword,
  setToken,
}) {
  return (
    <div>
      <h2>New User? Register to Join, Stranger!</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const response = await axios.post(REGISTER_URL, {
              user: { username, password },
            });

            const responseToken = response.data.data.token;
            
            setToken(responseToken);

          } catch (e) {
            console.log('ERROR: Failed to register.');
            console.error(e);
          }
          setUsername('');
          setPassword('');
        }}
      >
        <fieldset>
          <legend>Register</legend>
          <input
            value={username}
            placeholder='Username'
            onChange={setUsername}
          />
          &nbsp;
          <input
            value={password}
            type={'password'}
            placeholder='Password'
            onChange={setPassword}
          />
          &nbsp;
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;