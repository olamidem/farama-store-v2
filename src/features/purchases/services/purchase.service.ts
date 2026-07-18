import { supabase } from "../../../api/supabase";
import type { CreatePurchaseInput, Purchase, UpdatePurchaseInput } from "../types/purchase";

export async function getPurchases() {
  const { data, error } = await supabase
    .from("purchases")
    .select(
      `
      *,
      supplier:suppliers(*),
      items:purchase_items(
        *,
        product:products(*),
        product_unit:product_units(
          *,
          unit:units(*)
        )
      )
    `,
    )
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data as Purchase[];
}

export async function getPurchase(id: string) {
  const { data, error } = await supabase
    .from("purchases")
    .select(
      `
      *,
      supplier:suppliers(*),
      items:purchase_items(
        *,
        product:products(*),
        product_unit:product_units(
          *,
          unit:units(*)
        )
      )
    `,
    )
    .eq("id", id)
    .single();
  if (error) throw error;
  return data as Purchase;
}

export async function createPurchase(input: CreatePurchaseInput) {
  const total = input.items.reduce(
    (sum, item) => sum + item.quantity * item.unit_cost,
    0,
  );

  const purchaseNumber = "PO-" + Date.now().toString();

  const { data: purchase, error } = await supabase
    .from("purchases")
    .insert({
      purchase_number: purchaseNumber,
      supplier_id: input.supplier_id,
      purchase_date: input.purchase_date,
      expected_delivery_date: input.expected_delivery_date,
      warehouse_id: input.warehouse_id,
      remarks: input.remarks,
      total_amount: total,
      status: "DRAFT",
    })
    .select()
    .single();

  if (error) throw error;

  const items = input.items.map((item) => ({
    purchase_id: purchase.id,
    product_id: item.product_id,
    product_unit_id: item.product_unit_id,
    quantity: item.quantity,
    unit_cost: item.unit_cost,
    total_cost: item.quantity * item.unit_cost,
  }));

  const { error: itemError } = await supabase
    .from("purchase_items")
    .insert(items);
  if (itemError) throw itemError;
  return purchase;
}

export async function updatePurchase(
  id: string,
  input: UpdatePurchaseInput
) {
  const { data, error } =
    await supabase
      .from("purchases")
      .update(input)
      .eq("id", id)
      .select()
      .single();
  if (error) throw error;
  return data;
}

export async function deletePurchase(
  id: string
) {
  const { error } = await supabase
    .from("purchases")
    .delete()
    .eq("id", id);
  if (error) throw error;
}