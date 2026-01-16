"use client";

export default function LoadingSlime() {
  return (
    <div className="flex flex-col items-center">
      <div className="slime" role="img" aria-label="slime loading" />
      <div className="mt-2 text-slate-400">Processing…</div>
    </div>
  );
}