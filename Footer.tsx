"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} RimuruSmove — Built with Next.js & Tailwind CSS
        </div>

        <div className="text-sm text-slate-400">
          <a href="#" className="underline">Privacy</a>{" • "}
          <a href="#" className="underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}