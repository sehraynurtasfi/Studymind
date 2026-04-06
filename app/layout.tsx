import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainSpotlight from "@/components/GrainSpotlight";

export const metadata: Metadata = {
  title: "StudyMind AI — Study Smarter",
  description:
    "AI-powered study tools: note summarizer, quiz generator, and flashcard maker. Turn your notes into knowledge — instantly.",
  keywords: ["study", "AI", "quiz", "summarizer", "notes", "learning", "flashcards"],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "StudyMind AI — Study Smarter",
    description:
      "AI-powered study tools: note summarizer, quiz generator, and flashcard maker.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <GrainSpotlight />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
