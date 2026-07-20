import { History } from "lucide-react";
import type { SupplierWithStats } from "../../types/supplier";
import SupplierTimeline from "./SupplierTimeline";

interface ActivityTabProps {
  supplier: SupplierWithStats;
}

export default function ActivityTab({ supplier }: ActivityTabProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-1.5 text-slate-800">
        <History className="h-4.5 w-4.5 text-slate-400" />
        <h4 className="text-sm font-bold">Contact & Activity History</h4>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-2xs">
        <SupplierTimeline supplier={supplier} />
      </div>
    </div>
  );
}
