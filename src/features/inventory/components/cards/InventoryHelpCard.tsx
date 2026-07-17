import { CircleHelp } from "lucide-react";

export default function InventoryHelpCard() {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
      <div className="flex items-center gap-3">
        <CircleHelp className="text-blue-600" size={22} />
        <h2 className="font-bold text-blue-900">Inventory Tips</h2>
      </div>

      <ul className="mt-4 space-y-3 text-sm text-blue-800">
        <li>• Review low-stock products daily.</li>
        <li>• Record every stock movement.</li>
        <li>• Perform regular stock counts.</li>
        <li>• Investigate unusual adjustments.</li>
      </ul>
    </div>
  );
}
