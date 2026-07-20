import { useQuery } from "@tanstack/react-query";
import { getSupplierPurchases } from "../services/supplier.service";
import { SUPPLIER_QUERY_KEYS } from "./useSuppliers";

export const useSupplierPurchases = (supplierId: string | undefined) => {
  return useQuery({
    queryKey: supplierId
      ? SUPPLIER_QUERY_KEYS.purchases(supplierId)
      : ["suppliers", "purchases", "none"],
    queryFn: () =>
      supplierId ? getSupplierPurchases(supplierId) : Promise.resolve([]),
    enabled: !!supplierId,
  });
};
