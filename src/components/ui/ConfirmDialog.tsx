import { useState, type ReactNode } from "react";
import { AlertTriangle, Trash2} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

interface ConfirmDialogProps {
  open: boolean;
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  confirmationKeyword?: string;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  children?: ReactNode;
}

const ConfirmDialog = ({
  open,
  subtitle,
  description,
  confirmationKeyword = "DELETE",
  confirmText = "Delete",
  cancelText = "Cancel",
  loading = false,
  onCancel,
  onConfirm,
  children,
}: ConfirmDialogProps) => {
  const [confirmation, setConfirmation] = useState("");

  if (!open) return null;

  return (
    <Modal
      open={open}
      onClose={onCancel}
      size="sm"
      title={
        <>
          <div className="flex items-start gap-4 ">
            <span className="p-2 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </span>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-sm font-extrabold text-slate-900 tracking-tight uppercase">
                Critical Confirmation
              </h3>
              {subtitle && (
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-rose-700">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </>
      }
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.18 }}
          className="overflow-hidden rounded-2xl bg-white"
        >
          <>
            {description && (
              <p className="text-xs leading-relaxed text-slate-600">
                {description}
              </p>
            )}
          </>
          <div className="py-4 space-y-4">
            <p className="text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-150">
              Deleting this product will remove its barcode records, packaging
              configurations, and stock levels. Future sales reports of historic
              sales will still reference this item but you won't be able to
              restock it or select it for new sales.
            </p>
          </div>
          {/* Body */}
          <div className="space-y-5 bg-white">
            {children}

            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Type{" "}
                <span className="font-mono font-extrabold text-rose-600">
                  {confirmationKeyword}
                </span>{" "}
                to confirm
              </Label>

              <Input
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                placeholder={`Type ${confirmationKeyword}`}
                className="font-mono text-sm"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
            <Button variant="secondary" onClick={onCancel} disabled={loading}>
              {cancelText}
            </Button>

            <Button
              variant="danger"
              loading={loading}
              disabled={confirmation.trim() !== confirmationKeyword}
              onClick={onConfirm}
            >
              <Trash2 className="h-4 w-4" />
              {confirmText}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default ConfirmDialog;
