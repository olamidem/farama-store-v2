export interface PaginationParams {
  page: number;
  pageSize: number;
  search?: string;
  category?: string;
  status?: "all" | "active" | "inactive";
  sortBy?: "name" | "selling_price" | "stock" | "created_at";
  ascending?: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  count: number;
}
