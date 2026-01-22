"use client";
import { useState, useRef, useEffect } from "react";
import { Terminal, X, Minus, Maximize2 } from "lucide-react";

export default function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      content: 'System initialized. Type "help" for commands.',
    },
  ]);
  const bottomRef = useRef(null);

  // 自動捲動到底部
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isOpen]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const newHistory = [...history, { type: "user", content: `> ${input}` }];
      const parts = input.trim().split(" "); // 變成 ["beam", "10", "2"]
      const cmd = parts[0].toLowerCase(); // "beam"
      const args = parts.slice(1); // ["10", "2"] (這就是參數陣列)

      // 指令邏輯
      switch (cmd) {
        case "help":
          newHistory.push({
            type: "system",
            content: `Available commands: [contact, bsc, clear, simplebeam {span} {uniform load}]`,
          });
          break;
        case "contact":
          newHistory.push({
            type: "success",
            content: "Email: bsc.doken@gmail.com",
          });
          break;
        case "simplebeam":
          // 1. 抓取參數
          const len = parseFloat(args[0]); // 第一個數字 (跨度 Length)
          const load = parseFloat(args[1]); // 第二個數字 (載重 Load)

          // 2. 防呆機制：如果使用者沒輸入數字，或者輸入錯誤
          if (isNaN(len) || isNaN(load)) {
            newHistory.push({
              type: "error",
              content: "Syntax Error. Usage: beam <Span_m> <Load_tf/m>",
            });
            newHistory.push({
              type: "info",
              content: "Example: beam 10 2 (for 10m span, 2tf/m load)",
            });
          } else {
            // 3. 進行結構計算 (簡易梁 M = wL^2 / 8)
            const moment = (load * len * len) / 8;
            const shear = (load * len) / 2; // V = wL / 2
            // 4. 顯示計算書風格的輸出
            newHistory.push({
              type: "system",
              content: ">> ANALYZING STRUCTURE MODEL...",
            });

            // ASCII 視覺化 (畫出一根梁)
            newHistory.push({
              type: "info",
              content: `   ↓↓↓ w = ${load} tf/m ↓↓↓`,
            });
            newHistory.push({
              type: "info",
              content: "   ___________________ ",
            });
            newHistory.push({
              type: "info",
              content: ` ▲ |      SPAN ${len}m     | ▲ `,
            });
            newHistory.push({
              type: "info",
              content: " ¯                     ¯ ",
            });

            newHistory.push({
              type: "success",
              content: ">> REPORT GENERATED:",
            });
            newHistory.push({
              type: "info",
              content: `├── Span (L): ${len} m`,
            });
            newHistory.push({
              type: "info",
              content: `├── Load (w): ${load} tf/m`,
            });
            newHistory.push({
              type: "info",
              content: `├── Max Shear (V): ${shear.toFixed(2)} tf`,
            });
            // 重點結果高亮
            newHistory.push({
              type: "success",
              content: `└── Max Moment (M): ${moment.toFixed(2)} tf-m`,
            });
          }
          break;
        case "bsc":
          // ASCII Art
          newHistory.push({
            type: "info",
            content: "  d( 0.0 )b   SYSTEM: BSC ",
          });
          // 分隔線
          newHistory.push({
            type: "system",
            content: "----------------------------------------",
          });

          // 個人核心身分介紹 (高亮顯示)
          newHistory.push({
            type: "success",
            content: "User: BSC (Civil Dev Hybrid)",
          });
          newHistory.push({
            type: "info",
            content:
              "└── Hobbies: Snowboarding / Motorcycling/ Scuba Diving(PADI AOW) ",
          });
          break;

          const L = parseFloat(args[0]); // 跨度
          const w = parseFloat(args[1]); // 均佈載重
          if (!L || !w) {
            newHistory.push({
              type: "error",
              content: "Usage: beam [Length] [Load]",
            });
          } else {
            const moment = (w * L * L) / 8;
            newHistory.push({
              type: "info",
              content: `>> MODEL: Simply Supported Beam`,
            });
            newHistory.push({
              type: "info",
              content: `>> SPAN: ${L} m, LOAD: ${w} tf/m`,
            });
            newHistory.push({
              type: "success",
              content: `>> MAX MOMENT: ${moment.toFixed(2)} tf-m`,
            });
          }
          break;
        case ("clear", "cls"):
          setHistory([]);
          setInput("");
          return; // 特別處理 clear，不保留歷史
        default:
          newHistory.push({
            type: "error",
            content: `Command not found: ${cmd}`,
          });
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono text-xs">
      {/* 1. 關閉狀態：只顯示一個按鈕 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 border border-slate-700 text-cyan-500 p-3 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-110 transition-transform animate-pulse"
        >
          <Terminal size={24} />
        </button>
      )}

      {/* 2. 開啟狀態：顯示終端機視窗 */}
      {isOpen && (
        <div className="w-80 h-96 bg-slate-950 border border-slate-700 rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 p-2 flex items-center justify-between border-b border-slate-800">
            <span className="text-slate-400 flex items-center gap-2">
              <Terminal size={12} /> bash — 80x24
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-white"
              >
                <Minus size={12} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-red-400"
              >
                <X size={12} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-3 overflow-y-auto space-y-1 custom-scrollbar">
            {history.map((line, i) => (
              <div
                key={i}
                className={`${
                  line.type === "user"
                    ? "text-slate-300"
                    : line.type === "error"
                      ? "text-red-400"
                      : line.type === "success"
                        ? "text-emerald-400"
                        : "text-cyan-400"
                }`}
              >
                {line.content}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <div className="p-2 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <span className="text-green-500">➜</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none text-slate-200 w-full placeholder-slate-600"
              placeholder="Type 'help'..."
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
}
