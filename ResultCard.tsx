"use client";

import { Play, Download, Music } from "lucide-react";
import type { FBResult } from "../lib/fetchFacebook";

export default function ResultCard({ data }: { data: FBResult }) {
  return (
    <div className="card p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
      <div className="sm:col-span-1">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full rounded-md object-cover border border-white/6"
        />
      </div>

      <div className="sm:col-span-2">
        <h3 className="text-lg font-semibold text-slate-100">{data.title}</h3>
        <p className="text-sm text-slate-400 mt-1">
          Source:{" "}
          <a className="underline" href={data.sourceUrl} target="_blank" rel="noreferrer">
            Open on Facebook
          </a>
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href={data.sd}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/6 hover:bg-white/8 text-slate-100 border border-white/4"
            download
            rel="noreferrer"
          >
            <Download size={16} />
            SD
          </a>

          {data.hd && (
            <a
              href={data.hd}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[linear-gradient(90deg,#38dbe6,#1fb5b2)] text-slate-900 font-semibold hover:opacity-95"
              download
              rel="noreferrer"
            >
              <Play size={16} />
              HD
            </a>
          )}

          {data.audioMp3 && (
            <a
              href={data.audioMp3}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/6 hover:bg-white/8 text-slate-100 border border-white/4"
              download
              rel="noreferrer"
            >
              <Music size={16} />
              MP3
            </a>
          )}
        </div>

        <div className="mt-4 text-sm text-slate-400">
          Tip: If HD is unavailable, try the SD option or use the MP3 extractor for audio-only downloads.
        </div>
      </div>
    </div>
  );
}