export const getCategoryColor = (category) => {
  switch (category) {
    case "DEV":
      return "border-blue-300 text-blue-700 bg-blue-50";
    case "CIVIL":
      return "border-amber-300 text-amber-700 bg-amber-50";
    case "HYBRID":
      return "border-purple-300 text-purple-700 bg-purple-50";
    case "EXPERIMENTAL":
      return "border-pink-300 text-pink-700 bg-pink-50";
    default:
      return "border-line-strong text-muted bg-subtle";
  }
};

export const getStatusConfig = (status) => {
  switch (status) {
    case "DEPLOYED":
    case "PUBLISHED":
    case "LIVE":
      return {
        style: "bg-green-50 text-green-700 border-green-300",
        dot: "bg-green-500",
      };
    case "BETA":
      return {
        style: "bg-amber-50 text-amber-700 border-amber-300",
        dot: "bg-amber-400 animate-pulse",
      };
    case "PROTOTYPE":
      return {
        style: "bg-blue-50 text-blue-700 border-blue-300",
        dot: "bg-blue-500",
      };
    case "RESEARCH":
      return {
        style: "bg-indigo-50 text-indigo-700 border-indigo-300",
        dot: "bg-indigo-500",
      };
    case "EXPERIMENTAL":
      return {
        style: "bg-purple-50 text-purple-700 border-purple-300",
        dot: "bg-purple-500",
      };
    case "INTERNAL_TOOL":
      return {
        style: "bg-slate-100 text-slate-600 border-slate-300",
        dot: "bg-slate-400",
      };
    default:
      return {
        style: "bg-subtle text-muted border-line-strong",
        dot: "bg-muted",
      };
  }
};
