"use client";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="slime" aria-hidden />
      <div className="leading-tight">
        <div className="text-lg font-semibold rimuru-accent" style={{ fontFamily: "Poppins, sans-serif" }}>
          Rimuru
        </div>
        <div className="text-xs text-slate-400 -mt-1">Smove</div>
      </div>
    </div>
  );
}