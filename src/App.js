import { useState, useEffect } from 'react';
import axios from 'axios';

const registerURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/users/register';

const postsURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-PT/posts';

const TOKEN_STORAGE_KEY = 'strange_token';

function App() {
  // const [postList, setPostList] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);

    setToken(storageToken);
    }, []);

  // helper function for the username and password inputs
  const setTargetValue = (callback) => {
    return (e) => callback(e.target.value);
  };

  if (!token) {
    return (
      <>
      <div>
        <h2>New User? Register to Join, Stranger!</h2>
        <form
          onSubmit={
            async e => {
              e.preventDefault();
            
            try {
            const response = await axios.post(
              registerURL, {
              user: {username, password}}
              );

              const responseToken = response.data.data.token;
              localStorage.setItem(TOKEN_STORAGE_KEY, responseToken)
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

  return (
    <div>
      <button
        onClick={
          async () => {
            try {
            const response = await axios.get(postsURL, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }
            });
            setPosts(response.data.data.posts);
            } catch (e) {
              console.log('ERROR??? No posts fetched.');
              console.error(e);
            }
          }
        }
      >
        See All Posts</button>
      {
        posts.map((post) => {
          return (
          <code>{JSON.stringify(post, null, 2)}</code>)
        })}
    </div>

  )
}

export default App;