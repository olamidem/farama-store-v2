import { Bell } from "lucide-react";

const HeaderNotifications = () => {
  return (
    <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
      <Bell size={18} className="text-slate-600" />

      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
    </button>
  );
};

export default HeaderNotifications;
