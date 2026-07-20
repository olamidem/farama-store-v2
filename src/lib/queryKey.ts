export const QUERY_KEYS = {
  products: ["products"],
  categories: ["categories"],
  sales: ["sales"],
  users: ["users"],
  suppliers: ["suppliers"],
  units: ["units"],
  productUnits: ["product-units"],
  inventory: ["inventory"],
  purchases: ["purchases"],
  purchase: (id: string) => ["purchase", id],
} as const;
