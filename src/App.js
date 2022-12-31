import { useState, useEffect } from 'react';
import { TOKEN_STORAGE_KEY } from './constants';
import Register from './Register';
import Posts from './Posts';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');

  const setAndStoreToken = (responseToken) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, responseToken);
    setToken(responseToken);
  };

  // When loading page first time, we want to know if there is a token in local storage.
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
      <div>
        <Register 
        username={username}
        password={password}
        setUsername={setTargetValue(setUsername)}
        setPassword={setTargetValue(setPassword)}
        setToken={setAndStoreToken}
        />
      </div>
    );
  }

  return (
     <Posts 
      token={token}
      posts={posts}
      setPosts={setPosts}
     />
  )
};

export default App;