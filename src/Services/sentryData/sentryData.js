import * as Sentry from "@sentry/react";
import { sessionId } from '../SessionId/sessionId';

Sentry.setContext("User", {
    loggedIn: sessionId.getSessionId() !== null,
    sessionId: sessionId.getSessionId(),
  });