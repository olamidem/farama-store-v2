import { X } from "lucide-react";
import Logo from "../../branding/Logo";
import { navigation } from "./Navigation";
import SidebarSection from "./SidebarSection";
import { cn } from "../../../utils/cn";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        id="mobile-sidebar-overlay"
        className={cn(
          "fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <aside
        id="sidebar-aside"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-900 bg-[#0B0F19] transition-transform duration-300 ease-in-out lg:static lg:z-0 lg:flex lg:h-screen lg:translate-x-0 shrink-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo and Close Button */}
        <div className="flex h-22.5 items-center justify-between border-b border-slate-900 p-6 shrink-0">
          <Logo theme="dark" />
          {onClose && (
            <button
              id="sidebar-close-btn"
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-800 hover:text-slate-200 lg:hidden cursor-pointer"
              title="Close Sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-8 overflow-y-auto p-6">
          {navigation.map((section) => (
            <SidebarSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
