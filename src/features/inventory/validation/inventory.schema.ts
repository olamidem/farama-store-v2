import { z } from "zod";

export const stockAdjustmentSchema = z.object({
  product_id: z.string().uuid(),
  transaction_type: z.enum([
    "PURCHASE",
    "SALE",
    "RETURN",
    "ADJUSTMENT_IN",
    "ADJUSTMENT_OUT",
    "TRANSFER_IN",
    "TRANSFER_OUT",
    "DAMAGE",
    "OPENING_STOCK",
  ]),
  quantity: z.number().positive(),
  reason: z.string().min(2),
  remarks: z.string().optional(),
});

export type StockAdjustmentFormData = z.infer<typeof stockAdjustmentSchema>;