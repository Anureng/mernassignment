import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Shows from './components/Shows';
import Events from './components/Events';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Shows />
      <Events />
    </>
  );
}

export default App;
