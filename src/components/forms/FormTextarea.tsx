import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { cn } from "../../utils/cn";

interface FormTextareaProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
}

export default function FormTextarea<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  rows = 4,
  disabled,
  className,
}: FormTextareaProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">{label}</label>

          <textarea
            {...field}
            rows={rows}
            disabled={disabled}
            placeholder={placeholder}
            className={cn(
              "w-full rounded-xl border bg-white px-3 py-2.5 text-sm shadow-sm transition",
              "placeholder:text-slate-400",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              fieldState.error ? "border-red-500" : "border-slate-300",
              disabled && "cursor-not-allowed bg-slate-100 opacity-70",
              className,
            )}
          />
          {fieldState.error && (
            <p className="text-xs text-red-500">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
}
