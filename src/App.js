import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TOKEN_STORAGE_KEY } from './constants';
import Register from './Register';
import Login from './Login';
import PostList from './PostList';
import Navibar from './Navibar';
import Header from './Header';
import Footer from './Footer';
import { getUser } from './apiRequests';
import styles from './App.module.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const setAndStoreToken = (responseToken) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, responseToken);
    setToken(responseToken);
  };

  // When loading page first time, we want to know if there is a token in local storage.
  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);

    setToken(storageToken);
  }, []);

  // This second useEffect is to manipulate rendering the header for whether a user is signed in or not.
  useEffect(() => {
    if (token) {
      getUser(token)
        .then((user) => {
          setUser(user);
        })
        .catch((e) => {
          throw new Error('ERROR: Failed to fetch User.')
        })
    };

  }, [token]);

  // Helper function for the username and password inputs.
  const setTargetValue = (callback) => {
    return (event) => callback(event.target.value);
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Navibar
          currentUser={user}
        />

        <Switch>
          <Route exact path={'/home'}>
            <h1>Welcome to Stranger's Things</h1>
          </Route>
          <Route exact path={'/register'}>
            <Register
              username={username}
              password={password}
              setUsername={setTargetValue(setUsername)}
              setPassword={setTargetValue(setPassword)}
              setToken={setAndStoreToken}
            />
          </Route>
          <Route exact path={'/login'}>
            <Login 
              username={username}
              password={password}
              setUsername={setTargetValue(setUsername)}
              setPassword={setTargetValue(setPassword)}
              setToken={setAndStoreToken}
            />
          </Route>
          <Route exact path={'/posts'}>
            <PostList 
              token={token} 
              posts={posts} 
              setPosts={setPosts} 
            />
          </Route>
          <Route>
            <h1>Strange...Page Not Found</h1>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
