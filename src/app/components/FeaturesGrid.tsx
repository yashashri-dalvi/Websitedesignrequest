import { Calendar, Palette, MessageSquare, Database, Shield, Users, BarChart3, Zap, Target } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function FeaturesGrid() {
  const activeFeature = {
    icon: Calendar,
    title: "AI Campaign Planner",
    description: "Your operational center for advisor engagement",
    features: [
      "Campaign scheduling & automation",
      "Localized messaging for Indian investors",
      "WhatsApp campaign planning",
      "Recurring engagement workflows",
      "Smart reminders & follow-ups",
      "AI-generated campaign suggestions",
      "Engagement calendar view",
      "Investor communication workflows"
    ]
  };

  const comingSoonFeatures = [
    {
      icon: Palette,
      title: "AI Co-Branding",
      description: "Automatic application of your logo, ARN, and brand identity to all communications"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description: "One-tap broadcast campaigns with intelligent client segmentation"
    },
    {
      icon: Database,
      title: "CRM Intelligence",
      description: "Smart client data management with AI-powered insights and recommendations"
    },
    {
      icon: Shield,
      title: "Compliance Automation",
      description: "SEBI-compliant disclaimers and regulatory requirements auto-applied"
    },
    {
      icon: Users,
      title: "Client Segmentation",
      description: "AI-driven client categorization based on behavior and engagement patterns"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time engagement metrics, campaign performance, and AUM tracking"
    },
    {
      icon: Zap,
      title: "AI Engagement Assistant",
      description: "Intelligent suggestions for client outreach and engagement timing"
    },
    {
      icon: Target,
      title: "SIP Revival Engine",
      description: "Automated detection and re-activation of stopped or paused SIP clients"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ 
              fontWeight: 700, 
              lineHeight: '1.1',
              color: '#081120',
              letterSpacing: '-0.02em'
            }}
          >
            Powerful Features,
            <br />
            <span style={{ color: '#2563EB' }}>Launching Soon</span>
          </h2>
          <p className="text-lg text-slate-600">
            Start with our AI Campaign Planner today. More intelligent features rolling out continuously.
          </p>
        </div>

        {/* Active Feature - Highlighted */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-300 shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <activeFeature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl" style={{ fontWeight: 700, color: '#081120' }}>
                      {activeFeature.title}
                    </h3>
                    <Badge 
                      className="text-xs px-3 py-1"
                      style={{ backgroundColor: '#10B981', color: 'white' }}
                    >
                      Available Now
                    </Badge>
                  </div>
                  <p className="text-base text-slate-700">
                    {activeFeature.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {activeFeature.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              style={{ 
                backgroundColor: '#2563EB', 
                color: 'white'
              }}
            >
              Start Planning Campaigns
            </Button>
          </div>
        </div>

        {/* Coming Soon Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comingSoonFeatures.map((feature, i) => (
            <div 
              key={i}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 relative overflow-hidden opacity-75 hover:opacity-90 transition-opacity"
            >
              <Badge 
                className="absolute top-4 right-4 text-xs"
                variant="secondary"
              >
                Coming Soon
              </Badge>
              
              <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-slate-500" />
              </div>
              
              <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#64748B' }}>
                {feature.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-sm text-slate-600 mb-4">
            Want early access to new features?
          </p>
          <Button variant="outline" size="lg">
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
