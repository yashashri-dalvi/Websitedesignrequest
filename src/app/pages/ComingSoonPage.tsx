import { ArrowLeft, Sparkles } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

type ComingSoonPageProps = {
  type: "Blog" | "Careers";
};

export function ComingSoonPage({ type }: ComingSoonPageProps) {
  const isBlog = type === "Blog";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute right-10 top-56 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <section className="relative mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_28px_90px_rgba(15,23,42,0.10)] md:p-14">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] shadow-xl shadow-sky-500/20">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
            {type}
          </p>
          <h1
            className="mx-auto mb-6 max-w-3xl text-5xl tracking-tight md:text-6xl"
            style={{ fontWeight: 780, lineHeight: "1.02", color: "#061526" }}
          >
            {isBlog ? "Advisor growth insights are under development." : "The AlmoraX careers page is under development."}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-600">
            {isBlog
              ? "We are building a practical knowledge hub for MFDs, financial distributors, and wealth advisors covering automation, client engagement, branding, and compliance-friendly growth."
              : "We are preparing a clean careers experience for people who want to build modern fintech automation for advisors and financial distribution teams."}
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}


