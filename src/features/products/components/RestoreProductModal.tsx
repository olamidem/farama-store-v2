import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";
import ConfirmDialog from "../../../components/ui/ConfirmDialog";
import { useCategories } from "../../categories/hooks/useCategories";
import { useRestoreProduct } from "../hooks/useProducts";
import type { Product } from "../types/product";
import {  RefreshCw } from "lucide-react";
import ProductRestoreSummary from "./ProductRestoreSummary";

interface RestoreProductModalProps {
  open: boolean;
  product: Product | null;
  onClose: () => void;
}

const RestoreProductModal = ({
  open,
  product,
  onClose,
}: RestoreProductModalProps) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { data: categories = [] } = useCategories();
  const restoreProduct = useRestoreProduct();

  if (!product) return null;

  const handleInitiate = () => {
    setShowConfirmDialog(true);
  };

  const handleDeactivate = async () => {
    try {
      await restoreProduct.mutateAsync(product.id);
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
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <RefreshCw className="w-5 h-5" />
              </span>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-extrabold text-slate-900 tracking-tight uppercase">
                  Restore Product Catalog Entry
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Step 1 of 2: Restore Product Review
                </p>
              </div>
            </div>
          </>
        }
      >
        <div className="space-y-6">
          <ProductRestoreSummary product={product} categories={categories} />

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>

            <Button variant="success" onClick={handleInitiate}>
              Initiate Restoration
            </Button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog
        open={showConfirmDialog}
        variant="success"
        title="Restoration Confirmation"
        subtitle="This will reactivate the item across all sales channels."
        infoBoxText="Restoring this product will reconnect its barcode records, restore its historical packaging configurations, and put its stock levels back into active tracking. It will immediately become available again for restocking and selectable for new sales orders."
        description={`Are you sure you want to restore this product "${product.name}"? The product will become active again and will be available for sales and inventory operations.`}
        confirmationKeyword="RESTORE"
        confirmText="Restore Product"
        cancelText="Cancel"
        loading={restoreProduct.isPending}
        onCancel={() => setShowConfirmDialog(false)}
        onConfirm={handleDeactivate}
      />
    </>
  );
};

export default RestoreProductModal;
