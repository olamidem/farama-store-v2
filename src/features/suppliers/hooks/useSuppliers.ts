import { useQuery } from "@tanstack/react-query";
import { getSuppliers } from "../services/supplier.service";
import { getPurchases } from "../../purchases/services/purchase.service";
import { computeSupplierStats } from "../utils/supplierHelpers";
import type { SupplierWithStats } from "../types/supplier";

export const SUPPLIER_QUERY_KEYS = {
  all: ["suppliers"] as const,
  lists: () => [...SUPPLIER_QUERY_KEYS.all, "list"] as const,
  details: (id: string) => [...SUPPLIER_QUERY_KEYS.all, "detail", id] as const,
  purchases: (id: string) =>
    [...SUPPLIER_QUERY_KEYS.all, "purchases", id] as const,
  statistics: () => [...SUPPLIER_QUERY_KEYS.all, "statistics"] as const,
};

export const useSuppliers = () => {
  const suppliersQuery = useQuery({
    queryKey: SUPPLIER_QUERY_KEYS.lists(),
    queryFn: getSuppliers,
  });

  const purchasesQuery = useQuery({
    queryKey: ["purchases", "list-for-suppliers"],
    queryFn: getPurchases,
  });

  const isLoading = suppliersQuery.isLoading || purchasesQuery.isLoading;
  const isError = suppliersQuery.isError || purchasesQuery.isError;
  const error = suppliersQuery.error || purchasesQuery.error;

  const data: SupplierWithStats[] = [];

  if (suppliersQuery.data && purchasesQuery.data) {
    const purchases = purchasesQuery.data;
    suppliersQuery.data.forEach((supplier) => {
      data.push(computeSupplierStats(supplier, purchases));
    });
  } else if (suppliersQuery.data) {
    // If purchases are not loaded yet, compute with empty list
    suppliersQuery.data.forEach((supplier) => {
      data.push(computeSupplierStats(supplier, []));
    });
  }

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: async () => {
      await Promise.all([suppliersQuery.refetch(), purchasesQuery.refetch()]);
    },
  };
};
