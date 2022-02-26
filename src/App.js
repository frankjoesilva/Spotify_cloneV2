import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify'


export default function App() {
  const [token, setToken] = useState()

  useEffect(() => {
    const token = getTokenFromUrl()
    window.location.hash = ""
    console.log("token", token);
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  )
}

