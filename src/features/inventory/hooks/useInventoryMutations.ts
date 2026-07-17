import { supabase } from "../../../api/supabase";
import type { RecordInventoryTransactionInput } from "../types/inventoryTransaction";

export async function createInventoryTransaction(
  input: RecordInventoryTransactionInput,
) {
  const { error } = await supabase.rpc("record_inventory_transaction", {
    p_product_id: input.product_id,
    p_transaction_type: input.transaction_type,
    p_quantity: input.quantity,
    p_reason: input.reason,
    p_remarks: input.remarks,
  });

  if (error) throw error;
}
