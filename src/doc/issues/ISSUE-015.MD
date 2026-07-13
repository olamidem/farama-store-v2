# Issue #15 — Product Table Pagination, Search & Sorting

## Summary

As the product catalog grows, loading every product at once becomes inefficient and impacts user experience. This issue introduces server-side pagination, search, and sorting to improve performance and scalability.

---

## Objectives

Implement a professional data table experience similar to Shopify, Square POS and modern inventory systems.

---

## Features

### Server-side Pagination

- Display products in pages
- Support:
  - 10 rows
  - 25 rows
  - 50 rows
  - 100 rows

Display:

Showing 1–10 of 248 products

---

### Product Search

Search by:

- Product Name
- Barcode

Search should update results without reloading the page.

---

### Column Sorting

Allow sorting by:

- Product Name
- Selling Price
- Stock
- Created Date

Ascending and Descending.

---

### Pagination Navigation

Provide:

- Previous
- Next
- Page numbers

---

### Loading State

Display loading skeleton while fetching products.

---

### Empty State

Display a friendly empty state when no products match the search.

---

## Technical Tasks

### Frontend

- Update ProductTable
- Create reusable Pagination component
- Update Product hook
- Connect search state
- Connect sorting state

### Supabase

Use:

- range()
- order()
- ilike()

instead of loading every record.

---

## Acceptance Criteria

- [ ] Products load page by page.
- [ ] Search filters products.
- [ ] Sorting works.
- [ ] Pagination updates correctly.
- [ ] Loading state displayed.
- [ ] Empty state displayed.
- [ ] React Query cache behaves correctly.

---

## Priority

High

---

## Labels

enhancement

performance

products

ui

react-query