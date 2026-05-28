import { AlertCircle, FileText, FolderOpen, Mail, MessageSquare, Palette, Table } from "lucide-react";

export function ProblemSection() {
  const pains = [
    ["Silent SIP pauses", "Clients disengage before advisors can respond."],
    ["Manual outreach", "WhatsApp follow-ups consume hours every week."],
    ["Disconnected tools", "Campaigns, data, branding, and compliance live apart."],
  ];

  const tools = [
    { icon: MessageSquare, label: "WhatsApp", color: "#25D366" },
    { icon: FileText, label: "PDFs", color: "#DC2626" },
    { icon: Palette, label: "Canva", color: "#8A2BE2" },
    { icon: Table, label: "Sheets", color: "#00B2FF" },
    { icon: Mail, label: "Email", color: "#2563EB" },
    { icon: FolderOpen, label: "CRM", color: "#F59E0B" },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            MFDs & wealth advisors
          </div>
          <h2 className="mb-5 text-3xl tracking-tight lg:text-5xl" style={{ fontWeight: 760, lineHeight: "1.06", color: "#0A0F1E" }}>
            The real problem is not content. It is client activation.
          </h2>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            AlmoraX gives financial distributors a structured engagement layer
            for client follow-ups, campaign planning, branded communication, and
            compliance-friendly distribution.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pains.map(([title, description], i) => (
            <article
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8A2BE2] to-[#00B2FF] text-white shadow-lg shadow-sky-500/20">
                <AlertCircle className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-bold text-[#0A0F1E]">{title}</h3>
              <p className="text-sm leading-6 text-slate-600">{description}</p>
              <div className="mt-4 h-1 rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] transition-all duration-500 group-hover:w-full" style={{ width: `${45 + i * 18}%` }} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-[0_18px_60px_rgba(10,15,30,0.06)] md:p-7">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-slate-500">Today's Reality</p>
            <h3 className="text-2xl font-bold text-[#0A0F1E]">Fragmented work across too many tools</h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Advisors switch contexts repeatedly instead of running one clear
            engagement workflow.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool, i) => (
            <div
              key={tool.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#8A2BE2] to-[#00B2FF] opacity-0 transition-opacity group-hover:opacity-100" />
              <tool.icon className="mx-auto mb-3 h-7 w-7 transition-transform group-hover:scale-110" style={{ color: tool.color }} />
              <span className="text-sm font-bold text-[#0A0F1E]">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
