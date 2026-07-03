import type { User } from "./user";

export interface LoginRequest {
  phone_number: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}
