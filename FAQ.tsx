"use client";

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <h2 className="text-lg font-semibold text-slate-100">FAQ</h2>

      <div className="card p-4">
        <h3 className="font-medium text-slate-100">Is RimuruSmove free?</h3>
        <p className="text-slate-300 mt-1">Yes — this scaffold is free. You control hosting and any API costs for scraping/downloading.</p>
      </div>

      <div className="card p-4">
        <h3 className="font-medium text-slate-100">Do you store downloaded videos?</h3>
        <p className="text-slate-300 mt-1">No — this UI is built to link directly to downloader endpoints. If you add server-side caching/storage, disclose it and comply with privacy laws.</p>
      </div>

      <div className="card p-4">
        <h3 className="font-medium text-slate-100">How do I integrate my API?</h3>
        <p className="text-slate-300 mt-1">Replace the function in <code>lib/fetchFacebook.ts</code> with your API call, map the response to the FBResult type, and handle errors. Consider moving secrets to environment variables and calling a server-side API route if needed.</p>
      </div>
    </section>
  );
}