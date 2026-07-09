import { Package, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

import type { Category } from "../types/category";

interface CategoryCardProps {
  category: Category;
  productCount: number;
}

const CategoryCard = ({ category, productCount }: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.15,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
            <Package size={20} className="text-blue-600" />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">{category.name}</h3>

            <p className="text-xs text-slate-500">
              {category.description || "No description"}
            </p>
          </div>
        </div>

        <button className="rounded-lg p-2 hover:bg-slate-100">
          <MoreHorizontal size={18} className="text-slate-500" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2">
          <Package size={16} className="text-blue-600" />

          <span className="text-sm font-medium text-blue-700">
            {productCount} Products
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
