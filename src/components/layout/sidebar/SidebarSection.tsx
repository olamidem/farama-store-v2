import SidebarItem from "./SidebarItem";
import type { NavigationItem } from "./navigation.types";

interface SidebarSectionProps {
  title: string;
  items: NavigationItem[];
}

const SidebarSection = ({ title, items }: SidebarSectionProps) => {
  return (
    <div className="space-y-1.5">
      <h2 className="px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
        {title}
      </h2>

      <div>
        {items.map((item) => (
          <SidebarItem
            key={item.to}
            label={item.label}
            to={item.to}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarSection;
