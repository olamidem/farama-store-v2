import type { UseFormRegister } from "react-hook-form";
import type { SupplierFormData } from "../../validations/supplierSchema";

interface SupplierAddressInformationProps {
  register: UseFormRegister<SupplierFormData>;
}

export default function SupplierAddressInformation({
  register,
}: SupplierAddressInformationProps) {
  return (
    <div className="space-y-4 text-left">
 
        {/* Physical Address */}
        <div className="space-y-1.5">
          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            Physical Address
          </label>
          <input
            type="text"
            placeholder="e.g. 123 Trade St, Manila, Philippines"
            {...register("address")}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-hidden focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
      </div>
  );
}
