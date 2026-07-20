import { HelpCircle, ExternalLink } from "lucide-react";

export const InventoryHelpCard = () => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-blue-50/60 border border-blue-100 p-2.5 text-blue-600 flex items-center justify-center h-10 w-10">
          <HelpCircle size={18} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">Need Help?</h4>
          <p className="text-xs font-semibold text-slate-400 mt-0.5">
            Learn how inventory works.
          </p>
        </div>
      </div>

      <div className="pt-1">
        <a
          href="/doc/inventory-guide"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 px-5 py-2.5 text-xs font-bold text-indigo-600 transition cursor-pointer"
        >
          <span>View Documentation</span>
          <ExternalLink size={13} className="text-indigo-500" />
        </a>
      </div>
    </div>
  );
};

export default InventoryHelpCard;
