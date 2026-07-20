import type { Purchase } from "../types/purchase";

export function printPurchaseOrder(purchase: Purchase) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow popups to print/download the purchase order.");
    return;
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      dateStyle: "long",
    });
  };

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const itemsHtml = (purchase.items || [])
    .map((item, index) => {
      const unitName =
        (
          item.product_unit as unknown as {
            unit?: { name?: string } | null;
          } | null
        )?.unit?.name || "Piece";
      return `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 12px 8px; font-size: 12px; text-align: center; color: #64748b;">${index + 1}</td>
          <td style="padding: 12px 8px; font-size: 12px; font-weight: 600; color: #1e293b;">
            ${item.product?.name || "Unknown Product"}
            <span style="display: block; font-size: 10px; color: #94a3b8; margin-top: 2px;">SKU: ${item.product?.sku || "N/A"}</span>
          </td>
          <td style="padding: 12px 8px; font-size: 12px; font-weight: 500; color: #334155; text-align: center;">${unitName}</td>
          <td style="padding: 12px 8px; font-size: 12px; font-family: monospace; font-weight: 600; color: #334155; text-align: right;">${item.quantity}</td>
          <td style="padding: 12px 8px; font-size: 12px; font-family: monospace; color: #475569; text-align: right;">${formatNaira(item.unit_cost)}</td>
          <td style="padding: 12px 8px; font-size: 12px; font-family: monospace; font-weight: 700; color: #1e293b; text-align: right;">${formatNaira(item.total_cost)}</td>
        </tr>
      `;
    })
    .join("");

  const logoSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 28px; height: 28px; color: #2563eb; margin-right: 8px; vertical-align: middle;">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Purchase Order - ${purchase.purchase_number}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #1e293b;
          background-color: #ffffff;
          padding: 40px;
          line-height: 1.5;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #f1f5f9;
          padding-bottom: 24px;
          margin-bottom: 30px;
        }
        .logo-section {
          display: flex;
          align-items: center;
        }
        .company-name {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: #0f172a;
        }
        .company-subtitle {
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .po-title-section {
          text-align: right;
        }
        .po-title {
          font-size: 24px;
          font-weight: 800;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }
        .po-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          margin-top: 4px;
        }
        .addresses {
          display: grid;
          grid-cols: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 35px;
        }
        .address-box {
          background-color: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 16px;
        }
        .address-title {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 1px;
          margin-bottom: 8px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 4px;
        }
        .address-name {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }
        .address-detail {
          font-size: 12px;
          color: #475569;
          margin-bottom: 2px;
        }
        .metadata-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 35px;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          padding: 16px 0;
        }
        .metadata-item {
          text-align: center;
        }
        .metadata-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.5px;
        }
        .metadata-value {
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          margin-top: 4px;
        }
        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 35px;
        }
        .items-table th {
          background-color: #f8fafc;
          padding: 10px 8px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #64748b;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #e2e8f0;
        }
        .totals-section {
          float: right;
          width: 280px;
          margin-bottom: 35px;
        }
        .total-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 13px;
        }
        .total-row.grand {
          border-top: 2px solid #cbd5e1;
          padding-top: 12px;
          font-size: 16px;
          font-weight: 800;
          color: #2563eb;
        }
        .remarks-section {
          clear: both;
          background-color: #f8fafc;
          border-left: 4px solid #cbd5e1;
          padding: 16px;
          border-radius: 0 12px 12px 0;
          margin-top: 20px;
        }
        .remarks-title {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #64748b;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }
        .remarks-text {
          font-size: 12px;
          color: #475569;
          font-style: italic;
        }
        .footer {
          margin-top: 60px;
          border-top: 1px solid #f1f5f9;
          padding-top: 20px;
          text-align: center;
          font-size: 11px;
          color: #94a3b8;
        }
        @media print {
          body {
            padding: 0;
          }
          .no-print {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <div class="logo-section">
            ${logoSvg}
            <div>
              <h1 class="company-name">FARAMA GROUP</h1>
              <p class="company-subtitle">Inventory & Requisitions System</p>
            </div>
          </div>
          <div class="po-title-section">
            <h2 class="po-title">Purchase Order</h2>
            <p class="po-number">${purchase.purchase_number}</p>
          </div>
        </div>

        <!-- Addresses -->
        <div class="addresses">
          <div class="address-box">
            <p class="address-title">Deliver To (Ship To)</p>
            <p class="address-name">FARAMA MAIN WAREHOUSE</p>
            <p class="address-detail">Plot 12, Ikeja Industrial Estate</p>
            <p class="address-detail">Ikeja, Lagos, Nigeria</p>
            <p class="address-detail">Phone: +234 812 345 6789</p>
            <p class="address-detail">Email: operations@farama.com</p>
          </div>
          
          <div class="address-box">
            <p class="address-title">Vendor / Supplier</p>
            <p class="address-name">${purchase.supplier?.name || "Unknown Supplier"}</p>
            <p class="address-detail">Email: ${purchase.supplier?.email || "N/A"}</p>
            <p class="address-detail">Phone: ${purchase.supplier?.phone || "N/A"}</p>
            <p class="address-detail">Address: ${purchase.supplier?.address || "N/A"}</p>
          </div>
        </div>

        <!-- Metadata -->
        <div class="metadata-grid">
          <div class="metadata-item">
            <p class="metadata-label">Order Date</p>
            <p class="metadata-value">${formatDate(purchase.purchase_date)}</p>
          </div>
          <div class="metadata-item">
            <p class="metadata-label">Expected Date</p>
            <p class="metadata-value">${purchase.expected_delivery_date ? formatDate(purchase.expected_delivery_date) : "N/A"}</p>
          </div>
          <div class="metadata-item">
            <p class="metadata-label">PO Status</p>
            <p class="metadata-value" style="color: ${purchase.status === "RECEIVED" ? "#10b981" : "#3b82f6"};">${purchase.status}</p>
          </div>
          <div class="metadata-item">
            <p class="metadata-label">Delivery Received</p>
            <p class="metadata-value">${purchase.received_percentage || 0}%</p>
          </div>
        </div>

        <!-- Table -->
        <table class="items-table">
          <thead>
            <tr>
              <th style="width: 50px;">Item</th>
              <th style="text-align: left;">Description</th>
              <th style="width: 100px;">Unit</th>
              <th style="width: 80px; text-align: right;">Qty</th>
              <th style="width: 120px; text-align: right;">Unit Cost</th>
              <th style="width: 140px; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <!-- Totals -->
        <div class="totals-section">
          <div class="total-row">
            <span style="font-weight: 600; color: #64748b;">Subtotal</span>
            <span style="font-family: 'JetBrains Mono', monospace; font-weight: 600;">${formatNaira(purchase.total_amount)}</span>
          </div>
          <div class="total-row">
            <span style="font-weight: 600; color: #64748b;">VAT (VAT Exempt)</span>
            <span style="font-family: 'JetBrains Mono', monospace; font-weight: 600;">₦0.00</span>
          </div>
          <div class="total-row grand">
            <span>Grand Total</span>
            <span style="font-family: 'JetBrains Mono', monospace;">${formatNaira(purchase.total_amount)}</span>
          </div>
        </div>

        <!-- Remarks -->
        <div class="remarks-section">
          <p class="remarks-title">Remarks / Instructions</p>
          <p class="remarks-text">${purchase.remarks || "No additional remarks provided by the store manager."}</p>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>Thank you for your business. This is a computer-generated document and requires no signature.</p>
          <p style="margin-top: 4px;">Farama Warehouse System © 2026. All rights reserved.</p>
        </div>
      </div>

      <script>
        window.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => {
            window.print();
            // Close tab after print is cancelled/completed
            window.close();
          }, 500);
        });
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
