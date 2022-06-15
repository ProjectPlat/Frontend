import React from 'react';
import './App.css';
import * as Sentry from "@sentry/react";
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <div className="App"> 
      <NavBar />
      <Header />
    </div>
  );
}


export default Sentry.withProfiler(App);