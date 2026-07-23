import { useEffect, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "../store/authStore";

interface SessionGuardProps {
  children: ReactNode;
}

export const SessionGuard = ({
  children,
}: SessionGuardProps) => {
  const navigate = useNavigate();

  const isLocked = useAuthStore((state) => state.isLocked);
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated,
  );

  useEffect(() => {
    if (isAuthenticated && isLocked) {
      navigate({
        to: "/lock-screen",
        replace: true,
      });
    }
  }, [
    isAuthenticated,
    isLocked,
    navigate,
  ]);

  if (isAuthenticated && isLocked) {
    return null;
  }

  return <>{children}</>;
};

export default SessionGuard;