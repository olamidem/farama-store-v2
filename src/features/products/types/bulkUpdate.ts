import type { Product, UpdateProductInput } from "./product";

export interface BulkPricePreview extends Product {
  oldSellingPrice: number;
  newSellingPrice: number;
  oldCostPrice: number;
  newCostPrice: number;
}

export interface BulkProductUpdate {
  id: Product["id"];
  updates: UpdateProductInput;
}
