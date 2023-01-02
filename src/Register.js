import { register } from './apiRequests';

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

            const responseToken = await register(username, password);
            
            setToken(responseToken);
        }
      }
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