import { BarChart3, CalendarDays, MessageSquare, Palette, ShieldCheck } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: CalendarDays,
      title: "Campaign Planner",
      description: "Plan SIP nudges, tax reminders, and monthly investor touchpoints in one clean calendar.",
      accent: "from-[#8A2BE2] to-[#00B2FF]",
      stat: "12",
      label: "Campaigns",
      rows: ["Monthly SIP follow-up", "Tax saving reminder"],
    },
    {
      icon: ShieldCheck,
      title: "Compliance Automation",
      description: "Apply ARN details, disclaimers, risk language, and approval states before outreach.",
      accent: "from-[#00B2FF] to-[#6A3DFF]",
      stat: "98%",
      label: "Ready",
      rows: ["ARN verified", "Risk copy applied"],
    },
    {
      icon: Palette,
      title: "AI Co-Branding",
      description: "Generate advisor-branded communication with consistent identity and premium templates.",
      accent: "from-[#8A2BE2] to-[#C084FC]",
      stat: "8",
      label: "Templates",
      rows: ["Brand kit live", "Tone matched"],
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description: "Prepare segmented WhatsApp workflows for timely, advisor-approved client engagement.",
      accent: "from-[#00B2FF] to-[#22C55E]",
      stat: "245",
      label: "Recipients",
      rows: ["SIP revival", "Ready to send"],
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track responses, inactive-client recovery, and growth signals from every campaign.",
      accent: "from-[#00B2FF] to-[#8A2BE2]",
      stat: "+34%",
      label: "Engagement",
      rows: ["18 replies", "9 reactivated"],
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-white px-6 py-16">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />
      <div className="absolute right-0 top-80 h-64 w-64 rounded-full bg-violet-200/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Advisor Growth Stack
          </div>
          <h2
            className="mb-5 text-4xl tracking-tight lg:text-5xl"
            style={{ fontWeight: 750, lineHeight: "1.06", color: "#0A0F1E" }}
          >
            Plan, Brand, Automate, And Measure Client Engagement.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            AlmoraX combines campaign operations, compliance workflows,
            WhatsApp outreach, advisor branding, and analytics in a focused
            SaaS workspace for MFDs.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_22px_65px_rgba(14,165,233,0.14)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.accent}`} />
              <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${feature.accent} opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-125`} />

              <div className="relative mb-5 flex items-start justify-between gap-3">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.accent} shadow-lg shadow-sky-500/15`}>
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-right">
                  <div className="text-lg font-black leading-none text-[#0A0F1E]">{feature.stat}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{feature.label}</div>
                </div>
              </div>

              <h3 className="relative mb-2 text-lg font-bold tracking-tight text-[#0A0F1E]">
                {feature.title}
              </h3>
              <p className="relative mb-4 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>

              <div className="relative grid gap-2">
                {feature.rows.map((row) => (
                  <div key={row} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                    <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${feature.accent}`} />
                    <span className="text-xs font-semibold text-slate-600">{row}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
