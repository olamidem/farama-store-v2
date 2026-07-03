// src/types/user.ts

export type UserRole = "Admin" | "Manager" | "Cashier";

export interface User {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}