import type { User } from "@supabase/supabase-js";
import type { Role, Permission } from "./permission";
import type { UserStatus } from "./enums";

export interface Profile {
  ...
  status: UserStatus;
  role: Role | null;
}

export interface CurrentUser {
  user: User;
  profile: Profile;
  permissions: Permission[];
}

export interface UnlockRequest {
  pin: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}