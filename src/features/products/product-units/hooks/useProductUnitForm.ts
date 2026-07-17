import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "../../types/product";
import { useUnits } from "../../../units/hooks/useUnits";
import {
  useCreateProductUnit,
  useUpdateProductUnit,
  useArchiveProductUnit,
} from "./useProductUnitMutations";
import { useProductUnits } from "./useProductUnits";
import {
  createProductUnitSchema,
  type ProductUnitFormData,
} from "../validation/productUnit.schema";

export function useProductUnitForm(product: Product) {
  const { data: generalUnits = [] } = useUnits();
  const { data: productUnits = [] } = useProductUnits(product.id);
  const { mutate: createUnit } = useCreateProductUnit();
  const { mutate: updateUnit } = useUpdateProductUnit();
  const { mutate: archiveUnit } = useArchiveProductUnit();

  const form = useForm<ProductUnitFormData>({
    resolver: zodResolver(createProductUnitSchema),
    defaultValues: {
      unit_id: "",
      conversion_factor: 1,
      selling_price: 0,
      cost_price: 0,
      sku: "",
      barcode: "",
    },
  });

  return {
    form,
    generalUnits,
    productUnits,
    createUnit,
    updateUnit,
    archiveUnit,
  };
}
