import { supabase } from "../../../api/supabase";
import type { CreateInventoryTransactionInput } from "../types/inventory";
import type {
  InventoryTransaction,
  RecordInventoryTransactionInput,
} from "../types/inventoryTransaction";

export async function getInventoryTransactions() {
  const { data, error } = await supabase
    .from("inventory_transactions")
    .select(`
      *,
      product:products(
        id,
        name,
        sku
      ),
      product_unit:product_units(
        id,
        conversion_factor,
        unit:units(
          id,
          name,
          abbreviation
        )
      )
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data as InventoryTransaction[];
}

export async function recordInventoryTransaction(
  input: RecordInventoryTransactionInput,
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: product, error: productError } = await supabase
    .from("products")
    .select("stock")
    .eq("id", input.product_id)
    .single();

  if (productError) throw productError;

  const currentStock = product?.stock ?? 0;

  const balanceAfter =
    input.transaction_type === "SALE" ||
    input.transaction_type === "TRANSFER_OUT" ||
    input.transaction_type === "ADJUSTMENT_OUT" ||
    input.transaction_type === "DAMAGE"
      ? currentStock - input.quantity
      : currentStock + input.quantity;

  const { error } = await supabase.from("inventory_transactions").insert({
    product_id: input.product_id,
    product_unit_id: input.product_unit_id,
    quantity: input.quantity,
    balance_after: balanceAfter,
    transaction_type: input.transaction_type,
    reference: input.reference ?? null,
    remarks: input.remarks ?? null,
    created_by: user?.id ?? null,
  });

  if (error) throw error;
}
