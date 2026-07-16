import { useProductUnits } from "../hooks/useProductUnits";

interface ProductSellingUnitsProps {
  product: ProductWithRelations;
}

const ProductSellingUnits = ({ product }: ProductSellingUnitsProps) => {
  const { data: units = [], isLoading } = useProductUnits(product.id);

  return (
    <>
      <ProductUnitHeader product={product} />

      {isLoading ? (
        <LoadingSellingUnits />
      ) : units.length === 0 ? (
        <EmptySellingUnits />
      ) : (
        <ProductUnitList product={product} units={units} />
      )}
    </>
  );
};

export default ProductSellingUnits;
