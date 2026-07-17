import { Plus, Boxes } from "lucide-react";
import Button from "../../../../components/ui/Button";

interface ProductUnitsHeaderProps {
  onAddClick: () => void;
}

export const ProductUnitsHeader = ({ onAddClick }: ProductUnitsHeaderProps) => {
  return (
    <div
      id="product-units-header"
      className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200"
    >
      <div className="space-y-1">
        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
          <Boxes className="h-4.5 w-4.5 text-blue-500" />
          Selling Units
        </h3>
        <p className="text-xs text-slate-500">
          Manage different selling units and pricing for this product
        </p>
      </div>
      <Button
        id="add-selling-unit-btn"
        type="button"
        size="sm"
        onClick={onAddClick}
        className="shrink-0 flex items-center gap-1.5 font-semibold"
      >
        <Plus size={15} />
        <span>Add Selling Unit</span>
      </Button>
    </div>
  );
};
