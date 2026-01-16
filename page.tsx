"use client";

import { useState } from "react";
import UrlInput from "../components/UrlInput";
import LoadingSlime from "../components/LoadingSlime";
import ResultCard from "../components/ResultCard";
import HowTo from "../components/HowTo";
import FAQ from "../components/FAQ";
import { fetchFacebookVideoPlaceholder, FBResult } from "../lib/fetchFacebook";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FBResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleFetch(url: string) {
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      // Placeholder: Ganti dengan pemanggilan rute server-side (mis. /api/proxy/facebook) atau RapidAPI Anda
      const res = await fetchFacebookVideoPlaceholder(url);
      setResult(res);
    } catch (err: any) {
      setError(err?.message || "Gagal mengambil data video. Periksa URL dan coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="text-center pt-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold rimuru-accent">
          RimuruSmove
        </h1>
        <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
          Download video Facebook dengan cepat dan aman — pilih SD, HD, atau ekstrak MP3. Cukup tempel tautan video dan biarkan si slime bekerja.
        </p>

        <div className="mt-6 max-w-3xl mx-auto">
          <UrlInput onSubmit={handleFetch} />
          <p className="text-xs text-slate-500 mt-2">
            Contoh: https://www.facebook.com/.../videos/...
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <div className="slime" aria-hidden />
            <div className="mt-2 text-slate-400 text-sm">Dark-first • Mobile-friendly • Fast</div>
          </div>
        </div>
      </section>

      {/* RESULT / PROCESS */}
      <section className="max-w-3xl mx-auto">
        {loading && (
          <div className="flex flex-col items-center gap-4">
            <LoadingSlime />
            <p className="text-slate-400">Mengambil detail video…</p>
          </div>
        )}

        {error && (
          <div className="card p-4 text-red-300">
            <strong>Error:</strong> {error}
          </div>
        )}

        {result && <ResultCard data={result} />}
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-slate-100">Cepat & Mudah</h3>
          <p className="mt-2 text-slate-300">Tempel tautan, tekan Fetch — unduhan siap dalam beberapa detik. UI didesain untuk pengalaman minimal dan cepat.</p>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-slate-100">Beberapa Pilihan</h3>
          <p className="mt-2 text-slate-300">SD, HD (jika tersedia) dan ekstrak MP3 untuk audio saja. Tombol download langsung mengarah ke endpoint file.</p>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-slate-100">Privasi & Aman</h3>
          <p className="mt-2 text-slate-300">Kunci API disimpan server-side (gunakan rute API proxied). Sesuaikan caching dan rate-limit untuk produksi.</p>
        </div>
      </section>

      {/* HOW TO & FAQ */}
      <HowTo />
      <FAQ />

      {/* CTA */}
      <section className="max-w-3xl mx-auto card p-6 text-center">
        <h3 className="text-xl font-semibold rimuru-accent">Siap mencoba RimuruSmove?</h3>
        <p className="mt-2 text-slate-300">Tempel tautan video Facebook Anda di atas dan klik Fetch. Ingin integrasi API RapidAPI? Saya bisa bantu menambahkan rute server dan mapping respons.</p>
        <div className="mt-4 flex items-center justify-center">
          <UrlInput onSubmit={handleFetch} />
        </div>
      </section>
    </div>
  );
}