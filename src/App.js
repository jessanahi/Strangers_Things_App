import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './Register.js';

function App() {
  const [postList, setPostList] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Router>
        <Routes>
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
          <Route />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
