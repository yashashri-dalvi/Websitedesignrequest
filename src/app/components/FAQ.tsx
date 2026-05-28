import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is AlmoraX?",
      answer:
        "AlmoraX is an AI automation platform for MFDs, financial distributors, and wealth advisors. It helps teams plan campaigns, apply branding and compliance, coordinate WhatsApp outreach, and track client engagement.",
    },
    {
      question: "Who is AlmoraX built for?",
      answer:
        "It is built for Indian MFDs, financial distributors, wealth advisors, and advisory teams that want a professional client-engagement operating system without adding manual workload.",
    },
    {
      question: "How does WhatsApp automation help?",
      answer:
        "AlmoraX helps prepare segmented WhatsApp communication workflows so advisors can follow up consistently, revive inactive clients, and keep investor conversations organized.",
    },
    {
      question: "Does AlmoraX support compliance workflows?",
      answer:
        "Yes. The platform is designed around compliance-friendly communication with advisor identity, ARN details, disclaimers, and approval-ready campaign previews.",
    },
    {
      question: "Can I use my own branding?",
      answer:
        "Yes. AI Co-Branding applies advisor identity, logo placement, and consistent visual templates so every client touchpoint looks professional and trustworthy.",
    },
    {
      question: "Can teams use AlmoraX?",
      answer:
        "Yes. AlmoraX supports individual advisors as well as firms that need organized campaign planning, analytics, and repeatable engagement workflows.",
    },
  ];

  return (
    <section id="faq" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <div className="mb-4 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            FAQ
          </div>
          <h2
            className="mb-4 text-4xl tracking-tight lg:text-5xl"
            style={{ fontWeight: 750, lineHeight: "1.06", color: "#0A0F1E" }}
          >
            Clear Answers For Serious Advisor Teams.
          </h2>
          <p className="max-w-md text-base leading-7 text-slate-600">
            A compact overview of how AlmoraX supports campaign automation,
            advisor branding, compliance-safe workflows, and client engagement.
          </p>
        </div>

        <Accordion type="single" collapsible className="grid gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm transition-all data-[state=open]:border-sky-200 data-[state=open]:shadow-lg data-[state=open]:shadow-sky-100"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline">
                <span className="text-sm font-bold text-slate-950 sm:text-base">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-7 text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}



