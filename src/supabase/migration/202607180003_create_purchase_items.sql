create table if not exists purchase_items (
    id uuid primary key default gen_random_uuid(),
    purchase_id uuid not null references purchases(id) on delete cascade,
    product_id uuid not null references products(id),
    product_unit_id uuid not null references product_units(id),
    quantity numeric(12,2) not null,
    unit_cost numeric(12,2) not null,
    total_cost numeric(12,2) not null,
    received_quantity numeric(12,2) default 0,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create index if not exists idx_purchase_items_purchase
on purchase_items(purchase_id);

create index if not exists idx_purchase_items_product
on purchase_items(product_id);