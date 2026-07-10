import { cn } from "../../../utils/cn";

interface SegmentedOption<T extends string> {
  label: string;
  value: T;
}

interface SegmentedControlProps<T extends string> {
  label: string;
  value: T;
  options: SegmentedOption<T>[];
  onChange: (value: T) => void;
  activeColor?: "blue" | "green" | "red";
  columns?: number;
}

const activeStyles = {
  blue: "bg-blue-600 text-white border-blue-600",
  green: "bg-emerald-600 text-white border-emerald-600",
  red: "bg-red-600 text-white border-red-600",
};

const SegmentedControl = <T extends string>({
  label,
  value,
  options,
  onChange,
  activeColor = "blue",
  columns = 3,
}: SegmentedControlProps<T>) => {
  return (
    <div className="space-y-2">
      <label className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </label>

      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        }}
      >
        {options.map((option) => {
          const selected = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                "rounded-lg border py-3 px-4 text-xs font-bold transition-all duration-200 cursor-pointer",

                selected
                  ? activeStyles[activeColor]
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SegmentedControl;
