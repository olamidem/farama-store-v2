import { Link } from "@tanstack/react-router";
import type { NavigationItem } from "./navigation.types";

const SidebarItem = ({ label, to, icon: Icon }: NavigationItem) => {
  return (
    <Link
      to={to}
      activeProps={{
        className: "bg-indigo-600 text-white font-extrabold shadow-sm shadow-indigo-500/10",
      }}
      inactiveProps={{
        className: "text-slate-400 hover:bg-slate-800/40 hover:text-slate-100",
      }}
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200"
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
