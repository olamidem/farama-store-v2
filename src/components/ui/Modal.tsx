import { X } from "lucide-react";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ open, title, children, onClose }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div
        className="bg-white rounded-xl shadow-xl max-w-sm w-full overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}

        <div className="bg-slate-50 px-4 py-3.5 border-b border-slate-100 flex justify-between items-center">
          <span className="font-bold text-sm text-slate-800 uppercase tracking-wider">
            {title}
          </span>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
