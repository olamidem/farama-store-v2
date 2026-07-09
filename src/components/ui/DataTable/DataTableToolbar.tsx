import type { ReactNode } from "react";

interface DataTableToolbarProps {
  left?: ReactNode;
  right?: ReactNode;
}

const DataTableToolbar = ({ left, right }: DataTableToolbarProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Left */}
      <div className="flex flex-1 items-center">
        <div className="w-full max-w-8xl">{left}</div>
      </div>

      {/* Right */}
      <div className="flex flex-wrap items-center gap-3">{right}</div>
    </div>
  );
};

export default DataTableToolbar;
