import Link from "next/link";
import { TriangleAlert, HardHat, Bot, Lock } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* 1. 頂部黃黑警示條紋 (保留經典工安風格) */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_20px,#000_20px,#000_40px)] opacity-80"></div>

      {/* 背景雜訊 */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-lg w-full text-center space-y-8">
        {/* Icon 區塊 */}
        <div className="flex justify-center gap-4 mb-4">
          <HardHat size={64} className="text-amber-500 animate-bounce" />
          <TriangleAlert size={64} className="text-red-500" />
        </div>

        {/* 主標題 */}
        <div className="space-y-2">
          <h1 className="text-8xl font-black text-white tracking-tighter">
            4<span className="text-amber-500">0</span>4
          </h1>
          <div className="inline-block px-3 py-1 bg-red-950/40 border border-red-500/60 rounded text-red-400 font-mono text-sm tracking-widest animate-pulse">
            CRITICAL_FAILURE: "TUCHENG_EVENT" DETECTED
          </div>
        </div>

        {/* 🔥🔥🔥 核心內容：土木 vs AI 終極地獄梗 🔥🔥🔥 */}
        <div className="space-y-6 text-slate-400 font-mono text-sm leading-relaxed border-t border-b border-slate-800 py-8 bg-slate-900/50 rounded-lg px-6 shadow-2xl">
          {/* 標題：業界鐵律 */}
          <p className="text-xl font-bold text-amber-400 tracking-wider">
            "今日土木，明日土城"
          </p>

          {/* 金句區塊 */}
          <div className="text-left bg-slate-950 p-4 rounded border-l-4 border-red-500">
            <div className="flex items-center gap-2 text-cyan-500 mb-2 font-bold">
              <span>{">> AI_REPLACEMENT_ANALYSIS:"}</span>
            </div>

            {/* 中文金句 */}
            <p className="text-lg text-white font-bold mb-2">
              「土木工程師不會被 AI 取代...
            </p>

            {/* Punchline */}
            <p className="text-red-400 font-bold text-xl flex items-center gap-2 justify-end">
              因為 AI 不能坐牢」
            </p>
            <br></br>
            {/* 英文翻譯 (保持 Dev 風格) */}
            <p className="text-base text-white  mb-2">
              "Civil Engineers won't be replaced by AI,
            </p>
            <p className="text-base text-red-400 flex items-center gap-2 justify-end">
              because AI cannot go to prison."
            </p>
          </div>

          <p className="text-xs text-slate-500">
            SYSTEM_STATUS: The requested page has been detained for legal
            questioning.
          </p>
        </div>

        {/* 按鈕：交保候傳 */}
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-3 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            <span>POST BAIL & RETURN HOME (交保候傳)</span>
          </Link>

          <span className="text-[10px] text-slate-600 font-mono">
            *Disclaimer: High safety factors applied to minimize the risk of
            incarceration.
          </span>
        </div>
      </div>

      {/* 底部警示條紋 */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_20px,#000_20px,#000_40px)] opacity-80"></div>
    </div>
  );
}
