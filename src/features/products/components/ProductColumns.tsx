import type { ColumnDef } from "@tanstack/react-table";
import type { Product } from "../types/product";
import type { Category } from "../../categories/types/category";
import Badge from "../../../components/ui/Badge";

export const productColumns = (
  categories: Category[],
): ColumnDef<Product>[] => {
  const categoryMap = new Map(
    categories.map((category) => [category.id, category.name]),
  );
  return [
    {
      accessorKey: "barcode",
      header: "Barcode",
      cell: ({ row }) => (
        <span className="font-mono text-xs text-slate-500">
          {row.original.barcode}
        </span>
      ),
    },
    {
      accessorKey: "name",
      header: "Product Name",
      cell: ({ row }) => {
        const product = row.original;
        const isLowStock = product.stock <= product.min_stock_alert;
        return (
          <div className="flex items-center justify-between gap-3">
            <span className="font-semibold text-slate-800">{product.name}</span>
            {isLowStock && <Badge variant="danger">Low Stock</Badge>}
          </div>
        );
      },
    },
    {
      accessorKey: "category_id",
      header: "Category",
      cell: ({ row }) => (
        <span className="rounded bg-slate-100 px-2 py-1 text-xs font-semibold">
          {categoryMap.get(row.original.category_id) ?? "Unknown"}
        </span>
      ),
    },
    {
      accessorKey: "selling_price",
      header: "Selling Price",
      cell: ({ row }) => (
        <span className="font-bold">
          ₦{row.original.selling_price.toLocaleString()}
        </span>
      ),
    },

    {
      accessorKey: "cost_price",
      header: "Cost Price",
      cell: ({ row }) => (
        <span className="text-slate-500">
          ₦{row.original.cost_price.toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => (
        <span
          className={`font-mono font-bold ${
            row.original.stock <= row.original.min_stock_alert
              ? "text-rose-600"
              : "text-slate-800"
          }`}
        >
          {row.original.stock} Units
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: () => (
        <button className="rounded bg-slate-100 px-3 py-1 text-xs font-bold hover:bg-slate-200">
          Edit
        </button>
      ),
    },
  ];
};
