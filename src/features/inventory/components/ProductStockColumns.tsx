import type { ColumnDef } from "@tanstack/react-table";
import type { Product } from "../../products/types/product";

export const productStockColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "stock",
    header: "Current Stock",
  },
  {
    accessorKey: "min_stock_alert",
    header: "Minimum Stock",
  },
  {
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;

      return product.stock <= product.min_stock_alert ? "Low Stock" : "Healthy";
    },
  },
];
