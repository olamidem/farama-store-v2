import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stockAdjustmentSchema, type StockAdjustmentFormData } from "../validation/inventory.schema";
import Modal from "../../../components/ui/Modal";
import { FormNumberInput, FormSelect } from "../../../components/forms";
import Button from "../../../components/ui/Button";
import FormTextarea from "../../../components/forms/FormTextarea";


interface StockAdjustmentModalProps {
  open: boolean;
  onClose: () => void;
}

export default function StockAdjustmentModal({
  open,
  onClose,
}: StockAdjustmentModalProps) {
  const { control, handleSubmit } = useForm<StockAdjustmentFormData>({
    resolver: zodResolver(stockAdjustmentSchema),
    defaultValues: {
      product_id: "",
      transaction_type: "ADJUSTMENT_IN",
      quantity: 1,
      reason: "",
      remarks: "",
    },
  });

  const onSubmit = (data: StockAdjustmentFormData) => {
    console.log(data);
  };

  return (
    <Modal open={open} onClose={onClose} title="Stock Adjustment" size="md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <FormSelect
          control={control}
          name="product_id"
          label="Product"
          options={[]}
        />

        <FormSelect
          control={control}
          name="transaction_type"
          label="Adjustment Type"
          options={[
            {
              label: "Add Stock",
              value: "ADJUSTMENT_IN",
            },
            {
              label: "Remove Stock",
              value: "REMOVE",
            },
          ]}
        />

        <FormNumberInput control={control} name="quantity" label="Quantity" />
        <FormTextarea control={control} name="reason" label="Reason" />
        <FormTextarea control={control} name="remarks" label="Remarks" />

        <div className="flex justify-end gap-3">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save Adjustment</Button>
        </div>
      </form>
    </Modal>
  );
}
