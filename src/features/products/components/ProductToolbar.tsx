import DataTableToolbar from "../../../components/ui/DataTable/DataTableToolbar";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

interface ProductToolbarProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

const ProductToolbar = ({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: ProductToolbarProps) => {
  return (
    <DataTableToolbar
      left={
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      }
      right={
        <Select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          options={[
            {
              label: "All Categories",
              value: "",
            },
          ]}
        />
      }
    />
  );
};

export default ProductToolbar;
