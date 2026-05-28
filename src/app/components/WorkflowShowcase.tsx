import { AlertCircle, Brain, CheckCircle, Send, Shield, Sparkles } from "lucide-react";

export function WorkflowShowcase() {
  const steps = [
    { icon: AlertCircle, title: "Client stops SIP", copy: "Activity signal is captured." },
    { icon: Brain, title: "AI detects inactivity", copy: "Risk and intent are identified." },
    { icon: Sparkles, title: "Campaign generated", copy: "Localized message is drafted." },
    { icon: Shield, title: "Branding + compliance", copy: "ARN and disclaimer are applied." },
    { icon: Send, title: "WhatsApp triggered", copy: "Advisor-approved outreach is prepared." },
    { icon: CheckCircle, title: "Client re-engages", copy: "Response is tracked in analytics." },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#8A2BE2]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              Workflow automation
            </div>
            <h2 className="max-w-3xl text-3xl tracking-tight lg:text-5xl" style={{ fontWeight: 760, lineHeight: "1.06", color: "#0A0F1E" }}>
              From client signals to WhatsApp engagement.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            A clear, advisor-friendly flow that reduces manual effort and turns
            client activity signals into timely engagement.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_24px_70px_rgba(0,178,255,0.16)]"
            >
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br from-[#8A2BE2]/20 to-[#00B2FF]/20 blur-2xl transition-transform group-hover:scale-125" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8A2BE2] via-[#6A3DFF] to-[#00B2FF] shadow-lg shadow-sky-500/20">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">0{i + 1}</span>
                </div>
                <h3 className="mb-2 font-bold text-[#0A0F1E]">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{step.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 md:grid-cols-3">
          {[
            ["90%", "less repetitive outreach work"],
            ["3x", "clearer re-engagement workflow"],
            ["24/7", "client signal monitoring"],
          ].map(([value, label]) => (
            <div key={value} className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <div className="bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] bg-clip-text text-4xl font-black text-transparent">
                {value}
              </div>
              <p className="mt-2 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
