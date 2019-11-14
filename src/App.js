import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
    </div>
  );
}

export default App;
