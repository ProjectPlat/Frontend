import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Services/SessionId/SessionId'
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import session_id, { ifUserIsLogged } from './Services/SessionId/SessionId';

function segment() {
  var analytics = window.analytics = window.analytics || [];
  if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
    analytics.invoked = !0;
    analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"];
    analytics.factory = function (e) {
      return function () {
        var t = Array.prototype.slice.call(arguments);
        t.unshift(e); analytics.push(t); return analytics
      }
    };
    for (var e = 0; e < analytics.methods.length; e++) {
      var key = analytics.methods[e];
      analytics[key] = analytics.factory(key)
    }
    analytics.load = function (key, e) {
      var t = document.createElement("script");
      t.type = "text/javascript";
      t.async = !0; t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
      var n = document.getElementsByTagName("script")[0];
      n.parentNode.insertBefore(t, n);
      analytics._loadOptions = e
    };
    analytics._writeKey = "MNpNGcIT8GgMOvqoKiFAYPvLJy54bU7s";;
    analytics.SNIPPET_VERSION = "4.15.3";
    analytics.load("MNpNGcIT8GgMOvqoKiFAYPvLJy54bU7s");
    analytics.page('Page View Home', {
        Logged: ifUserIsLogged(),
        SessionId: `${session_id}`
      });
    }
}
segment();

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
