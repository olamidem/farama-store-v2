import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { useAuthStore } from "../store/authStore";

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      // Remove cached data
      queryClient.removeQueries();
      toast.success("Logged out successfully.");
      await navigate({
        to: "/",
      });
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Unable to logout.");
    },
  });
};

export default useLogout;
