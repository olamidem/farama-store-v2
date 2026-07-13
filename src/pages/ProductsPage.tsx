import { AnimatePresence, motion } from "motion/react";
import ProductHeader from "../features/products/components/ProductHeader";
import ProductToolbar from "../features/products/components/ProductToolbar";
import ProductTable from "../features/products/components/ProductTable";
import AddProductModal from "../features/products/components/AddProductModal";
import { useProducts } from "../features/products/hooks/useProducts";
import { useCategories } from "../features/categories/hooks/useCategories";
import ErrorState from "../components/common/ErrorState";
import type { RowSelectionState } from "@tanstack/react-table";
import ProductBulkActions from "../features/products/components/ProductBulkActions";
import BulkUpdateModal from "../features/products/components/BulkUpdateModal";
import type { Product } from "../features/products/types/product";
import EditProductModal from "../features/products/components/EditProductModal";
import DeleteProductModal from "../features/products/components/DeleteProductModal";
import RestoreProductModal from "../features/products/components/RestoreProductModal";
import ExportProductDropdown from "../features/products/components/ExportProductDropdown";
import ProductImportModal from "../features/products/components/ProductImportModal";
import { useState } from "react";
import Pagination from "../components/ui/pagination/Pagination";

const ProductsPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [bulkModalOpen, setBulkModalOpen] = useState(false);
  const [status, setStatus] = useState("all");
  const { data: categories = [] } = useCategories();
  const [productToDeactivate, setProductToDeactivate] =
    useState<Product | null>(null);
  const [productToRestore, setProductToRestore] = useState<Product | null>(
    null,
  );
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState<
    "created_at" | "name" | "selling_price" | "stock"
  >("created_at");
  const [ascending, setAscending] = useState(false);

  const { data, isLoading, error } = useProducts({
    page,
    pageSize,
    search,
    category,
    status: status as "all" | "active" | "inactive",
    sortBy,
    ascending,
  });

  const products = data?.data ?? [];
  const totalProducts = data?.count ?? 0;
  const selectedProducts = products.filter(
    (product) => rowSelection[product.id],
  );

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedProduct(null);
    setIsEditModalOpen(false);
  };

  const handleDeactivateProduct = (product: Product) => {
    setProductToDeactivate(product);
  };

  const handleRestoreProduct = (product: Product) => {
    setProductToRestore(product);
  };

  if (error) {
    return (
      <ErrorState
        title="Unable to load products"
        description="We couldn't retrieve your products. Please try again."
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-6"
    >
      {/* Header */}
      <ProductHeader
        onAddProduct={() => setIsAddModalOpen(true)}
        onImportProduct={() => setIsImportModalOpen(true)}
        exportMenu={
          <ExportProductDropdown
            products={products}
            filteredProducts={products}
            categories={categories}
          />
        }
      />

      {/* Toolbar */}
      <ProductToolbar
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        status={status}
        onStatusChange={setStatus}
        categories={categories}
      />

      {/* Bulk Selection for Update */}
      <AnimatePresence mode="wait">
        {selectedProducts.length > 0 && (
          <ProductBulkActions
            selectedCount={selectedProducts.length}
            onClearSelection={() => setRowSelection({})}
            onBulkUpdate={() => setBulkModalOpen(true)}
          />
        )}
      </AnimatePresence>

      {/* Table */}

      <ProductTable
        products={products}
        categories={categories}
        isLoading={isLoading}
        enableRowSelection
        rowSelection={rowSelection}
        onRowSelectionChange={setRowSelection}
        onEdit={handleEditProduct}
        onDeactivate={handleDeactivateProduct}
        onRestore={handleRestoreProduct}
      />

      {/* Modal */}
      <AddProductModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      <ProductImportModal
        open={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        existingProducts={products}
        categories={categories}
      />

      {/* Modal for product bulks update */}
      <BulkUpdateModal
        open={bulkModalOpen}
        onClose={() => setBulkModalOpen(false)}
        onSuccess={() => setRowSelection({})}
        selectedProducts={selectedProducts}
      />

      {/* Edit product Modal */}
      <EditProductModal
        open={isEditModalOpen}
        onClose={handleCloseEditModal}
        product={selectedProduct}
      />

      <DeleteProductModal
        open={!!productToDeactivate}
        product={productToDeactivate}
        onClose={() => setProductToDeactivate(null)}
      />

      <RestoreProductModal
        open={!!productToRestore}
        product={productToRestore}
        onClose={() => setProductToRestore(null)}
      />

      <Pagination
        page={page}
        pageSize={pageSize}
        totalItems={totalProducts}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setPage(1);
        }}
      />
    </motion.div>
  );
};

export default ProductsPage;
