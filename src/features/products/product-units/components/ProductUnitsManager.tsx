import { useState } from "react";
import type { Product } from "../../types/product";
import ProductUnitsHeader from "./ProductUnitHeader";
import ProductUnitsStats from "./ProductUnitsStats";
import { ProductUnitsForm } from "./ProductUnitForm";
import type { ProductUnit } from "../types/productUnit";
import type { ProductUnitFormData } from "../validation/productUnit.schema";
import { useUnits } from "../../../units/hooks/useUnits";
import {
  useCreateProductUnit,
  useUpdateProductUnit,
  useArchiveProductUnit,
} from "../hooks/useProductUnitMutations";
import ProductUnitsTable from "./ProductUntsTable";
import { useProductUnits } from "../hooks/useProductUnits";
import { formatCurrency } from "../../../../utils/formatCurrenty";

interface ProductUnitsManagerProps {
  product: Product;
}

export default function ProductUnitsManager({
  product,
}: ProductUnitsManagerProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUnit, setEditingUnit] = useState<ProductUnit | null>(null);
  const { data: generalUnits = [] } = useUnits();
  const { mutateAsync: createProductUnit, isPending } = useCreateProductUnit();
  const { mutateAsync: updateProductUnit } = useUpdateProductUnit();
  const { mutateAsync: archiveProductUnit } = useArchiveProductUnit();
  const { data: productUnits = [], isLoading } = useProductUnits(product.id);

  const handleSubmit = async (productId: string, data: ProductUnitFormData) => {
    if (editingUnit) {
      await updateProductUnit({
        id: editingUnit.id,
        productId,
        data,
      });
    } else {
      await createProductUnit({
        product_id: productId,
        ...data,
      });
    }
    setEditingUnit(null);
    setIsFormOpen(false);
  };

  const baseUnit = generalUnits.find(
  (unit) => unit.id === product.base_unit_id,
);
  return (
    <div className="space-y-6">
      {/* Header */}
      <ProductUnitsHeader
        showAddButton={!isFormOpen}
        onAdd={() => {
          setEditingUnit(null);
          setIsFormOpen(true);
        }}
      />

      {/* Statistics */}
      <ProductUnitsStats product={product} />

      {/* Form */}
      {isFormOpen && (
        <ProductUnitsForm
          product={product}
          generalUnits={generalUnits}
          editingUnit={editingUnit}
          onSubmit={handleSubmit}
          onCancel={() => {
            setEditingUnit(null);
            setIsFormOpen(false);
          }}
          isPending={isPending}
        />
      )}

      {/* Table */}
      <ProductUnitsTable
        productUnits={productUnits}
        generalUnits={generalUnits}
        page={1}
        pageSize={10}
        totalItems={productUnits.length}
        isLoading={isLoading}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
        formatCurrency={formatCurrency}
        onEdit={(unit) => {
          setEditingUnit(unit);
          setIsFormOpen(true);
        }}
        onDelete={async (id) => {
          await archiveProductUnit({ id, productId: product.id });
        }}
      />
    </div>
  );
}
