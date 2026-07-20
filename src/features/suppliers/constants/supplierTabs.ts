export const SUPPLIER_TABS = {
  RECENT_PURCHASES: "Recent Purchases",
  PRODUCTS_SUPPLIED: "Products Supplied",
  CONTACT_HISTORY: "Contact History",
  NOTES: "Notes",
} as const;

export type SupplierTab = (typeof SUPPLIER_TABS)[keyof typeof SUPPLIER_TABS];

export const SUPPLIER_TAB_LIST = [
  SUPPLIER_TABS.RECENT_PURCHASES,
  SUPPLIER_TABS.PRODUCTS_SUPPLIED,
  SUPPLIER_TABS.CONTACT_HISTORY,
  SUPPLIER_TABS.NOTES,
] as const;
