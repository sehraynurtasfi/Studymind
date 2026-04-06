"use client";
import { useState } from "react";

interface Question { question: string; options: string[]; answer: string; }
interface AnswerState { [qi: number]: string; }

export default function QuizPage() {
  const [text,      setText]     = useState("");
  const [loading,   setLoading]  = useState(false);
  const [questions, setQuestions]= useState<Question[]>([]);
  const [answers,   setAnswers]  = useState<AnswerState>({});
  const [error,     setError]    = useState("");

  async function handleGenerate() {
    if (!text.trim()) return;
    setLoading(true); setQuestions([]); setAnswers({}); setError("");
    try {
      const res  = await fetch("/api/quiz", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ text }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setQuestions(data.questions);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally { setLoading(false); }
  }

  function handleAnswer(qi: number, option: string) {
    if (answers[qi] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qi]: option }));
  }

  const score      = questions.filter((q,i) => answers[i] === q.answer).length;
  const allAnswered = questions.length > 0 && Object.keys(answers).length === questions.length;

  return (
    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Glow */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] rounded-full blur-[80px] sm:blur-[100px] opacity-15"
        style={{ background:"radial-gradient(circle,#4cc9f0 0%,transparent 70%)" }} />

      {/* Header */}
      <div className="mb-8 sm:mb-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/25 bg-cyan/8 text-cyan text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-5">
          🧠 Quiz Generator
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-cream leading-tight mb-3" style={{ fontFamily:"var(--font-fraunces)" }}>
          Test what you <em className="italic text-cyan">know.</em>
        </h1>
        <p className="text-cream-muted text-sm sm:text-base">
          Paste study material and get 5 multiple choice questions. Click to reveal the answer.
        </p>
      </div>

      {/* Input */}
      {questions.length === 0 && (
        <div className="animate-fade-up stagger-1">
          <div className="relative rounded-2xl border border-white/8 bg-surface overflow-hidden focus-within:border-white/20 transition-colors duration-200">
            <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-1 border-b border-white/5">
              <span className="text-cream-muted text-xs font-medium uppercase tracking-widest">Study Material</span>
            </div>
            <textarea
              value={text} onChange={(e) => setText(e.target.value)}
              placeholder="Paste your study material, chapter notes, or any text you want to be quizzed on..."
              className="w-full bg-transparent text-cream placeholder-white/20 text-sm leading-relaxed p-4 sm:p-5 outline-none resize-none"
              style={{ minHeight:"clamp(180px,30vw,260px)" }}
              disabled={loading}
            />
          </div>
          <button
            onClick={handleGenerate} disabled={loading || !text.trim()}
            className="btn-glow mt-3 sm:mt-4 w-full py-3.5 sm:py-4 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background:loading||!text.trim() ? "rgba(76,201,240,0.2)" : "linear-gradient(135deg,#4cc9f0 0%,#7b5ea7 100%)", color:loading||!text.trim() ? "#6b7280" : "#09090f" }}
          >
            {loading
              ? <span className="flex items-center justify-center gap-3"><span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin"/>AI is creating your quiz…</span>
              : "✦ Generate Quiz"
            }
          </button>
          {error && <div className="mt-4 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm">{error}</div>}
        </div>
      )}

      {/* Score banner */}
      {allAnswered && (
        <div className="mb-6 sm:mb-8 px-4 sm:px-6 py-4 sm:py-5 rounded-2xl border border-white/8 bg-surface flex items-center justify-between animate-fade-up">
          <div>
            <p className="text-cream-muted text-xs uppercase tracking-widest mb-1">Your Score</p>
            <p className="text-3xl sm:text-4xl font-semibold text-cream" style={{ fontFamily:"var(--font-fraunces)" }}>
              {score}<span className="text-cream-muted text-xl sm:text-2xl">/{questions.length}</span>
            </p>
          </div>
          <div className="text-right">
            <div className={`text-xl sm:text-2xl mb-1 ${score>=4?"text-green-400":score>=2?"text-yellow-400":"text-red-400"}`}>
              {score>=4?"🏆":score>=2?"📚":"💪"}
            </div>
            <p className="text-cream-muted text-xs">{score>=4?"Excellent!":score>=2?"Good effort!":"Keep studying!"}</p>
          </div>
        </div>
      )}

      {/* Quiz cards */}
      {questions.map((q, qi) => {
        const selected = answers[qi];
        const answered = selected !== undefined;
        return (
          <div key={qi} className="mb-4 sm:mb-5 rounded-2xl border border-white/8 bg-surface overflow-hidden animate-fade-up" style={{ animationDelay:`${qi*0.08}s` }}>
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5 flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold flex items-center justify-center mt-0.5">
                Q{qi+1}
              </span>
              <p className="text-cream text-sm font-medium leading-snug">{q.question}</p>
            </div>
            <div className="p-3 sm:p-4 grid gap-2">
              {q.options.map((opt, oi) => {
                let cls = "option-btn w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-white/8 text-cream-muted ";
                if (answered) {
                  if (opt === q.answer) cls += "correct border-green-500/50 bg-green-500/10 !text-green-300 font-medium";
                  else if (opt === selected) cls += "wrong border-red-500/50 bg-red-500/10 !text-red-300";
                  else cls += "opacity-40";
                }
                return (
                  <button key={oi} className={cls} onClick={() => handleAnswer(qi, opt)} disabled={answered}>
                    <span className="inline-flex items-center gap-2 sm:gap-3">
                      <span className="w-5 h-5 rounded-md border border-current/30 flex items-center justify-center text-xs flex-shrink-0">
                        {String.fromCharCode(65+oi)}
                      </span>
                      <span className="text-xs sm:text-sm">{opt}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {questions.length > 0 && (
        <button onClick={() => { setQuestions([]); setText(""); setAnswers({}); }} className="mt-2 text-cream-muted text-sm hover:text-cream transition-colors flex items-center gap-1.5 py-2">
          ← Generate a new quiz
        </button>
      )}
    </div>
  );
}
