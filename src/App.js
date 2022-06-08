import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import { v4 as uuid } from 'uuid';

function App() {

  const session_id = uuid();
  console.log('session_id:', session_id);

  return (
    <div className="App"> 
      <NavBar />
      <Header />
    </div>
  );
}


export default App;
