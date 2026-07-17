import type { ProductUnit } from "../types/productUnit";
import type { Unit } from "../../../units/types/unit";
import { Scale, Layers } from "lucide-react";

interface ProductUnitSummaryProps {
  productUnits: ProductUnit[];
  generalUnits: Unit[];
}

export const ProductUnitSummary = ({ productUnits, generalUnits }: ProductUnitSummaryProps) => {
  const activeUnits = productUnits.filter(pu => pu.is_active);

  if (activeUnits.length === 0) {
    return (
      <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100 flex items-center gap-2 text-slate-500 text-xs">
        <Scale className="h-4 w-4 text-slate-400" />
        <span>No extra selling units configured. Selling only in base units.</span>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 rounded-xl p-3.5 border border-slate-100 space-y-2">
      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
        <Layers className="h-3 w-3 text-blue-500" />
        Configured Selling Units
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {activeUnits.map(pu => {
          const unit = generalUnits.find(u => u.id === pu.unit_id);
          const name = unit ? `${unit.name} (${unit.symbol})` : "Pack";
          return (
            <span
              key={pu.id}
              className="inline-flex items-center px-2 py-0.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100"
              title={`${pu.conversion_factor}x conversion`}
            >
              {name} ({pu.conversion_factor}x)
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductUnitSummary;
