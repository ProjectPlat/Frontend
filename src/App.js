import React from 'react';
import './App.css';
import * as Sentry from "@sentry/react";
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const ErrorSentryTest = () => {
      throw new Error('LOS UNICORNIOS NO EXISTEN');
  }

  return (
    <div className="App"> 
      <NavBar />
      <Header />
      <button onClick={ErrorSentryTest}>Break the world</button>
    </div>
  );
}


export default Sentry.withProfiler(App);