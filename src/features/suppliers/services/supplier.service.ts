import { supabase } from "../../../api/supabase";
import { throwSupabaseError } from "../../../utils/supabaseError";
import type { Supplier, CreateSupplierInput, UpdateSupplierInput } from "../types/supplier";

export async function getSuppliers(): Promise<Supplier[]> {
  const { data, error } = await supabase
    .from("suppliers")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    throwSupabaseError(error);
  }

  return data || [];
}

export async function getSupplier(id: string): Promise<Supplier> {
  const { data, error } = await supabase
    .from("suppliers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throwSupabaseError(error);
  }

  return data;
}

export async function createSupplier(input: CreateSupplierInput): Promise<Supplier> {
  const { data, error } = await supabase
    .from("suppliers")
    .insert({
      name: input.name,
      email: input.email || null,
      phone: input.phone || null,
      address: input.address || null,
      remarks: input.remarks || null,
    })
    .select()
    .single();

  if (error) {
    throwSupabaseError(error);
  }

  return data;
}

export async function updateSupplier(id: string, input: UpdateSupplierInput): Promise<Supplier> {
  const { data, error } = await supabase
    .from("suppliers")
    .update({
      name: input.name,
      email: input.email || null,
      phone: input.phone || null,
      address: input.address || null,
      remarks: input.remarks || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throwSupabaseError(error);
  }

  return data;
}

export async function deleteSupplier(id: string): Promise<void> {
  const { error } = await supabase
    .from("suppliers")
    .delete()
    .eq("id", id);

  if (error) {
    throwSupabaseError(error);
  }
}

/**
 * Fetch purchases specifically for a supplier to populate stats and logs
 */
export async function getSupplierPurchases(supplierId: string) {
  const { data, error } = await supabase
    .from("purchases")
    .select(`
      *,
      items:purchase_items(
        *,
        product:products(*),
        product_unit:product_units(
          *,
          unit:units(*)
        )
      )
    `)
    .eq("supplier_id", supplierId)
    .order("created_at", { ascending: false });

  if (error) {
    throwSupabaseError(error);
  }

  return data || [];
}
