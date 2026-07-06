import { redirect } from "@tanstack/react-router";
import { useAuthStore } from "../store/authStore";

/**
 * Redirects unauthenticated users to the login page.
 */
export function requireAuth() {
  const session = useAuthStore.getState().session;
  if (!session) {
    throw redirect({
      to: "/",
    });
  }
}
