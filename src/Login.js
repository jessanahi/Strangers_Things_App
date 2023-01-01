import { login } from './apiRequests';

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

          const responseToken = await login(username, password);

          setToken(responseToken);
        }
      }
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
