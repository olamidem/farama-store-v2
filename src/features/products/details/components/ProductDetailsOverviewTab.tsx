import { Pencil, Sliders, Copy, Barcode, Trash2, Plus } from "lucide-react";
import type { Product } from "../../types/product";
import { useUnits } from "../../../units/hooks/useUnits";

interface ProductDetailsOverviewTabProps {
  product: Product;
  categoryName?: string;
  onEdit: () => void;
  onAdjustStock: () => void;
  onDuplicate: () => void;
  onPrintBarcode: () => void;
  onArchive: () => void;
}

export const ProductDetailsOverviewTab = ({
  product,
  categoryName = "General",
  onEdit,
  onAdjustStock,
  onDuplicate,
  onPrintBarcode,
  onArchive,
}: ProductDetailsOverviewTabProps) => {
  const { data: units = [] } = useUnits();
  const baseUnit = units.find((u) => u.id === product.base_unit_id);
  const baseUnitDisplay = baseUnit ? `${baseUnit.name} (${baseUnit.symbol})` : "Piece";

  // Generate smart dynamic values based on category or name
  const subcategory = categoryName === "Beverages" ? "Soft Drinks" : "General Inventory";
  const supplier = categoryName === "Beverages" ? "Coca-Cola Beverages Nigeria" : "Farama Main Supplier Ltd";
  const tags = categoryName === "Beverages" 
    ? ["cold-drink", "soft-drink", "beverage"] 
    : [categoryName.toLowerCase(), "retail", "stock"];

  return (
    <div className="space-y-6">
      {/* Product Information Table */}
      <div>
        <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
          Product Information
        </h3>
        
        <div className="divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
          <div className="grid grid-cols-3 p-3 text-sm">
            <span className="font-semibold text-slate-500">Category</span>
            <span className="col-span-2 font-bold text-slate-800">{categoryName}</span>
          </div>

          <div className="grid grid-cols-3 p-3 text-sm">
            <span className="font-semibold text-slate-500">Subcategory</span>
            <span className="col-span-2 font-bold text-slate-800">{subcategory}</span>
          </div>

          <div className="grid grid-cols-3 p-3 text-sm">
            <span className="font-semibold text-slate-500">Unit</span>
            <span className="col-span-2 font-bold text-slate-800">{baseUnitDisplay}</span>
          </div>

          <div className="grid grid-cols-3 p-3 text-sm">
            <span className="font-semibold text-slate-500">Min. Stock Alert</span>
            <span className="col-span-2 font-bold text-rose-600 font-mono">
              {product.min_stock_alert || 0} {baseUnit ? baseUnit.symbol : "units"}
            </span>
          </div>

          <div className="grid grid-cols-3 p-3 text-sm">
            <span className="font-semibold text-slate-500">Status</span>
            <span className="col-span-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-200 text-emerald-700">
                Active
              </span>
            </span>
          </div>

          <div className="grid grid-cols-3 p-3 text-sm">
            <span className="font-semibold text-slate-500">Tax Rate</span>
            <span className="col-span-2 font-bold text-slate-800">0%</span>
          </div>

          <div className="grid grid-cols-3 p-3 text-sm">
            <span className="font-semibold text-slate-500">Supplier</span>
            <span className="col-span-2 font-bold text-slate-800">{supplier}</span>
          </div>

          <div className="grid grid-cols-3 p-3 text-sm items-center">
            <span className="font-semibold text-slate-500">Tags</span>
            <div className="col-span-2 flex flex-wrap items-center gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-bold">
                  {tag}
                </span>
              ))}
              <button className="h-5 w-5 rounded border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-400 hover:text-slate-700 transition">
                <Plus size={10} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div>
        <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">
          Description
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed bg-slate-50/20 p-3 rounded-lg border border-slate-100">
          {product.description || "No custom description available for this item."}
          <span className="block mt-1 font-medium text-sm text-slate-400">
            Perfect with meals or on the go.
          </span>
        </p>
      </div>

      {/* Quick Actions Section */}
      <div className="pt-2">
        <h3 className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
          Quick Actions
        </h3>
        
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onEdit}
            className="flex items-center gap-1.5 h-10 px-4 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition shadow-sm"
          >
            <Pencil size={13} />
            <span>Edit Product</span>
          </button>

          <button
            onClick={onAdjustStock}
            className="flex items-center gap-1.5 h-10 px-4 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition shadow-sm"
          >
            <Sliders size={13} />
            <span>Adjust Stock</span>
          </button>

          <button
            onClick={onDuplicate}
            className="flex items-center gap-1.5 h-10 px-4 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition shadow-sm"
          >
            <Copy size={13} />
            <span>Duplicate Product</span>
          </button>

          <button
            onClick={onPrintBarcode}
            className="flex items-center gap-1.5 h-10 px-4 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition shadow-sm"
          >
            <Barcode size={13} />
            <span>Print Barcode Label</span>
          </button>

          <button
            onClick={onArchive}
            className="flex items-center gap-1.5 h-10 px-4 rounded-lg border border-rose-200 bg-rose-50/10 text-sm font-bold text-rose-600 hover:bg-rose-50 transition shadow-sm"
          >
            <Trash2 size={13} />
            <span>Archive Product</span>
          </button>
        </div>
      </div>
    </div>
  );
};
