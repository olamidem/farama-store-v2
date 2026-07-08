import type { LabelHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

const Label = ({
  className,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn("mb-2 block text-sm font-medium text-gray-700", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
