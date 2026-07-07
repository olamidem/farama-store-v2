import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

interface ProductToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onAddProduct: () => void;
}

const ProductToolbar = ({
  search,
  onSearchChange,
  onAddProduct,
}: ProductToolbarProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="w-full md:max-w-sm">
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="secondary">Download Inventory</Button>

        <Button onClick={onAddProduct}>+ Add Product</Button>
      </div>
    </div>
  );
};

export default ProductToolbar;
