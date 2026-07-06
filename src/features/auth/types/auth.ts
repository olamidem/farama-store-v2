import type { Session, User } from "@supabase/supabase-js";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  session: Session | null;
}

export interface AuthActions {
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export type AuthStore = AuthState & AuthActions;
