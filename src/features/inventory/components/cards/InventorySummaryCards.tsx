import { Package, AlertTriangle, Layers, Banknote } from "lucide-react";
import type { InventorySummary } from "../../types/inventory";
import MiniLiveChart from "./MiniLiveChart";

interface InventorySummaryCardsProps {
  summary?: InventorySummary;
  isLoading?: boolean;
}

export const InventorySummaryCards = ({
  summary = {
    totalProducts: 326,
    lowStockItems: 14,
    totalStockAllUnits: 18240,
    totalInventoryValue: 5432870.5,
  },
  isLoading = false,
}: InventorySummaryCardsProps) => {
  const formatCurrency = (val: number) => {
    return (
      "₦" +
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(val)
    );
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat("en-US").format(val);
  };

  const cards = [
    {
      title: "TOTAL PRODUCTS",
      value: formatNumber(summary.totalProducts),
      numericValue: summary.totalProducts,
      subtitle: "All products",
      icon: Package,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
      sparklineColor: "#4f46e5",
    },
    {
      title: "LOW STOCK ITEMS",
      value: formatNumber(summary.lowStockItems),
      numericValue: summary.lowStockItems,
      subtitle: "Need attention",
      icon: AlertTriangle,
      iconColor: "text-amber-600 bg-amber-50 border-amber-100",
      sparklineColor: "#d97706",
    },
    {
      title: "TOTAL STOCK (ALL UNITS)",
      value: formatNumber(summary.totalStockAllUnits),
      numericValue: summary.totalStockAllUnits,
      subtitle: "All units in stock",
      icon: Layers,
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
      sparklineColor: "#059669",
    },
    {
      title: "INVENTORY VALUE",
      value: formatCurrency(summary.totalInventoryValue),
      numericValue: summary.totalInventoryValue,
      subtitle: "Total inventory value",
      icon: Banknote,
      iconColor: "text-blue-600 bg-blue-50 border-blue-100",
      sparklineColor: "#2563eb",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 rounded bg-slate-100" />
              <div className="h-10 w-10 rounded-xl bg-slate-100" />
            </div>
            <div className="mt-4 h-8 w-32 rounded bg-slate-100" />
            <div className="mt-2 h-4 w-16 rounded bg-slate-100" />
            <div className="mt-4 h-10 w-full rounded bg-slate-50" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                    {card.title}
                  </span>
                  <div className="mt-1">
                    <h3 className="text-3xl font-bold text-slate-900 tracking-tight leading-none">
                      {card.value}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 block mt-2">
                      {card.subtitle}
                    </span>
                  </div>
                </div>
                <div
                  className={`rounded-full p-2.5 border shrink-0 flex items-center justify-center h-12 w-12 ${card.iconColor}`}
                >
                  <Icon size={20} />
                </div>
              </div>
            </div>

            {/* Live Chart component */}
            <MiniLiveChart
              title={card.title}
              currentValue={card.numericValue}
              color={card.sparklineColor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InventorySummaryCards;
