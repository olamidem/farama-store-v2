import type { ColumnDef } from "@tanstack/react-table";
import type { InventoryTransaction } from "../types/inventoryTransaction";

export const inventoryTransactionColumns: ColumnDef<InventoryTransaction>[] = [
  {
    accessorKey: "created_at",
    header: "Date",
  },
  {
    accessorKey: "product.name",
    header: "Product",
  },
  {
    accessorKey: "transaction_type",
    header: "Transaction",
  },
  {
    accessorKey: "quantity",
    header: "Qty",
  },
  {
    accessorKey: "balance_after",
    header: "Balance",
  },
  {
    accessorKey: "reference",
    header: "Reference",
  },
];
