/* eslint-disable prefer-destructuring */
'import "server-only"';
import { ReflowAuth } from "@reflowhq/auth-next";

export default function getAuth() {
  const { SESSION_SECRET, REFLOW_PROJECT_ID } = process.env;
  const config = {
    projectID: REFLOW_PROJECT_ID,
    secret: SESSION_SECRET,
  };
  return new ReflowAuth(config);
}
