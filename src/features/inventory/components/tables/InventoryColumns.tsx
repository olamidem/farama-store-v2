import type { ColumnDef } from "@tanstack/react-table";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

export interface InventoryTransactionRow {
  id: string;
  date: string;
  product: string;
  type: string;
  quantity: number;
  balance: number;
  user: string;
}

export const inventoryColumns: ColumnDef<InventoryTransactionRow>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "type",
    header: "Transaction",
    cell: ({ row }) => {
      const type = row.original.type;
      const isIn = ["Purchase", "Return", "Adjustment +"].includes(type);
      return (
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            isIn ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {isIn ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}

          {type}
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "balance",
    header: "Balance",
  },
  {
    accessorKey: "user",
    header: "User",
  },
];
