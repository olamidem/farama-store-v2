import { useState } from "react";
import ProductToolbar from "../features/products/components/ProductToolbar";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <ProductToolbar
        search={search}
        onSearchChange={setSearch}
        onAddProduct={() => setOpen(true)}
      />

      {/* Table goes here */}

      {/* Modal goes here */}
    </div>
  );
};

export default ProductsPage;
