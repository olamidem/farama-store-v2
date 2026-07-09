import { Download, Plus } from "lucide-react";
import Button from "../../../components/ui/Button";
import PageHeader from "../../../components/ui/PageHeader";

interface ProductHeaderProps {
  onAddProduct: () => void;
  onDownload?: () => void;
}

const ProductHeader = ({ onAddProduct, onDownload }: ProductHeaderProps) => {
  return (
    <PageHeader
      title="Manage Products"
      description="Configure store catalogue pricing, track barcode numbers, cost points and current stocks."
    >
      {/* Right */}
        <Button variant="secondary" onClick={onDownload}>
          <Download size={18} />
          Download Inventory
        </Button>

        <Button onClick={onAddProduct}>
          <Plus size={18} />
          Add Product
        </Button>
    </PageHeader>
  );
};

export default ProductHeader;
