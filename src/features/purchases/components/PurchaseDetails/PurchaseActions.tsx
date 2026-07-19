import { ChevronDown, Edit, PackageOpen } from "lucide-react";
import Button from "../../../../components/ui/Button";
import type { Purchase } from "../../types/purchase";

interface PurchaseActionsProps {
  purchase: Purchase;
  onEdit: () => void;
  onReceive: () => void;
}

const PurchaseActions = ({
  purchase,
  onEdit,
  onReceive,
}: PurchaseActionsProps) => {
  const isFullyReceived = purchase.status === "RECEIVED";

  return (
    <div className="flex items-center gap-2">
      <Button type="button" variant="secondary" size="sm" onClick={onEdit}>
        <Edit size={14} />
        Edit
      </Button>

      <div className="flex items-center">
        <Button
          type="button"
          size="sm"
          onClick={onReceive}
          disabled={isFullyReceived}
          className="rounded-r-none"
        >
          <PackageOpen size={14} />
          Receive Goods
        </Button>

        <Button
          type="button"
          size="sm"
          disabled={isFullyReceived}
          className="rounded-l-none border-l border-blue-500 px-3"
        >
          <ChevronDown size={14} />
        </Button>
      </div>
    </div>
  );
};

export default PurchaseActions;
