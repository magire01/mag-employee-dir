import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/title";
import List from "./components/list";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="container">
      <Title />
      <List />
    </div>
  );
}

export default App;
