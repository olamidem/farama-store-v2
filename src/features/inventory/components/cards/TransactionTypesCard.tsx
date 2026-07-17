import {
  ArrowDownLeft,
  ArrowUpRight,
  PackageCheck,
  TriangleAlert,
} from "lucide-react";

const transactionTypes = [
  {
    label: "Purchase",
    icon: ArrowDownLeft,
    color: "text-green-600",
  },
  {
    label: "Sale",
    icon: ArrowUpRight,
    color: "text-red-600",
  },
  {
    label: "Adjustment",
    icon: PackageCheck,
    color: "text-blue-600",
  },
  {
    label: "Damage",
    icon: TriangleAlert,
    color: "text-amber-600",
  },
];

export default function TransactionTypesCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold">
        Transaction Types
      </h2>
      <div className="mt-5 space-y-4">
        {transactionTypes.map((type) => {
          const Icon = type.icon;
          return (
            <div
              key={type.label}
              className="flex items-center gap-3"
            >
              <Icon
                size={18}
                className={type.color}
              />
              <span className="text-sm font-medium text-slate-700">
                {type.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}