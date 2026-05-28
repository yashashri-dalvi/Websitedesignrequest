import { AlertCircle, Brain, CheckCircle, Send, Shield, Sparkles } from "lucide-react";

export function WorkflowShowcase() {
  const steps = [
    { icon: AlertCircle, title: "Client Stops SIP", copy: "Signal captured", tone: "text-red-500" },
    { icon: Brain, title: "AI Detects Inactivity", copy: "Intent scored", tone: "text-[#8A2BE2]" },
    { icon: Sparkles, title: "Campaign Generated", copy: "Message drafted", tone: "text-[#00B2FF]" },
    { icon: Shield, title: "Branding + Compliance", copy: "ARN applied", tone: "text-[#8A2BE2]" },
    { icon: Send, title: "WhatsApp Triggered", copy: "Ready to send", tone: "text-[#00B2FF]" },
    { icon: CheckCircle, title: "Client Re-Engages", copy: "Tracked in analytics", tone: "text-emerald-500" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#8A2BE2]/10 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#00B2FF]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Workflow Automation
            </div>
            <h2 className="max-w-3xl text-3xl tracking-tight lg:text-5xl" style={{ fontWeight: 760, lineHeight: "1.06", color: "#0A0F1E" }}>
              From Client Signals To WhatsApp Engagement.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            A connected automation pipeline turns investor behavior into
            branded, compliance-ready outreach with clear advisor control.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 shadow-[0_24px_80px_rgba(10,15,30,0.08)] md:p-8">
          <div className="absolute left-10 right-10 top-[6.1rem] hidden h-px bg-gradient-to-r from-transparent via-[#00B2FF] to-transparent xl:block" />
          <div className="absolute left-10 right-10 top-[6.1rem] hidden h-px animate-pulse bg-gradient-to-r from-[#8A2BE2] via-[#00B2FF] to-[#8A2BE2] opacity-40 xl:block" />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {steps.map((step, index) => (
              <div key={step.title} className="group relative">
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_16px_45px_rgba(0,178,255,0.14)] ring-1 ring-slate-200 transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-sky-200">
                  <step.icon className={`h-7 w-7 ${step.tone}`} />
                </div>

                <div className="text-center">
                  <span className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    0{index + 1}
                  </span>
                  <h3 className="mx-auto mb-2 max-w-[11rem] text-base font-bold text-[#0A0F1E]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div>
              <p className="text-sm font-bold text-slate-500">Input Signal</p>
              <p className="mt-1 text-xl font-black text-[#0A0F1E]">Inactive SIP + Low Engagement</p>
            </div>
            <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] text-white md:flex">
              <Send className="h-5 w-5" />
            </div>
            <div className="md:text-right">
              <p className="text-sm font-bold text-slate-500">Output Workflow</p>
              <p className="mt-1 text-xl font-black text-[#0A0F1E]">Advisor-Approved WhatsApp Campaign</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["90%", "Less Repetitive Outreach Work"],
            ["3x", "Clearer Re-Engagement Workflow"],
            ["24/7", "Client Signal Monitoring"],
          ].map(([value, label]) => (
            <div key={value} className="flex items-center gap-4 border-l-2 border-sky-200 pl-5">
              <div className="bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] bg-clip-text text-4xl font-black text-transparent">
                {value}
              </div>
              <p className="text-sm font-semibold leading-6 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
