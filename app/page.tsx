import Link from "next/link";

const tools = [
  {
    href: "/summarizer",
    emoji: "📝",
    title: "Note Summarizer",
    desc: "Paste any text — get a crisp 3-4 sentence summary plus 5 key takeaways. No fluff, just signal.",
    accentClass: "text-flame border-flame/20 bg-flame/8",
    barColor: "via-flame/60",
    arrowColor: "text-flame",
    stagger: "stagger-2",
  },
  {
    href: "/quiz",
    emoji: "🧠",
    title: "Quiz Generator",
    desc: "Turn any study material into 5 multiple-choice questions with instant right/wrong feedback.",
    accentClass: "text-cyan border-cyan/20 bg-cyan/8",
    barColor: "via-cyan/60",
    arrowColor: "text-cyan",
    stagger: "stagger-3",
  },
  {
    href: "/flashcards",
    emoji: "🃏",
    title: "Flashcard Generator",
    desc: "Get 8 interactive flip cards from your notes. Track what you know, skip what you don't.",
    accentClass: "text-violet border-violet/20 bg-violet/8",
    barColor: "via-violet/60",
    arrowColor: "text-violet",
    stagger: "stagger-4",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] left-[5%] w-[400px] sm:w-[700px] h-[400px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[130px] opacity-15"
        style={{ background: "radial-gradient(circle, #ff6b35 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[80px] sm:blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, #4cc9f0 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[10%] left-[40%] w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full blur-[80px] sm:blur-[100px] opacity-8"
        style={{ background: "radial-gradient(circle, #7b5ea7 0%, transparent 70%)" }}
      />

      {/* ─── Hero ─── */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-24 pb-10 sm:pb-16">
        <div className="max-w-3xl">
          <h1
            className="text-[clamp(2.4rem,8vw,5.5rem)] font-semibold leading-[1.08] tracking-tight text-cream mb-4 sm:mb-6 animate-fade-up stagger-1"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Study{" "}
            <em className="italic text-flame">smarter,</em>
            <br />
            not harder.
          </h1>

          <p className="text-cream-muted text-base sm:text-xl leading-relaxed max-w-lg mb-8 sm:mb-12 animate-fade-up stagger-2">
            Three AI-powered study tools that turn your notes into summaries, quizzes, and
            flashcards — in seconds.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-up stagger-3">
            <Link
              href="/summarizer"
              className="btn-glow inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-cream text-ink font-semibold text-sm hover:bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10"
            >
              📝 Start Summarizing
            </Link>
            <Link
              href="/flashcards"
              className="btn-glow inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-white/10 text-cream font-semibold text-sm hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
            >
              🃏 Make Flashcards
            </Link>
          </div>
        </div>

        <div className="hr-line mt-14 sm:mt-20 animate-fade-up stagger-4" />
      </section>

      {/* ─── Tool cards ─── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
        <p className="text-cream-muted text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-10 animate-fade-up">
          Three tools, zero fluff
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className={`group relative p-5 sm:p-7 rounded-2xl border border-white/8 bg-surface hover:bg-surface-2 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15 hover:shadow-2xl hover:shadow-black/50 animate-fade-up ${t.stagger}`}
            >
              <div
                className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${t.barColor} to-transparent rounded-full`}
              />
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center text-lg sm:text-xl mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 ${t.accentClass}`}
              >
                {t.emoji}
              </div>
              <h2
                className="text-lg sm:text-xl font-semibold text-cream mb-2"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {t.title}
              </h2>
              <p className="text-cream-muted leading-relaxed text-xs sm:text-sm mb-4 sm:mb-6">
                {t.desc}
              </p>
              <div
                className={`flex items-center gap-2 text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all duration-200 ${t.arrowColor}`}
              >
                Open tool <span className="text-base leading-none">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-4 animate-fade-up stagger-4">
          {[
            { num: "< 5s", label: "Avg. response" },
            { num: "3",    label: "Powerful tools" },
            { num: "Free", label: "No signup" },
          ].map((s) => (
            <div key={s.label} className="text-center py-4 sm:py-6 px-2 sm:px-4 rounded-xl border border-white/5">
              <div
                className="text-2xl sm:text-3xl font-semibold text-cream mb-1"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {s.num}
              </div>
              <div className="text-cream-muted text-[10px] sm:text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
