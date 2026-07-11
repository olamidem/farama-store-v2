import {  Info, Layers, Package } from "lucide-react";

import Badge from "../../../components/ui/Badge";
import { formatCurrency } from "../../../utils/format";
import type { Category } from "../../categories/types/category";
import type { Product } from "../types/product";

interface ProductDeleteSummaryProps {
  product: Product;
  categories: Category[];
}

const ProductDeleteSummary = ({
  product,
  categories,
}: ProductDeleteSummaryProps) => {
  const category = categories.find((c) => c.id === product.category_id);
  const lowStock = product.stock <= product.min_stock_alert;


  return (
    <div className="space-y-5 text-xs font-sans">
      {/* Warning Alert Banner */}

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800 text-xs flex gap-2.5 items-start">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-amber-900">
            Important Catalog Safety Rule
          </p>
          <p className="leading-relaxed">
            You are preparing to delete a live item from your active inventory
            database. Please review its stock levels and pricing rules to
            prevent sales disruptions.
          </p>
        </div>
      </div>

      {/* Main Metadata Summary Card */}
      <div className="border border-slate-150 rounded-xl divide-y divide-slate-100 overflow-hidden">
        {/* Card Header Row */}
        <div className="bg-slate-50/50 p-3.5 flex items-start gap-3">
          <div className="p-2.5 bg-white rounded-xl border border-slate-150 text-slate-500 shadow-xs">
            <Package className="w-6 h-6 text-slate-500" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm leading-snug">
              {product.name}
            </h4>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">
              ID: {product.id} • Barcode: {product.barcode || "No Barcode"}
            </p>
          </div>
        </div>

        {/* Detailed Specs Grid */}
        <div className="p-4 grid grid-cols-2 gap-4 text-xs">
          {/* Category block */}
          <div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Category
            </span>
            <span className="font-semibold text-slate-800 flex items-center gap-1.5 mt-1">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              {category?.name ?? "Uncategorized"}
            </span>
          </div>

          {/* Stock Block */}
          <div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Current Stock
            </span>
            <div className="mt-1 flex items-center gap-1.5">
              <span
                className={`font-mono font-bold ${lowStock ? "text-rose-600" : "text-slate-800"}`}
              >
                {product.stock} Units
              </span>
              {lowStock && (
                <Badge
                  variant="danger"
                  className="ml-1 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide"
                >
                  Low
                </Badge>
              )}
            </div>
          </div>

          {/* Cost Price Block */}
          <div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Cost Price (Wholesale)
            </span>
            <span className="font-mono font-semibold text-slate-700 mt-1 inline-block">
              {formatCurrency(product.cost_price)}
            </span>
          </div>

          {/* Selling Price Block */}
          <div>
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Selling Price (Unit)
            </span>
            <span className="font-mono font-extrabold text-slate-900 mt-1 inline-block">
              {formatCurrency(product.selling_price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteSummary;
