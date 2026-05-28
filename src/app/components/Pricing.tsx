import { Check } from "lucide-react";
import { Button } from "./ui/button";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For individual MFDs testing AI automation for investor engagement.",
      price: "Trial Plan",
      period: "guided onboarding",
      features: [
        "Campaign Planner access",
        "Advisor co-branding setup",
        "WhatsApp campaign workflow",
        "Basic compliance templates",
        "Email support",
      ],
    },
    {
      name: "Growth",
      description: "For active distributors scaling campaigns, automation, and analytics.",
      price: "Custom",
      period: "based on advisory scale",
      popular: true,
      features: [
        "Everything in Starter",
        "Unlimited campaign planning",
        "Advanced WhatsApp automation",
        "Compliance automation for MFDs",
        "Analytics dashboard",
        "Priority implementation support",
      ],
    },
    {
      name: "Enterprise",
      description: "For advisory firms and financial distribution teams.",
      price: "Custom",
      period: "team workflows",
      features: [
        "Multi-user team access",
        "Custom advisor branding",
        "Workflow configuration",
        "Advanced reporting",
        "Dedicated account support",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            Pricing
          </div>
          <h2
            className="mb-4 text-4xl tracking-tight lg:text-5xl"
            style={{ fontWeight: 760, lineHeight: "1.06", color: "#0A0F1E" }}
          >
            Flexible plans for AI automation for mutual fund distributors.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Start with a guided trial or speak with us for a custom advisor
            growth platform plan.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative overflow-hidden rounded-[2rem] border bg-white p-7 shadow-[0_18px_60px_rgba(10,15,30,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(0,178,255,0.16)] ${
                plan.popular ? "border-sky-200 ring-4 ring-sky-50" : "border-slate-200"
              }`}
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-[#8A2BE2]/15 to-[#00B2FF]/15 blur-2xl transition-transform group-hover:scale-125" />
              {plan.popular && (
                <span className="relative mb-5 inline-flex rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}

              <div className="relative">
                <h3 className="mb-2 text-2xl font-bold text-[#0A0F1E]">{plan.name}</h3>
                <p className="mb-6 min-h-14 text-sm leading-6 text-slate-600">{plan.description}</p>
                <div className="mb-1 text-4xl font-black tracking-tight text-[#0A0F1E]">
                  {plan.price}
                </div>
                <p className="mb-6 text-sm font-semibold text-slate-500">{plan.period}</p>

                <Button
                  className="mb-7 h-11 w-full rounded-xl transition-all hover:-translate-y-0.5"
                  style={{
                    background: plan.popular
                      ? "linear-gradient(135deg, #8A2BE2, #6A3DFF, #00B2FF)"
                      : "#FFFFFF",
                    color: plan.popular ? "white" : "#0A0F1E",
                    border: plan.popular ? "0" : "1px solid #E6E6E6",
                  }}
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Contact Us
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sky-50">
                        <Check className="h-3 w-3 text-[#00B2FF]" />
                      </span>
                      <span className="text-sm leading-6 text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
