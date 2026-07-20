import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../api/supabase";
import { QUERY_KEYS } from "../../../lib/queryKey";
import { toast } from "sonner";

export async function getInventoryTransactions() {
  const { data, error } = await supabase
    .from("inventory_transactions")
    .select(`
      *,
      product:products(
        id,
        name,
        sku
      )
    `)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}


export function useRecordInventoryTransaction() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: recordInventoryTransaction,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.products,
      });
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.inventory,
      });
      toast.success("Inventory updated successfully.");
    },
  });
}

