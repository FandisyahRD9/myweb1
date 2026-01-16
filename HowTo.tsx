"use client";

export default function HowTo() {
  return (
    <section id="howto" className="max-w-4xl mx-auto card p-6">
      <h2 className="text-xl font-semibold text-slate-100">How to Download</h2>
      <ol className="mt-3 list-decimal list-inside text-slate-300 space-y-2">
        <li>Open Facebook and copy the video link (share → copy link).</li>
        <li>Paste the link into the input box above and click <strong>Fetch</strong>.</li>
        <li>Wait for the slime animation while we fetch the video details.</li>
        <li>Choose SD, HD, or MP3 to download.</li>
      </ol>
    </section>
  );
}