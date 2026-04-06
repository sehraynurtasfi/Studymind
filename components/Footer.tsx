import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 sm:py-8 mt-12 sm:mt-16 safe-bottom">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-cream-muted text-xs sm:text-sm text-center sm:text-left">
          Built by{" "}
          <span className="text-cream font-medium">Yeasin Santo</span>
          {" · "}
          <span className="text-flame italic" style={{ fontFamily: "var(--font-fraunces)" }}>
            StudyMind AI
          </span>
        </p>
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-cream-muted">
          <Link href="/summarizer" className="hover:text-cream transition-colors">Summarizer</Link>
          <Link href="/quiz"       className="hover:text-cream transition-colors">Quiz</Link>
          <Link href="/flashcards" className="hover:text-cream transition-colors">Flashcards</Link>
        </div>
      </div>
    </footer>
  );
}
