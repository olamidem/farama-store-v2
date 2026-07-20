import { useQuery } from "@tanstack/react-query";
import { getSuppliers } from "../services/supplier.service";
import { getPurchases } from "../../purchases/services/purchase.service";
import { parseSupplierRemarks } from "../utils/supplierHelpers";
import type { SupplierStatistics } from "../types/supplierStatistics";

export const useSupplierStatistics = () => {
  const suppliersQuery = useQuery({
    queryKey: ["suppliers", "list-for-stats"],
    queryFn: getSuppliers,
  });

  const purchasesQuery = useQuery({
    queryKey: ["purchases", "list-for-stats"],
    queryFn: getPurchases,
  });

  const isLoading = suppliersQuery.isLoading || purchasesQuery.isLoading;
  const isError = suppliersQuery.isError || purchasesQuery.isError;
  const error = suppliersQuery.error || purchasesQuery.error;

  const statistics: SupplierStatistics = {
    totalSuppliersCount: 0,
    activeSuppliersCount: 0,
    totalSpentAllTime: 0,
    totalPendingOrders: 0,
  };

  if (suppliersQuery.data && purchasesQuery.data) {
    const suppliers = suppliersQuery.data;
    const purchases = purchasesQuery.data;

    statistics.totalSuppliersCount = suppliers.length;

    // Count active suppliers based on parsed status from remarks
    statistics.activeSuppliersCount = suppliers.filter((s) => {
      const parsed = parseSupplierRemarks(s.remarks);
      return parsed.status === "Active";
    }).length;

    // Total Spent across all purchases in the store
    statistics.totalSpentAllTime = purchases.reduce(
      (sum, p) => sum + (p.total_amount || 0),
      0,
    );

    // Total Pending Orders (e.g. status is PENDING or PARTIALLY_RECEIVED)
    statistics.totalPendingOrders = purchases.filter(
      (p) => p.status === "PENDING" || p.status === "PARTIALLY_RECEIVED",
    ).length;
  }

  return {
    data: statistics,
    isLoading,
    isError,
    error,
  };
};
