export function getRelativeTimeText (
  dateStr: string | undefined,
  type: "days" | "months" | "since",
) {
  if (!dateStr) return "Never";
  const date = new Date(dateStr);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (type === "days") {
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  }

  const diffMonths = Math.ceil(diffDays / 30);
  if (type === "months" || type === "since") {
    if (diffMonths === 1) return "1 month";
    return `${diffMonths} months`;
  }
  return "";
};
