import axios from 'axios';
import { LOGIN_URL } from './constants';

function Login({ 
    username, 
    password, 
    setUsername, 
    setPassword, 
    setToken 
}) {

  return (
    <div>
      <h2>Welcome back, Stranger!</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const response = await axios.post(LOGIN_URL, {
              user: { username, password },
            });

            const responseToken = response.data.data.token;

            setToken(responseToken);
          } catch (e) {
            console.log('ERROR: Failed to login.');
            console.error(e);
          }
        }}
      >
        <fieldset>
          <legend>Login</legend>
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

export default Login;
