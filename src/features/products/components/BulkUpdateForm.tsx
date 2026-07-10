import type { BulkUpdateMethod, BulkUpdateOperation, BulkUpdateType } from "../../../utils/calculateBulkPrice";
import { cn } from "../../../utils/cn";


interface BulkUpdateFormProps {
  updateType: BulkUpdateType;
  method: BulkUpdateMethod;
  operation: BulkUpdateOperation;
  amount: string;
  onUpdateTypeChange: (value: BulkUpdateType) => void;
  onMethodChange: (value: BulkUpdateMethod) => void;
  onOperationChange: (value: BulkUpdateOperation) => void;
  onAmountChange: (value: string) => void;
}

const BulkUpdateForm = ({
  updateType,
  method,
  operation,
  amount,
  onUpdateTypeChange,
  onMethodChange,
  onOperationChange,
  onAmountChange,
}: BulkUpdateFormProps) => {
  return (
    <div className="space-y-5">
      {/* Apply Update To */}
      <div className="space-y-1">
        <label className="block text-[10px] font-bold uppercase text-slate-400">
          Apply Update To
        </label>

        <div className="grid grid-cols-3 gap-2">
          {[
            {
              label: "Selling Price",
              value: "selling",
            },
            {
              label: "Cost Price",
              value: "cost",
            },
            {
              label: "Both Prices",
              value: "both",
            },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => onUpdateTypeChange(item.value as BulkUpdateType)}
              className={cn(
                "rounded-lg border py-2 px-2 text-[10px] font-bold transition-colors",

                updateType === item.value
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Method + Action */}

      <div className="grid grid-cols-2 gap-4">
        {/* Method */}

        <div className="space-y-1">
          <label className="block text-[10px] font-bold uppercase text-slate-400">
            Method
          </label>

          <div className="flex overflow-hidden rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => onMethodChange("percentage")}
              className={cn(
                "flex-1 py-2 text-[10px] font-bold transition-colors",

                method === "percentage"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50",
              )}
            >
              Percent (%)
            </button>

            <button
              type="button"
              onClick={() => onMethodChange("fixed")}
              className={cn(
                "flex-1 py-2 text-[10px] font-bold transition-colors",

                method === "fixed"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50",
              )}
            >
              Fixed (₦)
            </button>
          </div>
        </div>

        {/* Action */}

        <div className="space-y-1">
          <label className="block text-[10px] font-bold uppercase text-slate-400">
            Action
          </label>

          <div className="flex overflow-hidden rounded-lg border border-slate-200">
            <button
              type="button"
              onClick={() => onOperationChange("increase")}
              className={cn(
                "flex-1 py-2 text-[10px] font-bold transition-colors",

                operation === "increase"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50",
              )}
            >
              Increase (+)
            </button>

            <button
              type="button"
              onClick={() => onOperationChange("decrease")}
              className={cn(
                "flex-1 py-2 text-[10px] font-bold transition-colors",
                operation === "decrease"
                  ? "bg-red-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50",
              )}
            >
              Decrease (-)
            </button>
          </div>
        </div>
      </div>

      {/* Amount */}

      <div className="space-y-1">
        <label className="block text-[10px] font-bold uppercase text-slate-400">
          {method === "percentage"
            ? "Percentage Value (%)"
            : "Fixed Amount (₦)"}
        </label>

        <div className="relative">
          {method === "percentage" ? (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              %
            </span>
          ) : (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">
              ₦
            </span>
          )}

          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            placeholder={method === "percentage" ? "e.g. 10" : "e.g. 500"}
            className="w-full rounded-lg border border-slate-200 py-2 pl-8 pr-3 text-xs font-bold focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default BulkUpdateForm;
