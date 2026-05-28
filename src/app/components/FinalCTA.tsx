import { Sparkles, TrendingUp, Users } from "lucide-react";
import { Button } from "./ui/button";

const calendlyUrl = "https://calendly.com/yashashri-almorax/30min";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20">
      <div className="absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-[#00B2FF]/20 blur-3xl" />
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 text-center shadow-[0_28px_90px_rgba(10,15,30,0.10)] md:p-12">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#8A2BE2]/15 blur-3xl" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#00B2FF]/20 blur-3xl" />

          <div className="relative">
            <div className="mb-5 inline-flex rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              Client engagement, automated
            </div>
            <h2
              className="mx-auto mb-5 max-w-3xl text-4xl tracking-tight lg:text-5xl"
              style={{ fontWeight: 780, lineHeight: "1.06", color: "#0A0F1E" }}
            >
              Your clients should never go silent again.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-600">
              AlmoraX helps MFDs and wealth advisors automate engagement,
              revive inactive clients, and stay consistently top-of-mind.
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {[
                { icon: Sparkles, text: "AI automation" },
                { icon: TrendingUp, text: "Growth workflows" },
                { icon: Users, text: "Client retention" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <item.icon className="h-4 w-4 text-[#00B2FF]" />
                  {item.text}
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={() => window.open(calendlyUrl, "_blank", "noopener,noreferrer")}
              className="h-12 rounded-xl px-8 shadow-xl shadow-sky-500/20 transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #8A2BE2, #6A3DFF, #00B2FF)", color: "white" }}
            >
              Book Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
