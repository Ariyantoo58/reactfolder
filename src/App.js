import './App.css';
import MyBotton from './MyBotton.js';
import Header from './Component/Header';
import React from 'react';
const App =() => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MyBotton />
      </header>
    </div>
  );
}

export default App;
