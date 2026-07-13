import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { cn } from "../../../utils/cn";

interface SortableHeaderProps<T extends string> {
  label: string;
  column: T;
  currentSort: T;
  ascending: boolean;
  onSort: (column: T) => void;
}

const SortableHeader = <T extends string>({
  label,
  column,
  currentSort,
  ascending,
  onSort,
}: SortableHeaderProps<T>) => {
  const active = currentSort === column;

  return (
    <button
      type="button"
      onClick={() => onSort(column)}
      className="group flex items-center gap-2 font-semibold text-slate-700 transition-colors hover:text-slate-900"
    >
      <span>{label}</span>

      {active ? (
        ascending ? (
          <ArrowUp size={15} className="text-blue-600 transition-transform" />
        ) : (
          <ArrowDown size={15} className="text-blue-600 transition-transform" />
        )
      ) : (
        <ArrowUpDown
          size={15}
          className={cn(
            "text-slate-400 transition-opacity",
            "opacity-0 group-hover:opacity-100",
          )}
        />
      )}
    </button>
  );
};

export default SortableHeader;
