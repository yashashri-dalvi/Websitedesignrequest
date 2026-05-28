import { BarChart3, CalendarDays, CheckCircle2, MessageSquare, Palette, ShieldCheck, Sparkles } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: CalendarDays,
      title: "Campaign Planner",
      copy: "Turn monthly themes, SIP nudges, tax reminders, and education journeys into an organized advisor calendar.",
      metric: "12 campaigns queued",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Automation",
      copy: "Apply ARN details, disclaimers, risk language, and approval-ready states before every client touchpoint.",
      metric: "98% ready checks",
    },
    {
      icon: Palette,
      title: "AI Co-Branding",
      copy: "Convert every communication into a polished advisor-branded asset with consistent tone and identity.",
      metric: "8 brand templates",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      copy: "Prepare segmented WhatsApp workflows for timely follow-ups without repetitive manual coordination.",
      metric: "245 recipients",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      copy: "Measure responses, reactivation signals, and campaign performance from one advisor growth view.",
      metric: "+34% engagement",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-white px-6 py-16">
      <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-[#00B2FF]/15 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            Advisor Growth Stack
          </div>
          <h2
            className="mb-5 text-4xl tracking-tight lg:text-5xl"
            style={{ fontWeight: 750, lineHeight: "1.06", color: "#0A0F1E" }}
          >
            A Dashboard-Inspired Stack For Advisor Growth.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            The AlmoraX workspace connects planning, compliance, branding,
            WhatsApp workflows, and analytics through one visual operating layer.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50 p-5 shadow-[0_30px_100px_rgba(10,15,30,0.10)]">
              <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#8A2BE2]/15 blur-2xl" />
              <div className="relative mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Advisor Command Center</p>
                  <h3 className="text-2xl font-bold text-[#0A0F1E]">Growth Dashboard</h3>
                </div>
                <span className="rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] px-3 py-1 text-xs font-bold text-white">Live</span>
              </div>

              <div className="relative grid gap-4 md:grid-cols-[1fr_0.8fr]">
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-[#0A0F1E]">Engagement Trend</span>
                    <span className="text-xs font-bold text-sky-600">+34%</span>
                  </div>
                  <div className="flex h-32 items-end gap-2">
                    {[38, 54, 46, 72, 64, 88, 78].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-[#8A2BE2] to-[#00B2FF]" style={{ height: `${height}%`, opacity: 0.55 + index * 0.06 }} />
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  {[
                    ["Campaigns", "12"],
                    ["Recipients", "245"],
                    ["Approvals", "7"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
                      <div className="text-2xl font-black text-[#0A0F1E]">{value}</div>
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-4 rounded-2xl bg-[#071224] p-4 text-white">
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-sky-300" />
                  <span className="text-sm font-bold">AI Recommendation</span>
                </div>
                <p className="text-sm leading-6 text-slate-300">
                  Prioritize 42 inactive SIP clients with a branded WhatsApp revival campaign.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-[#8A2BE2] via-[#00B2FF] to-transparent md:block" />
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={feature.title} className="group relative grid gap-4 rounded-[1.5rem] px-0 py-2 transition-all duration-300 hover:translate-x-1 md:grid-cols-[2.75rem_1fr]">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_10px_35px_rgba(0,178,255,0.16)] ring-1 ring-slate-200">
                    <feature.icon className="h-5 w-5 text-[#00B2FF]" />
                  </div>
                  <div className="rounded-[1.5rem] border border-transparent bg-white/60 p-4 transition-all duration-300 group-hover:border-sky-100 group-hover:bg-sky-50/40">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-[#0A0F1E]">{feature.title}</h3>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-sky-600 shadow-sm">{feature.metric}</span>
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{feature.copy}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="h-4 w-4 text-[#8A2BE2]" />
                      Step 0{index + 1} In The Advisor Growth Workflow
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
