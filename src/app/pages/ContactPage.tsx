import { Mail, Send, ShieldCheck } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute left-0 top-28 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute right-0 top-56 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />

        <section className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="pt-6">
            <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Contact Us
            </div>
            <h1
              className="mb-6 text-5xl tracking-tight md:text-6xl"
              style={{ fontWeight: 780, lineHeight: "1.02", color: "#0A0F1E" }}
            >
              Build A Smarter Engagement Engine For Your Advisory Practice.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-600">
              Share a few details, queries, or feedback and we'll get back to you.
            </p>

            <div className="grid gap-4">
              <a
                href="mailto:yashashri@almorax.com"
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#8A2BE2] to-[#00B2FF]">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-500">Email</div>
                  <div className="font-bold text-slate-950">yashashri@almorax.com</div>
                  <div className="mt-1 text-sm font-medium text-slate-500">
                    Co-Founder & Chief Sales Officer
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-sky-600" />
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  We respond with professional business context only, without
                  phone collection or unnecessary sales clutter.
                </p>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_28px_90px_rgba(15,23,42,0.10)] md:p-8">
            <div className="mb-8">
              <h2 className="mb-2 text-2xl font-bold text-slate-950">Send A Message</h2>
              <p className="text-sm leading-6 text-slate-600">
                Share a few details, queries, or feedback and we'll get back to you.
              </p>
            </div>

            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Name
                <input className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Work email
                <input type="email" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100" placeholder="name@company.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Company / firm
                <input className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100" placeholder="Your advisory firm" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Message
                <textarea className="min-h-32 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-300 focus:bg-white focus:ring-4 focus:ring-sky-100" placeholder="Tell us what you want to automate..." />
              </label>
            </div>

            <Button
              type="button"
              className="mt-6 h-12 w-full gap-2 shadow-lg shadow-sky-500/20"
              style={{ background: "linear-gradient(135deg, #8A2BE2, #00B2FF)", color: "white" }}
            >
              Send Message
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}



