import { BarChart3, Brain, Database, MessageSquare, Palette, Shield } from "lucide-react";

export function AIOperatingSystem() {
  const steps = [
    { icon: Database, title: "Client signals", copy: "Activity, SIP status, segment, and engagement context." },
    { icon: Brain, title: "AI detection", copy: "Finds clients who need nudges, education, or reactivation." },
    { icon: Palette, title: "Campaign creation", copy: "Generates branded, localized communication drafts." },
    { icon: Shield, title: "Compliance layer", copy: "Adds ARN, disclaimers, and approval-ready states." },
    { icon: MessageSquare, title: "WhatsApp workflow", copy: "Prepares segmented engagement for advisor approval." },
    { icon: BarChart3, title: "Analytics", copy: "Tracks responses, activity, and campaign effectiveness." },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-6 py-16">
      <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-[#00B2FF]/15 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              AI operating system
            </div>
            <h2 className="text-3xl tracking-tight lg:text-5xl" style={{ fontWeight: 760, lineHeight: "1.06", color: "#0A0F1E" }}>
              A compact growth engine for advisor engagement.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Replace scattered manual tasks with a connected operating layer that
            plans campaigns, applies branding, checks compliance, and measures
            engagement outcomes.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <article
                key={step.title}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8A2BE2] via-[#6A3DFF] to-[#00B2FF] shadow-lg shadow-sky-500/20">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-300">0{i + 1}</span>
                </div>
                <h3 className="mb-2 font-bold text-[#0A0F1E]">{step.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{step.copy}</p>
              </article>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(10,15,30,0.10)]">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#8A2BE2]/15 blur-2xl" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Live workflow</p>
                  <h3 className="text-xl font-bold text-[#0A0F1E]">Campaign orchestration</h3>
                </div>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600">Synced</span>
              </div>

              <div className="space-y-3">
                {["Detect inactive SIP clients", "Generate branded campaign", "Apply compliance preview", "Prepare WhatsApp segments"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition-all hover:bg-white hover:shadow-md">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#0A0F1E] p-4 text-white">
                <p className="text-sm font-semibold text-sky-200">Outcome</p>
                <p className="mt-1 text-lg font-bold">One advisor-approved campaign, ready to send.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
