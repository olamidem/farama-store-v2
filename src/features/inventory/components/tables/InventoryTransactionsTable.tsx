import DataTable from "../../../../components/table/DataTable";
import { inventoryColumns } from "./inventoryColumns";
import { inventoryTransactions } from "../../mock/inventory.mock";

export default function InventoryTransactionsTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">Inventory Movement Journal</h2>
          <p className="text-sm text-slate-500">Latest inventory movements</p>
        </div>
      </div>
      <DataTable data={inventoryTransactions} columns={inventoryColumns} />
    </div>
  );
}
