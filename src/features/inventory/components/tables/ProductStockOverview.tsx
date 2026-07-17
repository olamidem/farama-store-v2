import DataTable from "../../../../components/table/DataTable";
import { productStockColumns } from "./productStockColumns";
import { productStockOverview } from "../../mock/inventory.mock";

export default function ProductStockOverview() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-bold">Product Stock Overview</h2>

        <p className="text-sm text-slate-500">Current inventory levels</p>
      </div>

      <DataTable data={productStockOverview} columns={productStockColumns} />
    </div>
  );
}
