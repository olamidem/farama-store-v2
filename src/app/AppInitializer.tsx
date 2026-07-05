import type { ReactNode } from "react";
import { useAuthStore } from "../store/authStore";
import { useCurrentUser } from "../features/auth/hooks/useCurrentUser";
import LoadingScreen from "../components/common/LoadingScreen";

interface AppInitializerProps {
  children: ReactNode;
}

const AppInitializer = ({ children }: AppInitializerProps) => {
  const token = useAuthStore((state) => state.token);
  const { isLoading } = useCurrentUser();
  // No token → nothing to restore
  if (!token) {
    return <>{children}</>;
  }
  // Token exists → restoring session
  if (isLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return <>{children}</>;
};

export default AppInitializer;
