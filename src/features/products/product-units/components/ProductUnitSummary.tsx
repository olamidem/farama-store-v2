import { Package, ArrowRightLeft, TrendingUp } from "lucide-react";
import type { Product } from "../../types/product";
import type { Unit } from "../../../units/types/unit";
import { formatCurrency } from "../../../../utils/formatCurrenty";

interface ProductUnitSummaryProps {
  product: Product;
  baseUnit?: Unit;
  selectedUnit?: Unit;
  conversionFactor: number;
  costPrice: number;
  sellingPrice: number;
}

const ProductUnitSummary = ({
  product,
  selectedUnit,
  conversionFactor,
  costPrice,
  sellingPrice,
}: ProductUnitSummaryProps) => {
  const factor = conversionFactor || 1;
  const baseCost = costPrice / factor;
  const baseSelling = sellingPrice / factor;
  const profit = sellingPrice - costPrice;
  const margin =
    sellingPrice > 0
      ? (profit / sellingPrice) * 100
      : 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="mb-5 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-blue-600" />

        <div>
          <h3 className="font-semibold text-slate-900">
            Pricing Summary
          </h3>

          <p className="text-xs text-slate-500">
            Review your selling unit before saving.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {/* LEFT */}

        <div className="space-y-4">

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">
              Base Unit
            </span>

            <span className="font-medium">
              {product.base_unit_id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">
              Selling Unit
            </span>

            <span className="font-medium">
              {selectedUnit?.name ?? "-"}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">

            <div className="flex items-center gap-2">
              <ArrowRightLeft className="h-4 w-4 text-slate-500" />

              <span className="text-sm">
                Conversion
              </span>
            </div>

            <span className="font-semibold">
              1 {selectedUnit?.symbol ?? "-"} = {factor}
            </span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-3">

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">
              Unit Cost
            </span>

            <span className="font-semibold">
              {formatCurrency(costPrice)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">
              Unit Selling
            </span>

            <span className="font-semibold">
              {formatCurrency(sellingPrice)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">
              Profit
            </span>

            <span className="font-semibold text-green-600">
              {formatCurrency(profit)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-slate-500">
              Margin
            </span>

            <span
              className={`font-semibold ${
                margin >= 30
                  ? "text-green-600"
                  : margin >= 10
                    ? "text-amber-600"
                    : "text-red-600"
              }`}
            >
              {margin.toFixed(1)}%
            </span>
          </div>

        </div>

      </div>

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">

        <div className="flex items-start gap-3">

          <Package className="mt-0.5 h-5 w-5 text-blue-600" />

          <div>

            <p className="text-sm font-medium text-slate-800">
              Base Unit Pricing
            </p>

            <p className="mt-1 text-xs text-slate-600">
              Cost per base unit:
              <span className="ml-1 font-semibold">
                {formatCurrency(baseCost)}
              </span>
            </p>

            <p className="text-xs text-slate-600">
              Selling per base unit:
              <span className="ml-1 font-semibold">
                {formatCurrency(baseSelling)}
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductUnitSummary;