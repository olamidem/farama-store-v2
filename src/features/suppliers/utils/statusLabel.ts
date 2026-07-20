 const getStatusLabel = (status: string) => {
    const s = (status || "").toUpperCase();
    if (s === "RECEIVED") return "Received";
    if (s === "PARTIALLY_RECEIVED") return "Partially Received";
    if (s === "PENDING") return "Pending";
    return status || "Closed";
  };

  export default getStatusLabel;