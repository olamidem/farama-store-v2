export const INVENTORY_TRANSACTION_TYPE = {
  RECEIVE: "RECEIVE",
  SALE: "SALE",
  ADJUSTMENT: "ADJUSTMENT",
  RETURN: "RETURN",
} as const;

export type InventoryTransactionType =
  (typeof INVENTORY_TRANSACTION_TYPE)[keyof typeof INVENTORY_TRANSACTION_TYPE];