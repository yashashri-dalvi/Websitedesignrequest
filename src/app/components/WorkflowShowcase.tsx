import { AlertCircle, Brain, Sparkles, Shield, Send, CheckCircle } from "lucide-react";

export function WorkflowShowcase() {
  const steps = [
    {
      icon: AlertCircle,
      title: "Client Stops SIP",
      description: "System detects when a client pauses or stops their SIP investment",
      color: "#DC2626",
      bgColor: "#FEE2E2"
    },
    {
      icon: Brain,
      title: "AI Detects Inactivity",
      description: "Intelligent analysis identifies the client as at-risk for churn",
      color: "#0EA5E9",
      bgColor: "#DBEAFE"
    },
    {
      icon: Sparkles,
      title: "Localized Campaign Generated",
      description: "AI creates culturally relevant, personalized re-engagement content",
      color: "#8B5CF6",
      bgColor: "#EDE9FE"
    },
    {
      icon: Shield,
      title: "Branding + Compliance Applied",
      description: "Your logo, ARN, and SEBI disclaimers automatically added",
      color: "#059669",
      bgColor: "#D1FAE5"
    },
    {
      icon: Send,
      title: "WhatsApp Blast Triggered",
      description: "One-tap approval sends personalized message to client's WhatsApp",
      color: "#0891B2",
      bgColor: "#CFFAFE"
    },
    {
      icon: CheckCircle,
      title: "Client Re-engages",
      description: "Client responds positively and resumes their investment journey",
      color: "#8B5CF6",
      bgColor: "#D1FAE5"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ 
              fontWeight: 700, 
              lineHeight: '1.1',
              color: '#061526',
              letterSpacing: '-0.02em'
            }}
          >
            From Client Signals to WhatsApp Engagement
            <br />
            <span style={{ color: '#0EA5E9' }}>- Fully Automated</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Watch how AlmoraX saves hours of manual work and revives revenue automatically
          </p>
        </div>

        {/* Workflow Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Desktop View - Horizontal Flow */}
            <div className="hidden lg:grid lg:grid-cols-6 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-2 hover:border-blue-300 transition-colors h-full flex flex-col" style={{ borderColor: '#E2E8F0' }}>
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                      style={{ backgroundColor: step.bgColor }}
                    >
                      <step.icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-sm mb-2" style={{ fontWeight: 600, color: '#061526' }}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="text-center mt-4 text-xl" style={{ fontWeight: 700, color: step.color }}>
                      {i + 1}
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  {i < steps.length - 1 && (
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md border border-slate-200">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile/Tablet View - Vertical Flow */}
            <div className="lg:hidden space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                        style={{ backgroundColor: step.bgColor }}
                      >
                        <step.icon className="w-7 h-7" style={{ color: step.color }} />
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-300 to-blue-100 my-2 min-h-[40px]" />
                      )}
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-lg border-2 flex-1" style={{ borderColor: '#E2E8F0' }}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base" style={{ fontWeight: 600, color: '#061526' }}>
                          {step.title}
                        </h3>
                        <span className="text-sm" style={{ fontWeight: 700, color: step.color }}>
                          {i + 1}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-2" style={{ fontWeight: 700, color: '#0EA5E9' }}>
              90%
            </div>
            <p className="text-sm text-slate-600">Time Saved on Client Outreach</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2" style={{ fontWeight: 700, color: '#8B5CF6' }}>
              3x
            </div>
            <p className="text-sm text-slate-600">Higher Client Re-engagement Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2" style={{ fontWeight: 700, color: '#8B5CF6' }}>
              24/7
            </div>
            <p className="text-sm text-slate-600">Automated Client Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}


