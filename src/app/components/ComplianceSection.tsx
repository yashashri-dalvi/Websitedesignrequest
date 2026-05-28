import { Shield, Award, FileCheck, UserCheck } from "lucide-react";

export function ComplianceSection() {
  const features = [
    {
      icon: Award,
      title: "Advisor Branding Consistency",
      description: "Your logo, color scheme, and brand identity automatically applied to every communication"
    },
    {
      icon: FileCheck,
      title: "Automated Disclaimers",
      description: "SEBI-mandated disclaimers and risk warnings added to all investment communications"
    },
    {
      icon: UserCheck,
      title: "ARN Integration",
      description: "Your AMFI Registration Number prominently displayed on all client-facing materials"
    },
    {
      icon: Shield,
      title: "SEBI-Safe Workflows",
      description: "All templates and campaigns pre-approved to meet regulatory compliance requirements"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ 
              fontWeight: 700, 
              lineHeight: '1.1',
              color: '#061526',
              letterSpacing: '-0.02em'
            }}
          >
            Built for
            <br />
            <span style={{ color: '#0EA5E9' }}>Trust, Branding & Compliance</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Maintain professional standards while staying compliant with all regulatory requirements
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 hover:border-blue-300 transition-colors"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: '#DBEAFE' }}
              >
                <feature.icon className="w-7 h-7" style={{ color: '#0EA5E9' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ fontWeight: 600, color: '#061526' }}>
                {feature.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Preview Section */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 lg:p-12 border border-slate-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Preview Card */}
            <div>
              <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white" style={{ fontWeight: 700 }}>A</span>
                    </div>
                    <div>
                      <div className="text-sm" style={{ fontWeight: 600, color: '#061526' }}>
                        Advisor Name
                      </div>
                      <div className="text-xs text-slate-600">ARN-123456</div>
                    </div>
                  </div>
                  <Shield className="w-5 h-5 text-emerald-500" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm" style={{ fontWeight: 600, color: '#061526' }}>
                      Tax-Saving Investment Reminder
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Dear Client, as the financial year approaches its end, consider maximizing 
                      your tax-saving investments under Section 80C...
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <FileCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-900">
                        <span style={{ fontWeight: 600 }}>Disclaimer:</span> Mutual fund investments 
                        are subject to market risks. Please read all scheme-related documents carefully.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-emerald-700" style={{ fontWeight: 500 }}>
                      Compliance Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Benefits List */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 700, color: '#061526' }}>
                  Professional & Trustworthy
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Every communication maintains your professional image while meeting all 
                  regulatory requirements automatically.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Consistent brand identity across all client touchpoints",
                  "Automatic regulatory compliance verification",
                  "Professional templates that build client trust",
                  "ARN and disclaimer placement optimized for visibility"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


