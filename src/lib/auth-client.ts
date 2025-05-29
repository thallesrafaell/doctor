import { customSessionClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { auth } from "./auth"; // Adjust the import path as necessary
export const authClient = createAuthClient({
  plugins: [customSessionClient<typeof auth>()],
});
