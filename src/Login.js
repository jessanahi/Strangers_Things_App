
import { URL } from './constants';

function Login({ username, password, setUsername, setPassword }) {
  async function loginHandler() {
    const body = JSON.stringify({
      user: {
        username: username,
        password: password,
      },
    });

    try {
      const response = await fetch(URL.loginURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      const json = await response.json();
      
      if (json.data.token) {
        localStorage.setItem('jwt', json.data.token);
      }
    } catch (e) {
      console.log('Error login');
      console.error(e);
    }
  }

  return (
    <div>
      <h2>Welcome back, Stranger!</h2>
      <form>
        <fieldset>
          <legend>Login</legend>
          <input
            value={username}
            placeholder='Username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          &nbsp;
          <input
            value='password'
            type={'password'}
            placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          &nbsp;
          <button onClick={loginHandler}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;