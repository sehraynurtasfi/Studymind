"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/summarizer", label: "Summarizer", emoji: "📝" },
  { href: "/quiz",       label: "Quiz",        emoji: "🧠" },
  { href: "/flashcards", label: "Flashcards",  emoji: "🃏" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-ink/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-7 h-7 flex-shrink-0">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="nb" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#1a1a26"/>
                    <stop offset="100%" stopColor="#09090f"/>
                  </linearGradient>
                  <linearGradient id="nf" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#ff6b35"/>
                    <stop offset="60%"  stopColor="#ff9f1c"/>
                    <stop offset="100%" stopColor="#ffcc00"/>
                  </linearGradient>
                </defs>
                <rect width="64" height="64" rx="14" fill="url(#nb)"/>
                <path
                  d="M38.5 19 C38.5 19 35 16.5 30.5 16.5 C26 16.5 22.5 19.5 22.5 23 C22.5 26.5 25 28.2 29 29.5 L34.5 31.2 C38.8 32.6 41.5 35 41.5 38.8 C41.5 43.2 37.5 47.5 31 47.5 C26 47.5 22 44.5 22 44.5"
                  stroke="url(#nf)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
                />
                <circle cx="44" cy="17" r="2.5"  fill="#ff9f1c" opacity="0.95"/>
                <circle cx="49" cy="12" r="1.6"  fill="#ffcc00" opacity="0.75"/>
                <circle cx="46.5" cy="9" r="1"   fill="#ff6b35" opacity="0.5"/>
              </svg>
            </div>
            <span className="text-base sm:text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
              Study<em className="text-flame not-italic italic">Mind</em>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === l.href
                    ? "bg-white/10 text-cream"
                    : "text-cream-muted hover:text-cream hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/quiz"
              className="ml-3 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-flame to-[#ff9f1c] text-white hover:shadow-lg hover:shadow-flame/30 transition-all duration-200 hover:-translate-y-px"
            >
              Try Free →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`block h-0.5 w-6 bg-cream rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-cream rounded-full transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-cream rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(9,9,15,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col justify-center h-full px-8">
          <div className="space-y-2 mb-10">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 ${
                  pathname === l.href ? "bg-white/10 text-cream" : "text-cream-muted hover:text-cream hover:bg-white/5"
                }`}
                style={{
                  fontFamily: "var(--font-fraunces)",
                  transitionDelay: `${i * 50}ms`,
                  transform: open ? "translateX(0)"   : "translateX(-20px)",
                  opacity:   open ? 1                 : 0,
                }}
              >
                <span className="text-2xl">{l.emoji}</span>
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#ff6b35 0%,#ff9f1c 100%)", boxShadow: "0 8px 32px rgba(255,107,53,0.35)" }}
          >
            Try Free →
          </Link>
        </div>
      </div>
    </>
  );
}
