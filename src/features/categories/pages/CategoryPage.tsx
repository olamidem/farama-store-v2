import { useState } from "react";

import Button from "../../../components/ui/Button";

import CategoryGrid from "../components/CategoryGrid";
import AddCategoryModal from "../components/AddCategoryModal";

import { useCategories } from "../hooks/useCategories";
import { useProducts } from "../../product/hooks/useProducts";
import PageHeader from "../../../components/ui/PageHeader";

const CategoryPage = () => {
  const [open, setOpen] = useState(false);

  const { data: categories = [], isLoading } =
    useCategories();

  const { data: products = [] } =
    useProducts();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Manage Categories"
        description="Organize store catalogue items into custom filters."
      >
        <Button
          onClick={() => setOpen(true)}
        >
          Add Category
        </Button>
      </PageHeader>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CategoryGrid
          categories={categories}
          products={products}
        />
      )}

      <AddCategoryModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default CategoryPage;