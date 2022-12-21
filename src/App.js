import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import Login from './Login.js';
import Register from './Register.js';

function App() {
  const [postList, setPostList] = useState([])
  return (
    <>
      <Register />
      <Login />
    </>
  );
}

export default App;
