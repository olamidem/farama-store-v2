import { X } from "lucide-react";
import Modal from "../../../components/ui/Modal";
import type { Product } from "../types/product";


interface BulkUpdateModalProps {
  open: boolean;
  onClose: () => void;
  selectedProducts: Product[];
}

const BulkUpdateModal = ({
  open,
  onClose,
  selectedProducts,
}: BulkUpdateModalProps) => {
 
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Bulk Update Prices (${selectedProducts.length || 0} ${selectedProducts.length === 1 ? "item" : "items"})`}
    >
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto font-sans">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden my-8">
          {/* Header */}
          <div className="bg-slate-50 px-4 py-3.5 border-b border-slate-100 flex justify-between items-center">
            <span className="font-bold text-sm text-slate-800 uppercase tracking-wider">
              Bulk Update Prices (0 items)
            </span>
            <button className="text-slate-400 hover:text-slate-600 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4 text-xs">
            {/* Target Price */}
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase">
                Apply Update To
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  className="py-2 px-1.5 border rounded-lg font-bold text-center transition-colors text-[10px] cursor-pointer border-blue-600 bg-blue-50 text-blue-700"
                >
                  Selling Price
                </button>
                <button
                  type="button"
                  className="py-2 px-1.5 border rounded-lg font-bold text-center transition-colors text-[10px] cursor-pointer border-slate-200 text-slate-600 hover:bg-slate-55"
                >
                  Cost Price
                </button>
                <button
                  type="button"
                  className="py-2 px-1.5 border rounded-lg font-bold text-center transition-colors text-[10px] cursor-pointer border-slate-200 text-slate-600 hover:bg-slate-55"
                >
                  Both Prices
                </button>
              </div>
            </div>

            {/* Update Type & Action */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-slate-400 uppercase">
                  Method
                </label>
                <div className="flex rounded-lg border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    className="flex-1 py-2 font-bold text-center transition-colors text-[10px] cursor-pointer bg-blue-600 text-white"
                  >
                    Percent (%)
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-2 font-bold text-center transition-colors text-[10px] cursor-pointer bg-white text-slate-600 hover:bg-slate-50"
                  >
                    Fixed (₦)
                  </button>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-slate-400 uppercase">
                  Action
                </label>
                <div className="flex rounded-lg border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    className="flex-1 py-2 font-bold text-center transition-colors text-[10px] cursor-pointer bg-emerald-600 text-white"
                  >
                    Increase (+)
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-2 font-bold text-center transition-colors text-[10px] cursor-pointer bg-white text-slate-600 hover:bg-slate-50"
                  >
                    Decrease (-)
                  </button>
                </div>
              </div>
            </div>

            {/* Value Input */}
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase">
                Percentage Value (%)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">
                  %
                </span>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  placeholder="e.g. 10"
                  className="w-full py-2 px-3 pl-8 border border-slate-200 rounded-lg focus:outline-none font-bold text-slate-800 text-xs"
                />
              </div>
            </div>

            {/* Live Preview Container */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-bold text-slate-400 uppercase">
                Live Preview (Up to 4 items)
              </label>
              <div className="border border-slate-100 rounded-lg divide-y divide-slate-100 bg-slate-50/50 max-h-40 overflow-y-auto">
                {/* Static example row */}
                <div className="p-2 flex justify-between items-center text-[10px]">
                  <div className="font-semibold text-slate-700 truncate max-w-[180px]">
                    Sample Product Name
                  </div>
                  <div className="text-right space-y-0.5">
                    <div className="text-slate-600">
                      Retail:{" "}
                      <span className="line-through text-slate-400">₦0</span> ➔{" "}
                      <span className="font-bold text-slate-900">₦0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors cursor-pointer text-center"
              >
                Cancel
              </button>
              <button
                type="button"
                className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-sm cursor-pointer text-center"
              >
                Apply Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BulkUpdateModal;
