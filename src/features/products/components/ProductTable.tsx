import type { OnChangeFn, RowSelectionState } from "@tanstack/react-table";
import type { Category } from "../../categories/types/category";
import type { Product } from "../types/product";
import { productColumns } from "./ProductColumns";
import DataTable from "../../../components/ui/DataTable/DataTable";
import { motion } from "motion/react";

interface ProductTableProps {
  products: Product[];
  categories: Category[];
  isLoading?: boolean;
  enableRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  onEdit: (product: Product) => void;
  onDeactivate: (product: Product) => void;
  onRestore: (product: Product) => void;
  sortBy: "created_at" | "name" | "selling_price" | "stock";
  ascending: boolean;
  onSort: (column: "created_at" | "name" | "selling_price" | "stock") => void;
  emptyTitle?: string;
  emptyDescription?: string;
}

const ProductTable = ({
  products,
  categories,
  enableRowSelection,
  rowSelection,
  onRowSelectionChange,
  onEdit,
  onDeactivate,
  onRestore,
  isLoading = false,
  sortBy,
  ascending,
  onSort,
  emptyTitle,
  emptyDescription,
}: ProductTableProps) => {
  const columns = productColumns({
    categories,
    onEdit,
    onDeactivate,
    onRestore,
    sortBy,
    ascending,
    onSort,
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <DataTable
        data={products}
        columns={columns}
        enableRowSelection={enableRowSelection}
        rowSelection={rowSelection}
        onRowSelectionChange={onRowSelectionChange}
        emptyTitle={emptyTitle}
        emptyDescription={emptyDescription}
        isLoading={isLoading}
        getRowId={(product) => String(product.id)}
      />
    </motion.div>
  );
};

export default ProductTable;
