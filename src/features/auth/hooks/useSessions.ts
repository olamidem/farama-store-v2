import { useAuthStore } from "../store/authStore";

export const useSession = () => {
  const session = useAuthStore((state) => state.session);
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated,
  );
  const isLocked = useAuthStore((state) => state.isLocked);

  const setLocked = useAuthStore((state) => state.setLocked);

  const lock = () => setLocked(true);

  const unlock = () => setLocked(false);

  return {
    session,
    isAuthenticated,
    isLocked,
    lock,
    unlock,
  };
};

export default useSession;