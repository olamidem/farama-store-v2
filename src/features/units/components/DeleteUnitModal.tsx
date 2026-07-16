import ConfirmDialog from "../../../components/ui/ConfirmDialog";
import { useArchiveUnit } from "../hooks/useUnitMutations";
import type { Unit } from "../types/unit";

interface DeleteUnitModalProps {
  open: boolean;
  onClose: () => void;
  unit: Unit | null;
}

export const DeleteUnitModal = ({
  open,
  onClose,
  unit,
}: DeleteUnitModalProps) => {
  const { mutateAsync: archiveUnit, isPending } = useArchiveUnit();

  if (!unit) return null;

  const handleConfirm = async () => {
    await archiveUnit(unit.id);
    onClose();
  };

  return (
    <ConfirmDialog
      open={open}
      title="Archive Unit"
      subtitle="Verify action"
      variant="danger"
      confirmationKeyword="ARCHIVE"
      confirmText="Archive Unit"
      cancelText="Cancel"
      loading={isPending}
      onCancel={onClose}
      onConfirm={handleConfirm}
      description={`Are you sure you want to archive the unit "${unit.name}" (${unit.symbol})?`}
      infoBoxText="Archiving this unit of measure will set its status to inactive. Associated products will remain intact, but you won't be able to select this unit for new products."
    />
  );
};

export default DeleteUnitModal;
