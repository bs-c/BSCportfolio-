import Link from "next/link";
import { TriangleAlert, HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Warning stripes — top */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_16px,#1A1A1A_16px,#1A1A1A_32px)]" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-8">
        {/* Icons */}
        <div className="flex justify-center gap-4">
          <HardHat size={56} className="text-amber-500 animate-bounce" />
          <TriangleAlert size={56} className="text-red-500" />
        </div>

        {/* 404 */}
        <div className="space-y-3">
          <h1 className="text-8xl font-black text-primary tracking-tighter">
            4<span className="text-amber-500">0</span>4
          </h1>
          <div className="inline-block px-3 py-1 bg-red-50 border border-red-300 rounded font-mono text-red-600 text-xs tracking-widest">
            CRITICAL_FAILURE: PAGE_NOT_FOUND
          </div>
        </div>

        {/* Content */}
        <div className="border border-line rounded-lg bg-card p-6 text-left space-y-5">
          <p className="text-xl font-bold text-amber-600 tracking-wide text-center">
            「今日土木，明日土城」
          </p>

          <div className="bg-subtle rounded-lg p-4 border-l-4 border-red-400 space-y-3">
            <p className="font-mono text-[12px] text-accent">{">> AI_REPLACEMENT_ANALYSIS:"}</p>
            <p className="text-lg font-bold text-primary">「土木工程師不會被 AI 取代...</p>
            <p className="text-red-500 font-bold text-xl text-right">因為 AI 不能坐牢」</p>
            <div className="border-t border-line pt-3 space-y-1">
              <p className="text-secondary">"Civil Engineers won't be replaced by AI,</p>
              <p className="text-red-500 font-semibold text-right">because AI cannot go to prison."</p>
            </div>
          </div>

          <p className="text-[11px] text-muted font-mono text-center">
            SYSTEM_STATUS: The requested page has been detained for legal questioning.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded transition-colors"
          >
            POST BAIL & RETURN HOME（交保候傳）
          </Link>
          <span className="text-[10px] text-muted font-mono">
            * High safety factors applied to minimise the risk of incarceration.
          </span>
        </div>
      </div>

      {/* Warning stripes — bottom */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-[repeating-linear-gradient(45deg,#F59E0B,#F59E0B_16px,#1A1A1A_16px,#1A1A1A_32px)]" />
    </div>
  );
}
