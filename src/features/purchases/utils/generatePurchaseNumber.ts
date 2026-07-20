import { supabase } from "../../../api/supabase";

export async function generatePurchaseNumber() {
  const { count, error } = await supabase
    .from("purchases")
    .select("*", { count: "exact", head: true });
  if (error) throw error;
  const nextNumber = (count ?? 0) + 1;
  const currentYear = new Date().getFullYear();
  return `PO_${currentYear}_${String(nextNumber).padStart(4, "0")}`;
}
