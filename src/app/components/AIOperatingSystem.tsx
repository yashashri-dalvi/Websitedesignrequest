import { Database, Brain, Palette, Shield, MessageSquare, BarChart3 } from "lucide-react";

export function AIOperatingSystem() {
  const workflowSteps = [
    {
      icon: Database,
      title: "Client Data / Signals",
      description: "Continuous monitoring of client behavior and investment patterns"
    },
    {
      icon: Brain,
      title: "AI Detection Engine",
      description: "Intelligent analysis identifies inactive clients and opportunities"
    },
    {
      icon: Palette,
      title: "Localized Campaign Creation",
      description: "AI generates culturally relevant, personalized campaigns"
    },
    {
      icon: Palette,
      title: "Advisor Branding Applied",
      description: "Automatic application of your logo, ARN, and brand identity"
    },
    {
      icon: Shield,
      title: "Compliance Added",
      description: "SEBI-compliant disclaimers and regulatory requirements integrated"
    },
    {
      icon: MessageSquare,
      title: "One-Tap WhatsApp Distribution",
      description: "Instant campaign delivery to segmented client groups"
    },
    {
      icon: BarChart3,
      title: "Engagement Analytics",
      description: "Real-time tracking of client responses and campaign performance"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ 
              fontWeight: 700, 
              lineHeight: '1.1',
              color: '#081120',
              letterSpacing: '-0.02em'
            }}
          >
            The AI Operating System
            <br />
            <span style={{ color: '#2563EB' }}>for Advisor Growth</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            AlmoraX transforms engagement into an automated growth engine with intelligent 
            workflows that work 24/7 to keep your clients active.
          </p>
        </div>

        {/* Workflow Architecture */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-emerald-500" />
            
            <div className="space-y-6">
              {workflowSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex items-start gap-6">
                    {/* Icon with connector */}
                    <div className="relative z-10">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ 
                          backgroundColor: i < 2 ? '#2563EB' : i < 5 ? '#3B82F6' : '#10B981'
                        }}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-slate-200">
                      <h3 className="text-lg mb-2" style={{ fontWeight: 600, color: '#081120' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  {i < workflowSteps.length - 1 && (
                    <div className="absolute left-8 -bottom-3 flex items-center justify-center w-16">
                      <div className="text-2xl text-blue-500">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              title: "Client Activation Infrastructure",
              description: "Automatically detect and re-engage inactive clients before they churn"
            },
            {
              title: "Campaign Intelligence Engine",
              description: "AI-powered content creation that resonates with Indian investors"
            },
            {
              title: "Growth Automation Layer",
              description: "Turn hours of manual work into one-tap automated workflows"
            }
          ].map((benefit, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors"
            >
              <h4 className="text-base mb-3" style={{ fontWeight: 600, color: '#2563EB' }}>
                {benefit.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
