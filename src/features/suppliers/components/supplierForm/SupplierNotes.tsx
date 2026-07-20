import type { UseFormRegister } from "react-hook-form";
import type { SupplierFormData } from "../../validations/supplierSchema";

interface SupplierNotesProps {
  register: UseFormRegister<SupplierFormData>;
}

export default function SupplierNotes({ register }: SupplierNotesProps) {
  return (
    <div className="space-y-4 text-left">
      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-50 pb-1.5">
        Additional Remarks & Notes
      </h3>

      <div className="space-y-1.5">
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Remarks / Description
        </label>
        <textarea
          rows={3}
          placeholder="e.g. Primary food and beverage provider, specializes in organic imports..."
          {...register("remarks_text")}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-hidden focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}
