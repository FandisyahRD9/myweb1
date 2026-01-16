"use client";

import { useState } from "react";
import { Search, Link as LinkIcon } from "lucide-react";

export default function UrlInput({ onSubmit }: { onSubmit: (url: string) => void }) {
  const [value, setValue] = useState("");

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!value.trim()) return;
    onSubmit(value.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="card p-4 flex gap-3 items-center">
      <div className="flex items-center gap-3">
        <Search className="text-slate-400" />
      </div>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Paste Facebook video link (e.g. https://www.facebook.com/.../videos/...)"
        className="flex-1 bg-transparent outline-none placeholder:text-slate-500 text-slate-100"
        aria-label="Facebook video URL"
      />

      <button
        type="submit"
        className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[linear-gradient(90deg,#38dbe6,#1fb5b2)] text-slate-900 font-semibold hover:opacity-95"
      >
        <LinkIcon size={16} />
        Fetch
      </button>
    </form>
  );
}