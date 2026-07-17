import { Plus, PackagePlus } from "lucide-react";
import Button from "../../../../components/ui/Button";

export default function StockAdjustmentCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-violet-500 to-purple-600 p-6 text-white shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
        <PackagePlus size={22} />
      </div>

      <h2 className="text-lg font-bold">Stock Adjustment</h2>
      <p className="mt-2 text-sm text-violet-100">
        Create inventory adjustments for damaged, returned or newly received
        products.
      </p>

      <Button className="mt-6 w-full bg-white text-violet-700 hover:bg-violet-50">
        <Plus size={16} />
        New Adjustment
      </Button>
    </div>
  );
}
