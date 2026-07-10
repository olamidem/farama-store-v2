import Button from "../../../components/ui/Button";

interface BulkUpdateActionsProps {
  loading?: boolean;
  disabled?: boolean;
  onCancel: () => void;
  onApply: () => void;
}

const BulkUpdateActions = ({
  loading = false,
  disabled = false,
  onCancel,
  onApply,
}: BulkUpdateActionsProps) => {
  return (
    <div className="flex gap-2 pt-2">
      <Button
        variant="secondary"
        className="flex-1"
        onClick={onCancel}
        disabled={loading}
      >
        Cancel
      </Button>
      <Button
        className="flex-1"
        loading={loading}
        disabled={disabled}
        onClick={onApply}
      >
        Apply Update
      </Button>
    </div>
  );
};

export default BulkUpdateActions;
