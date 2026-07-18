import type { ProductUnit } from "../../products/product-units/types/productUnit";
import type { Product } from "../../products/types/product";

export interface PurchaseItem {
  id: string;
  purchase_id: string;
  product_id: string;
  product_unit_id: string;
  quantity: number;
  unit_cost: number;
  total_cost: number;
  received_quantity: number;
  remaining_quantity?: number;
  product?: Product;
  product_unit?: ProductUnit;
}

export interface CreatePurchaseItemInput {
  product_id: string;
  product_unit_id: string;
  quantity: number;
  unit_cost: number;
}

export type UpdatePurchaseItemInput = Partial<CreatePurchaseItemInput>;
