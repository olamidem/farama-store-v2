export interface Product {
  id: string;
  name: string;
  barcode: string;
  price: number;
  costPrice: number;
  stock: number;
  categoryId: string;
  minStockAlert: number;
  createdAt: string;
  updatedAt: string;
  // category?: Category;
}
