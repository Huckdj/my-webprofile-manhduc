"use client";

import { useEffect, useState } from "react";

const terminalLines = [
  { prefix: "$ ", text: "npm create next-app portfolio", color: "text-slate-300" },
  { prefix: "$ ", text: "npm run dev", color: "text-slate-300" },
  { prefix: "✓ ", text: "Ready on http://localhost:3000", color: "text-emerald-400" },
];

export default function CodeWindow() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-500/20 blur-2xl" />

      {/* Editor window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#161b22] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">portfolio.tsx</span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
          <code>
            <span className="text-violet-400">const</span>{" "}
            <span className="text-blue-300">developer</span>{" "}
            <span className="text-slate-400">=</span>{" "}
            <span className="text-slate-400">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-sky-300">name</span>
            <span className="text-slate-400">:</span>{" "}
            <span className="text-emerald-400">&quot;Bùi Mạnh Đức&quot;</span>
            <span className="text-slate-400">,</span>
            {"\n"}
            {"  "}
            <span className="text-sky-300">role</span>
            <span className="text-slate-400">:</span>{" "}
            <span className="text-emerald-400">&quot;Full-stack Developer&quot;</span>
            <span className="text-slate-400">,</span>
            {"\n"}
            {"  "}
            <span className="text-sky-300">stack</span>
            <span className="text-slate-400">: [</span>
            {"\n"}
            {"    "}
            <span className="text-emerald-400">&quot;React&quot;</span>
            <span className="text-slate-400">,</span>{" "}
            <span className="text-emerald-400">&quot;Next.js&quot;</span>
            <span className="text-slate-400">,</span>
            {"\n"}
            {"    "}
            <span className="text-emerald-400">&quot;Node.js&quot;</span>
            <span className="text-slate-400">,</span>{" "}
            <span className="text-emerald-400">&quot;.NET&quot;</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">],</span>
            {"\n"}
            {"  "}
            <span className="text-sky-300">build</span>
            <span className="text-slate-400">: () =&gt; </span>
            <span className="text-amber-300">createAwesomeApps</span>
            <span className="text-slate-400">(),</span>
            {"\n"}
            <span className="text-slate-400">{"};"}</span>
            {"\n\n"}
            <span className="text-violet-400">export default</span>{" "}
            <span className="text-blue-300">developer</span>
            <span className="text-slate-400">;</span>
            <span
              className={`ml-0.5 inline-block h-4 w-2 align-middle bg-blue-400 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </code>
        </pre>
      </div>

      {/* Terminal */}
      <div className="relative mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-xl">
        <div className="border-b border-white/10 bg-[#161b22] px-4 py-2">
          <span className="font-mono text-xs text-slate-500">terminal</span>
        </div>
        <div className="space-y-1.5 p-4 font-mono text-xs sm:text-sm">
          {terminalLines.map((line, i) => (
            <p key={i}>
              <span className="text-blue-400">{line.prefix}</span>
              <span className={line.color}>{line.text}</span>
            </p>
          ))}
          <p>
            <span className="text-blue-400">$ </span>
            <span className="text-slate-500">_</span>
          </p>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -right-2 -top-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 font-mono text-xs text-blue-300 backdrop-blur-sm sm:-right-4">
        {"</>"}
      </div>
      <div className="absolute -bottom-2 -left-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 font-mono text-xs text-violet-300 backdrop-blur-sm sm:-left-4">
        TS + React
      </div>
    </div>
  );
}
