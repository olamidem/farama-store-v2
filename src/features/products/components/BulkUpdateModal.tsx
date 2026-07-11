import {  useState } from "react";
import Modal from "../../../components/ui/Modal";
import type { Product } from "../types/product";
import BulkUpdateForm from "./BulkUpdateForm";
import BulkUpdatePreview from "./BulkUpdatePreview";
import BulkUpdateActions from "./BulkUpdateActions";
import { useBulkPricePreview } from "../hooks/useBulkPricePreview";
import { useBulkUpdateProducts } from "../hooks/useProducts";

interface BulkUpdateModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  selectedProducts: Product[];
}

const BulkUpdateModal = ({
  open,
  onClose,
  onSuccess,
  selectedProducts,
}: BulkUpdateModalProps) => {
  const [amount, setAmount] = useState("");
  const [updateType, setUpdateType] = useState<"selling" | "cost" | "both">(
    "selling",
  );
  const [method, setMethod] = useState<"percentage" | "fixed">("percentage");
  const [operation, setOperation] = useState<"increase" | "decrease">(
    "increase",
  );

  const previewProducts = useBulkPricePreview({
    products: selectedProducts,
    amount: Number(amount) || 0,
    updateType,
    method,
    operation,
  });

  const bulkUpdateMutation = useBulkUpdateProducts();

  const resetForm = () => {
    setAmount("");
    setUpdateType("selling");
    setMethod("percentage");
    setOperation("increase");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleApply = async () => {
    if (!amount || Number(amount) <= 0) {
      return;
    }
    const updates = previewProducts.map((product) => ({
      id: product.id,
      updates: {
        ...(updateType !== "cost" && {
          selling_price: product.newSellingPrice,
        }),
        ...(updateType !== "selling" && {
          cost_price: product.newCostPrice,
        }),
      },
    }));
    try {
      await bulkUpdateMutation.mutateAsync(updates);
      // Reset form
      resetForm();
      // Clear selected rows
      onSuccess();
      // Close modal
      handleClose();
    } catch {
      // Error toast handled in mutation hook
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      size="sm"
      title={`Bulk Update Prices (${selectedProducts.length} ${
        selectedProducts.length === 1 ? "Item" : "Items"
      })`}
    >
      <div className="space-y-5">
        <BulkUpdateForm
          amount={amount}
          method={method}
          operation={operation}
          updateType={updateType}
          onAmountChange={setAmount}
          onMethodChange={setMethod}
          onOperationChange={setOperation}
          onUpdateTypeChange={setUpdateType}
        />

        <BulkUpdatePreview
          products={previewProducts}
          updateType={updateType}
          operation={operation}
        />
        <BulkUpdateActions
          loading={bulkUpdateMutation.isPending}
          disabled={!amount || Number(amount) <= 0}
          onCancel={handleClose}
          onApply={handleApply}
        />
      </div>
    </Modal>
  );
};

export default BulkUpdateModal;
