"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-white/6 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-slate-200 font-medium hidden sm:inline">RimuruSmove</span>
        </Link>

        <nav className="flex items-center gap-4">
          <a
            href="#howto"
            className="text-slate-300 hover:text-white flex items-center gap-2"
          >
            <Search size={16} />
            How to
          </a>
        </nav>
      </div>
    </header>
  );
}