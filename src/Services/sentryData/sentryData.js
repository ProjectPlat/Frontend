import * as Sentry from "@sentry/react";
import { sessionId, loggedIn } from '../SessionId/sessionId';

Sentry.setContext("User", {
    loggedIn: loggedIn,
    sessionId: sessionId,
});