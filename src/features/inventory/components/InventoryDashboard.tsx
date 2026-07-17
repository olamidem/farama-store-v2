import InventorySummaryCards from "./cards/InventorySummaryCards";
import InventoryTransactionsTable from "./tables/InventoryTransactionsTable";
import InventoryTimeline from "./timeline/InventoryTimeline";
import StockAdjustmentCard from "./cards/StockAdjustmentCard";
import TransactionTypesCard from "./cards/TransactionTypesCard";
import InventoryHelpCard from "./cards/InventoryHelpCard";
import ProductStockOverview from "./timeline/ProductStockOverview";

export default function InventoryDashboard() {
  return (
    <div className="space-y-6">
      <InventorySummaryCards />

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3 space-y-6">
          <InventoryTransactionsTable />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProductStockOverview />

            <InventoryTimeline />
          </div>
        </div>

        <div className="space-y-6">
          <StockAdjustmentCard />

          <TransactionTypesCard />

          <InventoryHelpCard />
        </div>
      </div>
    </div>
  );
}
