import { ArrowRight, CheckCircle2, Clock, FileText, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

export function ProblemSection() {
  const rows = [
    {
      manual: "Manual Follow-Ups Across WhatsApp, Sheets, And Email",
      automated: "One AI Workflow Prioritizes The Right Client Conversation",
    },
    {
      manual: "Branding, ARN Details, And Disclaimers Added Late",
      automated: "Compliance-Ready Communication Is Prepared Upfront",
    },
    {
      manual: "Campaign Performance Is Hard To Track",
      automated: "Engagement Signals Flow Back Into A Live Advisor Dashboard",
    },
  ];

  const manualTools = [
    { icon: MessageSquare, label: "WhatsApp" },
    { icon: FileText, label: "PDFs" },
    { icon: Clock, label: "Manual Lists" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#8A2BE2]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
              Today's Reality
            </div>
            <h2 className="text-3xl tracking-tight lg:text-5xl" style={{ fontWeight: 760, lineHeight: "1.06", color: "#0A0F1E" }}>
              Manual Advisor Workflows Slow Client Activation.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            MFDs and wealth advisors do not need more disconnected tools. They
            need a clear operating layer that turns scattered client activity
            into compliant, branded, and measurable engagement.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50/60 p-5 shadow-[0_24px_80px_rgba(10,15,30,0.08)] md:p-7">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent max-md:hidden" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Before AlmoraX</p>
                  <h3 className="text-2xl font-bold text-[#0A0F1E]">Fragmented Manual Work</h3>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {manualTools.map((tool) => (
                  <span key={tool.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600">
                    <tool.icon className="h-4 w-4" />
                    {tool.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#00B2FF] text-white shadow-lg shadow-sky-500/20">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-500">With AlmoraX AI</p>
                  <h3 className="text-2xl font-bold text-[#0A0F1E]">Connected Growth Workflow</h3>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-3 gap-2">
                {["Detect", "Approve", "Measure"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 px-3 py-3 text-center shadow-sm">
                    <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF]" />
                    <span className="text-xs font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-2 space-y-3">
            {rows.map((row) => (
              <div key={row.manual} className="grid items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-sm backdrop-blur md:grid-cols-[1fr_auto_1fr]">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-slate-300" />
                  {row.manual}
                </div>
                <ArrowRight className="mx-auto hidden h-4 w-4 text-sky-400 md:block" />
                <div className="flex items-center gap-3 text-sm font-bold text-[#0A0F1E]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00B2FF]" />
                  {row.automated}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white/80 px-5 py-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#8A2BE2]" />
              <span className="text-sm font-bold text-[#0A0F1E]">Compliance-Friendly Client Activation</span>
            </div>
            <span className="rounded-full bg-sky-50 px-4 py-2 text-xs font-bold text-sky-600">Built For MFD Workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
}
