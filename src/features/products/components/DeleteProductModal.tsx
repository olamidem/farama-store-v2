import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";
import ConfirmDialog from "../../../components/ui/ConfirmDialog";
import { useCategories } from "../../categories/hooks/useCategories";
import { useDeactivateProduct } from "../hooks/useProducts";
import type { Product } from "../types/product";
import ProductDeleteSummary from "./ProductDeleteSummary";
import { AlertTriangle } from "lucide-react";

interface DeleteProductModalProps {
  open: boolean;
  product: Product | null;
  onClose: () => void;
}

const DeleteProductModal = ({
  open,
  product,
  onClose,
}: DeleteProductModalProps) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { data: categories = [] } = useCategories();
  const deactivateProduct = useDeactivateProduct();

  if (!product) return null;

  const handleOpenConfirmation = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmDeactivation = async () => {
    try {
      await deactivateProduct.mutateAsync(product.id);
      setShowConfirmDialog(false);
      onClose();
    } catch {
      // toast handled in hook
    }
  };

  const handleClose = () => {
    setShowConfirmDialog(false);
    onClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        size="sm"
        title={
          <>
            <div className="flex items-start gap-4 ">
              <span className="p-2 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight uppercase">
                  Delete Product Catalog Entry
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Step 1 of 2: Safety Catalog Review
                </p>
              </div>
            </div>
          </>
        }
      >
        <div className="space-y-6">
          <ProductDeleteSummary product={product} categories={categories} />

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>

            <Button variant="danger" onClick={handleOpenConfirmation}>
              Initiate Deactivation
            </Button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog
        open={showConfirmDialog}
        title="Critical Confirmation"
        subtitle="This action cannot be undone."
        infoBoxText="Deleting this product will remove its barcode records, packaging configurations, and stock levels. Future sales reports of historic sales will still reference this item but you won't be able to restock it or select it for new sales."
        description={`Are you sure you want to deactivate "${product.name}"? This product will be removed from active inventory but can be restored later.`}
        confirmationKeyword="DEACTIVATE"
        confirmText="Deactivate Product"
        cancelText="Cancel"
        loading={deactivateProduct.isPending}
        onCancel={() => setShowConfirmDialog(false)}
        onConfirm={handleConfirmDeactivation}
      />
    </>
  );
};

export default DeleteProductModal;
