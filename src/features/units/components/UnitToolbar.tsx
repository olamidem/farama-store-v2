import { Search } from "lucide-react";
import Select from "../../../components/ui/Select";

interface UnitToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
  scope: string;
  onScopeChange: (value: string) => void;
}

export const UnitToolbar = ({
  search,
  onSearchChange,
  status,
  onStatusChange,
  scope,
  onScopeChange,
}: UnitToolbarProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      {/* Search and Filters */}
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        {/* Search bar */}
        <div className="relative w-full sm:w-64">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search units..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        {/* Status Filter */}
        <div className="w-full sm:w-44">
          <Select
            placeholder="All Statuses"
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />
        </div>

        {/* Scope Filter */}
        <div className="w-full sm:w-44">
          <Select
            placeholder="All Scopes"
            value={scope}
            onChange={(e) => onScopeChange(e.target.value)}
            options={[
              { label: "System", value: "system" },
              { label: "Custom", value: "custom" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default UnitToolbar;
