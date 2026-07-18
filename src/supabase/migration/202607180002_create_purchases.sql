create table if not exists purchases (
    id uuid primary key default gen_random_uuid(),
    purchase_number text unique not null,
    supplier_id uuid not null references suppliers(id),
    warehouse_id uuid references warehouses(id),
    status text not null,
    total_amount numeric(12,2) default 0,
    purchase_date date not null,
    expected_delivery_date date,
    received_percentage integer default 0,
    remarks text,
    created_by uuid references profiles(id),
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

create index if not exists idx_purchase_number
on purchases(purchase_number);

create index if not exists idx_purchase_supplier
on purchases(supplier_id);

create index if not exists idx_purchase_status
on purchases(status);