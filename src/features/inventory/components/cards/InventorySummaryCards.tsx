import { Boxes, AlertTriangle, Package, Wallet } from "lucide-react";

const summaryCards = [
  {
    title: "Total Products",
    value: "326",
    icon: Boxes,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Low Stock",
    value: "14",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Total Stock",
    value: "18,240",
    icon: Package,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Inventory Value",
    value: "€54,320",
    icon: Wallet,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function InventorySummaryCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {summaryCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {card.title}
                </p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  {card.value}
                </h3>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
              >
                <Icon size={22} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
