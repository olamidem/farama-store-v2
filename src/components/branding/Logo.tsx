import { Package2 } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
        <Package2 className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900">
          Farama Store
        </h1>
        <p className="text-xs text-slate-500">Inventory Management System</p>
      </div>
    </div>
  );
};

export default Logo;
