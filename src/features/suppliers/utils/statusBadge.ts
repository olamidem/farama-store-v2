 const getStatusBadgeClass = (status: string) => {
    const s = (status || "").toUpperCase();
    if (s === "RECEIVED") {
      return "bg-emerald-50 text-emerald-700 border-emerald-100/50";
    }
    if (s === "PARTIALLY_RECEIVED") {
      return "bg-amber-50 text-amber-700 border-amber-100/50";
    }
    if (s === "PENDING") {
      return "bg-blue-50 text-blue-700 border-blue-100/50";
    }
    return "bg-purple-50 text-purple-700 border-purple-100/50";
  };

  export default getStatusBadgeClass