import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import CategoryGrid from "../features/categories/components/CategoryGrid";
import AddCategoryModal from "../features/categories/components/AddCategoryModal";
import { useCategories } from "../features/categories/hooks/useCategories";
import { useProducts } from "../features/products/hooks/useProducts";
import DataTableEmpty from "../components/ui/DataTable/DataTableEmpty";
import { FolderOpen } from "lucide-react";



const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  const { data: categories = [], isLoading } =useCategories();
  const { data: products = [] } = useProducts();

    if (categories.length === 0) {
      return (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <DataTableEmpty
            icon={FolderOpen}
            title="No Categories"
            description="Create your first category to organize products."
          />
        </div>
      );
    }
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