// 定義分類顏色的對照表
export const getCategoryColor = (category) => {
  switch (category) {
    case "DEV":
      // 青色 (Cyan) - 代表程式開發
      return "border-cyan-500/30 text-cyan-400 bg-cyan-950/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]";

    case "CIVIL":
      // 琥珀色/橘色 (Amber) - 代表土木工程 (警示/實體感)
      return "border-amber-500/30 text-amber-400 bg-amber-950/20 shadow-[0_0_10px_rgba(251,191,36,0.1)]";

    case "HYBRID":
      // 紫色 (Purple) - 代表混合領域
      return "border-purple-500/30 text-purple-400 bg-purple-950/20 shadow-[0_0_10px_rgba(192,132,252,0.1)]";

    case "EXPERIMENTAL":
      // 粉紅色 (Pink) - 代表實驗性質 (您之前指定的顏色)
      return "border-pink-500/30 text-pink-400 bg-pink-950/20 shadow-[0_0_10px_rgba(244,114,182,0.1)]";

    default:
      // 預設灰色 (Slate)
      return "border-slate-700 text-slate-400 bg-slate-900";
  }
};
