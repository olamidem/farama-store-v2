import { create } from "zustand";
import type { AuthStore } from "../features/auth/types/auth";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  session: null,
  setSession: (session) =>
    set({
      session,
    }),

  setUser: (user) =>
    set({
      user,
    }),

  logout: () =>
    set({
      user: null,
      session: null,
    }),
}));
