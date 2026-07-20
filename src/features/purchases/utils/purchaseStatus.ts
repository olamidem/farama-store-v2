import { PURCHASE_STATUS, type PurchaseStatus } from "../constant/purchase.constants";
import { PURCHASE_STATUS_STYLES } from "../constant/purchaseStatusStyles";
import type { Purchase } from "../types/purchase";

const STATUS_TEXT: Record<PurchaseStatus, string> = {
  [PURCHASE_STATUS.PENDING]: "Pending",
  [PURCHASE_STATUS.APPROVED]: "Approved",
  [PURCHASE_STATUS.ORDERED]: "Ordered",
  [PURCHASE_STATUS.PARTIALLY_RECEIVED]: "Partially Received",
  [PURCHASE_STATUS.RECEIVED]: "Received",
  [PURCHASE_STATUS.CLOSED]: "Closed",
};

export function formatPurchaseStatus(status: PurchaseStatus) {
  return STATUS_TEXT[status] || status;
}

export function formatStatusText(status: PurchaseStatus) {
  return STATUS_TEXT[status] || status;
}

export function getStatusBadgeStyle(status: PurchaseStatus) {
  return PURCHASE_STATUS_STYLES[status] || "";
}

export function canClosePurchase(purchase: Purchase): boolean {
  if (purchase.status === "CLOSED") return false;
  return (
    purchase.status === "RECEIVED" ||
    purchase.status === "APPROVED" ||
    purchase.status === "ORDERED" ||
    purchase.status === "PARTIALLY_RECEIVED"
  );
}
