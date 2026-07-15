import { useState } from "react";
import { useParams, useNavigate } from "@tanstack/react-router";
import { useProduct } from "../hooks/useProducts";
import { useCategories } from "../../categories/hooks/useCategories";
import { ProductDetailsHeader } from "./components/ProductDetailsHeader";
import { ProductDetailsPrimaryCard } from "./components/ProductDetailsPrimaryCard";
import { ProductDetailsPricingCard } from "./components/ProductDetailsPricingCard";
import { ProductDetailsHistoryTabs } from "./components/ProductDetailsHistoryTabs";
import { ProductDetailsStockSummary } from "./components/ProductDetailsStockSummary";
import EditProductModal from "../components/EditProductModal";
import DeleteProductModal from "../components/DeleteProductModal";
import { toast } from "sonner";
import { motion } from "motion/react";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { ProductDetailsActivity } from "./components/ProductDetailsActivity";
import { ProductDetailsActivity } from "./components/ProductDetailsActivity";

export const ProductDetailsPage = () => {
  const { productId } = useParams({ strict: false }) as { productId: string };
  const navigate = useNavigate();

  // Dialog & Modal State
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Queries
  const {
    data: product,
    isLoading: isProductLoading,
    isError,
  } = useProduct(productId);
  const { data: categories = [] } = useCategories();

  if (isProductLoading) {
    return (
      <div className="space-y-6 animate-pulse max-w-7xl mx-auto">
        <div className="h-10 bg-slate-200 rounded-xl w-1/4" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-56 bg-slate-200 rounded-2xl" />
            <div className="h-96 bg-slate-200 rounded-2xl" />
          </div>
          <div className="space-y-6">
            <div className="h-44 bg-slate-200 rounded-2xl" />
            <div className="h-44 bg-slate-200 rounded-2xl" />
            <div className="h-44 bg-slate-200 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center max-w-md mx-auto">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-4 border border-rose-100 shadow-sm">
          <AlertTriangle size={32} />
        </div>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Product Not Found
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          We couldn't find the product details you requested. The item may have
          been deleted.
        </p>
        <button
          onClick={() => navigate({ to: "/products" })}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition shadow-sm mt-6"
        >
          <ArrowLeft size={16} />
          <span>Back to Products</span>
        </button>
      </div>
    );
  }

  // Find Category Name
  const category = categories.find(
    (c) => String(c.id) === String(product.category_id),
  );
  const categoryName = category?.name || "General";

  const handlePrintBarcode = () => {
    toast.success(`Barcode labels printed successfully for ${product.name}`);
  };

  const handleAdjustStock = () => {
    toast.info(
      "Adjust Stock wizard triggered. Modify stock values from details panels.",
    );
  };

  const handleDuplicate = () => {
    toast.info(`Duplicating product: ${product.name}. Saving a new copy...`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-7xl mx-auto pb-12"
    >
      {/* Header */}
      <ProductDetailsHeader
        onEdit={() => setIsEditOpen(true)}
        onPrintBarcode={handlePrintBarcode}
        onArchive={() => setIsArchiveOpen(true)}
      />

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Side: Product Cards */}
        <div className="lg:col-span-2 space-y-6">
          <ProductDetailsPrimaryCard
            product={product}
            categoryName={categoryName}
          />
          <ProductDetailsHistoryTabs
            product={product}
            categoryName={categoryName}
            onEdit={() => setIsEditOpen(true)}
            onAdjustStock={handleAdjustStock}
            onDuplicate={handleDuplicate}
            onPrintBarcode={handlePrintBarcode}
            onArchive={() => setIsArchiveOpen(true)}
          />
        </div>

        {/* Right Side: Pricing & Activity Panels */}
        <div className="space-y-6">
          <ProductDetailsPricingCard product={product} />
          <ProductDetailsStockSummary product={product} />
          <ProductDetailsActivity product={product} />
        </div>
      </div>

      {/* Edit Product Modal */}
      <EditProductModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        product={product}
      />

      {/* Delete / Archive Product Modal */}
      <DeleteProductModal
        open={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        product={product}
      />
    </motion.div>
  );
};

export default ProductDetailsPage;
