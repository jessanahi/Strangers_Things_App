import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './Register.js';
import Login from './Login';

function App() {
  // const [postList, setPostList] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>

          <Route
            exact
            path='/register'
            element={
              <Register
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            }
          />
          <Route
            exact
            path='/login'
            element={
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            }
          />
          <Route />

    </>
  );
}

export default App;
