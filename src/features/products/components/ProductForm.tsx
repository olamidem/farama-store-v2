import { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import Select from "../../../components/ui/Select";

interface ProductFormProps {
  onCancel: () => void;
}

const categoryOptions = [
  {
    label: "Beverages",
    value: "beverages",
  },
  {
    label: "Groceries",
    value: "groceries",
  },
];

const ProductForm = ({ onCancel }: ProductFormProps) => {
  const [category, setCategory] = useState("");

  return (
    <form className="space-y-5">
      <div className="space-y-1">
        <Label className="block text-[10px] font-bold text-slate-400 uppercase">
          Product Name *
        </Label>

        <Input
          id="name"
          placeholder="e.g. Coca-Cola 50cl"
          className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:outline-none font-medium "
        />
      </div>

      <div className="space-y-1">
        <Label className="block text-[10px] font-bold text-slate-400 uppercase">
          Barcode
        </Label>
        <Input
          id="barcode"
          placeholder="Leave empty to auto-generate"
          className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:outline-none font-mono"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label className="block text-[10px] font-bold text-slate-400 uppercase">
            Price (Selling) ₦ *
          </Label>
          <Input
            type="number"
            placeholder="0.00"
            className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:outline-none font-mono "
          />
        </div>

        <div className="space-y-1">
          <Label className="block text-[10px] font-bold text-slate-400 uppercase">
            Cost (Wholesale) ₦
          </Label>
          <Input
            type="number"
            placeholder="0.00"
            className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:outline-none font-mono text-slate-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label className="block text-[10px] font-bold text-slate-400 uppercase">
            Stock Quantity *
          </Label>

          <Input
            type="number"
            placeholder="0"
            className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:outline-none font-mono"
          />
        </div>

        <div className="space-y-1">
          <Label className="block text-[10px] font-bold text-slate-400 uppercase">
            Low Stock Alert Level
          </Label>

          <Input
            type="number"
            placeholder="10"
            className="w-full py-2 px-3 border border-slate-200 rounded-lg focus:outline-none font-mono"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label className="block text-[10px] font-bold text-slate-400 uppercase">
          Associated Category
        </Label>

        <Select
          options={categoryOptions}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full py-2 px-3 border border-slate-200 rounded-lg bg-white"
        />
      </div>

      <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
          className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold cursor-pointer"
        >
          Cancel
        </Button>

        <Button
          type="submit"
          className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold disabled:opacity-50 cursor-pointer"
        >
          Add Product
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
