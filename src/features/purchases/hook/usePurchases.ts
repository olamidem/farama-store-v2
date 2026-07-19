import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../lib/queryKey";

import {
  getPurchase,
  getPurchases,
  getPurchaseStats,
} from "../services/purchase.service";

export function usePurchases() {
  return useQuery({
    queryKey: QUERY_KEYS.purchases,
    queryFn: getPurchases,
  });
}

export function usePurchase(id: string) {
  return useQuery({
    queryKey: QUERY_KEYS.purchase(id),
    queryFn: () => getPurchase(id),
    enabled: !!id,
  });
}

export function usePurchaseStats() {
  return useQuery({
    queryKey: [...QUERY_KEYS.purchases, "stats"],
    queryFn: getPurchaseStats,
  });
}
