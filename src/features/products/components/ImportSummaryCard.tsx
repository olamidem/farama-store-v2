import { CheckCircle2, FileSpreadsheet, FileText, X } from "lucide-react";
import type { ImportSummary } from "../types/import";

interface ImportSummaryCardsProps {
  file: File;
  summary: ImportSummary;
}

const StatCard = ({
  title,
  value,
  percentage,
  percentageText,
  icon: Icon,
  iconBg,
  iconColor,
  progressColor,
}: {
  title: string;
  value: number;
  percentage: number;
  percentageText?: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  progressColor: string;
}) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </p>

        <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      </div>

      <div className={`rounded-lg p-3 ${iconBg}`}>
        <Icon className={iconColor} size={20} />
      </div>
    </div>

    <div className="mt-4">
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${progressColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {percentageText && (
        <p className="mt-2 text-xs text-slate-500">{percentageText}</p>
      )}
    </div>
  </div>
);

const ImportSummaryCard = ({ file, summary }: ImportSummaryCardsProps) => {
  const validPercentage =
    summary.total > 0 ? Math.round((summary.valid / summary.total) * 100) : 0;

  const failedPercentage =
    summary.total > 0 ? Math.round((summary.failed / summary.total) * 100) : 0;

  return (
    <div className="space-y-5">
      {/* Uploaded file */}
      <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2">
          {file.name.endsWith(".csv") ? (
            <FileText size={18} className="text-blue-600" />
          ) : (
            <FileSpreadsheet size={18} className="text-emerald-600" />
          )}

          <span className="text-sm font-semibold text-slate-700">
            {file.name}
          </span>

          <span className="rounded bg-slate-200 px-2 py-0.5 text-[10px] font-mono text-slate-600">
            {(file.size / 1024).toFixed(1)} KB
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Total Rows"
          value={summary.total}
          percentage={100}
          percentageText="Spreadsheet rows"
          icon={FileSpreadsheet}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
          progressColor="bg-blue-500"
        />

        <StatCard
          title="Ready to Import"
          value={summary.valid}
          percentage={validPercentage}
          percentageText={`${validPercentage}% valid`}
          icon={CheckCircle2}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
          progressColor="bg-emerald-500"
        />

        <StatCard
          title="Validation Errors"
          value={summary.failed}
          percentage={failedPercentage}
          percentageText={`${failedPercentage}% failed`}
          icon={X}
          iconBg="bg-rose-50"
          iconColor="text-rose-600"
          progressColor="bg-rose-500"
        />
      </div>
    </div>
  );
};

export default ImportSummaryCard;
