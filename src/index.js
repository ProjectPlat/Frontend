import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Services/SessionId/SessionId'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://6e8802292d504ebe986c8771e8f9da16@o1276217.ingest.sentry.io/6495105",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const userSession = localStorage.getItem('sessionId');
Sentry.setContext("User", {
    loggedIn: false,
    sessionId: userSession,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
