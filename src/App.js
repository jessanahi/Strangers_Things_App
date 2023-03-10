import { useState, useEffect, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TOKEN_STORAGE_KEY } from './constants';
import Register from './Register';
import Login from './Login';
import PostList from './PostList';
import Navibar from './Navibar';
import Header from './Header';
import Footer from './Footer';
import { getUser } from './apiRequests';
import styles from './App.module.css';
import SinglePostView from './SinglePostView';
import Logout from './Logout';
import { DateTime } from 'luxon';
import UserProfile from './UserProfile';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const [logoutTime, setLogoutTime] = useState(null);

  // Added useCallback hook from react.
  const setAndStoreToken = useCallback((responseToken) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, responseToken);
    setToken(responseToken);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setLogoutTime(DateTime.now());
    setToken('');
    setUser(null);
  }, []);

  // Helper function for the username and password inputs. - ALSO OTHER INPUTS
  const setTargetValue = useCallback((callback) => {
    return (eventOrString) => {
      callback(eventOrString?.target?.value || eventOrString);
    };
  }, []);

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
          throw new Error('ERROR: Failed to fetch User.');
        });
    }
  }, [token]);

  return (
    <div className={styles.appcontainer}>
      <Header />
      <Navibar currentUser={user} logout={logout} />
      <main className={styles.main}>
        <Switch>
          <Route exact path={'/home'}>
            <h1>Welcome to Stranger's Things</h1>
          </Route>

          <Route exact path={'/'}>
            <Redirect to={'/home'} />
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

          <Route exact path={'/logout'}>
            <Logout logoutTime={logoutTime} />
          </Route>

          <Route exact path={'/posts'}>
            <PostList token={token} posts={posts} setPosts={setPosts} />
          </Route>

          <Route
            exact
            path={'/posts/:postId'}
            render={(routeProps) => {
              const {
                match: {
                  params: { postId },
                },
              } = routeProps;
              return <SinglePostView postId={postId} posts={posts} />;
            }}
          ></Route>

          <Route>
            <UserProfile />
          </Route>

          <Route>
            <h1>Strange...Page Not Found</h1>
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
