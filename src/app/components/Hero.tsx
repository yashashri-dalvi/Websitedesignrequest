import { BarChart3, Calendar, MessageSquare, Play, ShieldCheck, Sparkles, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";

const calendlyUrl = "https://calendly.com/yashashri-almorax/30min";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-16 pt-32">
      <div className="absolute left-8 top-24 h-72 w-72 rounded-full bg-[#8A2BE2]/15 blur-3xl" />
      <div className="absolute right-8 top-24 h-80 w-80 rounded-full bg-[#00B2FF]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            AI automation for MFD growth
          </div>

          <h1
            className="max-w-3xl text-5xl tracking-tight lg:text-6xl"
            style={{ fontWeight: 780, lineHeight: "1.02", color: "#0A0F1E" }}
          >
            Revive Silent Clients. Automate Engagement.{" "}
            <span className="bg-gradient-to-r from-[#8A2BE2] via-[#6A3DFF] to-[#00B2FF] bg-clip-text text-transparent">
              Grow AUM.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            AlmoraX helps MFDs, financial distributors, and wealth advisors run
            branded, compliance-friendly WhatsApp campaigns from one intelligent
            growth workspace.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => window.open(calendlyUrl, "_blank", "noopener,noreferrer")}
              className="h-12 rounded-xl px-7 shadow-xl shadow-sky-500/20 transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #8A2BE2, #6A3DFF, #00B2FF)", color: "white" }}
            >
              Book Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-slate-200 px-7 transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Product Tour
            </Button>
          </div>
        </div>

        <div className="relative animate-float-slow">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#8A2BE2]/20 via-transparent to-[#00B2FF]/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_30px_100px_rgba(10,15,30,0.14)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Advisor Growth Console</p>
                <h3 className="text-xl font-bold text-[#0A0F1E]">Client Activation Center</h3>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                AI Powered
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <Users className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A0F1E]">Inactive Clients</p>
                    <p className="text-xs text-slate-500">12 need attention</p>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-red-100">
                  <div className="h-full w-2/3 rounded-full bg-red-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <MessageSquare className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A0F1E]">WhatsApp Ready</p>
                    <p className="text-xs text-slate-500">245 recipients</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="h-7 flex-1 rounded-full bg-white" />
                  <span className="h-7 w-16 rounded-full bg-[#00B2FF]" />
                </div>
              </div>

              <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <Calendar className="h-5 w-5 text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A0F1E]">Campaign Planner</p>
                    <p className="text-xs text-slate-500">3 drafts scheduled</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[60, 90, 45, 75].map((height) => (
                    <div key={height} className="flex h-16 items-end rounded-lg bg-white p-1">
                      <div
                        className="w-full rounded-md bg-gradient-to-t from-[#8A2BE2] to-[#00B2FF]"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#8A2BE2]" />
                    <span className="text-sm font-bold text-[#0A0F1E]">Compliance</span>
                  </div>
                  <Zap className="h-4 w-4 text-[#00B2FF]" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-white" />
                  <div className="h-2 w-4/5 rounded-full bg-white" />
                  <div className="h-8 rounded-xl bg-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 right-6 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:block">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-[#00B2FF]" />
              <span className="text-xs font-bold text-slate-700">Engagement +34%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
