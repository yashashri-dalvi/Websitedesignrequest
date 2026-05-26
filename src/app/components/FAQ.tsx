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
      answer: "AlmoraX is an AI-powered growth operating system designed specifically for Mutual Fund Distributors (MFDs), wealth advisors, and financial professionals. It automates client activation, engagement, and communication workflows to help you revive inactive clients and grow AUM without manual operational overhead."
    },
    {
      question: "Who is AlmoraX for?",
      answer: "AlmoraX is built for individual financial advisors, MFDs, wealth advisors, and advisory firms in India who want to automate client engagement, scale their communication, and maintain consistent touchpoints with their client base without spending hours on manual outreach."
    },
    {
      question: "How does WhatsApp engagement work?",
      answer: "AlmoraX integrates with WhatsApp to enable one-tap campaign distribution. Once you approve a campaign in the AI Campaign Planner, the system automatically sends personalized messages to segmented client groups via WhatsApp. You maintain full control over what gets sent and when."
    },
    {
      question: "Can AlmoraX help revive inactive SIP clients?",
      answer: "Yes! AlmoraX's AI Detection Engine continuously monitors client behavior and automatically identifies inactive or at-risk clients. It then generates personalized, localized re-engagement campaigns that you can send with one tap to bring clients back into active investment."
    },
    {
      question: "Is compliance supported?",
      answer: "Absolutely. AlmoraX automatically applies SEBI-compliant disclaimers, risk warnings, and regulatory requirements to all communications. Your ARN (AMFI Registration Number) is prominently displayed, and all templates are pre-approved to meet regulatory standards."
    },
    {
      question: "What features are coming soon?",
      answer: "We're continuously rolling out new features including AI Co-Branding, full WhatsApp Automation, CRM Intelligence, advanced Client Segmentation, comprehensive Analytics Dashboard, AI Engagement Assistant, and the SIP Revival Engine. Existing customers get early access to all new features."
    },
    {
      question: "Does AlmoraX support advisor branding?",
      answer: "Yes! AlmoraX automatically applies your logo, brand colors, and professional identity to every campaign and communication. This ensures consistent branding across all client touchpoints while maintaining a professional, trustworthy image."
    },
    {
      question: "Can teams use AlmoraX?",
      answer: "Yes, our Enterprise plan is specifically designed for advisory firms and teams. It includes multi-user access, role-based permissions, collaborative campaign management, and team analytics. Contact our sales team to learn more about team pricing and features."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ 
              fontWeight: 700, 
              lineHeight: '1.1',
              color: '#081120',
              letterSpacing: '-0.02em'
            }}
          >
            Frequently Asked
            <br />
            <span style={{ color: '#2563EB' }}>Questions</span>
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about AlmoraX
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="bg-slate-50 rounded-xl border border-slate-200 px-6 data-[state=open]:bg-white data-[state=open]:border-blue-300"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span style={{ fontWeight: 600, color: '#081120' }}>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@almorax.com"
            className="text-blue-600 hover:text-blue-700"
            style={{ fontWeight: 600 }}
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
