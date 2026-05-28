import { BarChart3, CalendarDays, MessageSquare, Palette, ShieldCheck } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: CalendarDays,
      title: "Campaign Planner",
      description:
        "Plan monthly investor touchpoints, SIP nudges, tax-saving reminders, and festival campaigns from one organized calendar.",
      visual: "Calendar",
      accent: "from-[#8A2BE2] to-[#00B2FF]",
      details: ["Recurring schedules", "AI campaign drafts", "Investor-ready reminders"],
    },
    {
      icon: ShieldCheck,
      title: "Compliance Automation",
      description:
        "Apply disclaimers, risk language, ARN details, and approval-ready communication checks before campaigns go out.",
      visual: "Verified",
      accent: "from-[#00B2FF] to-[#00B2FF]",
      details: ["ARN placement", "Disclaimer blocks", "Approval states"],
    },
    {
      icon: Palette,
      title: "AI Co-Branding",
      description:
        "Turn every message into a professional advisor-branded asset with consistent identity, logo placement, and tone.",
      visual: "Brand Kit",
      accent: "from-[#8A2BE2] to-[#C084FC]",
      details: ["Logo lockups", "Advisor identity", "Premium templates"],
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description:
        "Prepare segmented WhatsApp campaigns for client groups and reduce manual follow-ups with structured workflows.",
      visual: "WhatsApp",
      accent: "from-[#00B2FF] to-[#22C55E]",
      details: ["Client groups", "One-tap sends", "Follow-up flows"],
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Measure engagement, campaign response, inactive-client recovery, and growth signals in a clean advisor dashboard.",
      visual: "Insights",
      accent: "from-[#00B2FF] to-[#8A2BE2]",
      details: ["Engagement metrics", "Campaign performance", "Recovery signals"],
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-white px-6 py-16">
      <div className="absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute right-0 top-80 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Advisor growth stack
          </div>
          <h2
            className="mb-6 text-4xl tracking-tight lg:text-5xl"
            style={{
              fontWeight: 750,
              lineHeight: "1.06",
              color: "#0A0F1E",
              letterSpacing: "-0.02em",
            }}
          >
            Everything MFDs need to plan, brand, automate, and measure client engagement.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            AlmoraX brings campaign operations, compliance workflows, WhatsApp outreach,
            advisor branding, and performance visibility into one premium SaaS workspace.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className={`group relative min-h-[330px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_28px_80px_rgba(14,165,233,0.18)] ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${feature.accent}`} />
              <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${feature.accent} opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-125`} />

              <div className="mb-6 flex items-center justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} shadow-lg shadow-sky-500/20`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                  {feature.visual}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-950">
                {feature.title}
              </h3>
              <p className="mb-6 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>

              <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <div className="mb-3 flex items-end gap-2">
                  <div className={`h-16 w-5 rounded-t-lg bg-gradient-to-t ${feature.accent}`} />
                  <div className={`h-10 w-5 rounded-t-lg bg-gradient-to-t ${feature.accent} opacity-70`} />
                  <div className={`h-20 w-5 rounded-t-lg bg-gradient-to-t ${feature.accent} opacity-90`} />
                  <div className="ml-auto h-9 w-24 rounded-full border border-slate-200 bg-white" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 rounded-full bg-slate-200" />
                  <div className="h-2 w-2/3 rounded-full bg-slate-200" />
                </div>
              </div>

              <ul className="space-y-3">
                {feature.details.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${feature.accent}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



