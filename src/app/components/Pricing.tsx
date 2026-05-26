import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For individual advisors beginning digital engagement",
      price: "₹2,999",
      period: "per month",
      popular: false,
      features: [
        "AI Campaign Planner access",
        "Up to 100 clients",
        "5 campaigns per month",
        "Basic WhatsApp integration",
        "Email support",
        "Advisor branding",
        "Basic compliance templates"
      ]
    },
    {
      name: "Growth",
      description: "For active advisors scaling client communication",
      price: "₹6,999",
      period: "per month",
      popular: true,
      features: [
        "Everything in Starter",
        "Up to 500 clients",
        "Unlimited campaigns",
        "Advanced WhatsApp automation",
        "Priority support",
        "Custom branding options",
        "Advanced compliance automation",
        "Client segmentation",
        "Analytics dashboard",
        "Early access to new features"
      ]
    },
    {
      name: "Enterprise",
      description: "For advisory firms and teams",
      price: "Custom",
      period: "contact us",
      popular: false,
      features: [
        "Everything in Growth",
        "Unlimited clients",
        "Multi-user team access",
        "Custom integrations",
        "Dedicated account manager",
        "Custom compliance workflows",
        "White-label options",
        "API access",
        "Advanced reporting",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
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
            Simple, Transparent
            <br />
            <span style={{ color: '#2563EB' }}>Pricing</span>
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your practice. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl p-8 border-2 shadow-lg transition-all hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-600 relative lg:-mt-4 lg:mb-4' 
                  : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1"
                  style={{ backgroundColor: '#2563EB', color: 'white' }}
                >
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl mb-2" style={{ fontWeight: 700, color: '#081120' }}>
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-2">
                  <span 
                    className="text-4xl tracking-tight"
                    style={{ fontWeight: 700, color: '#081120' }}
                  >
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{plan.period}</p>
              </div>
              
              <Button 
                className="w-full mb-8"
                size="lg"
                variant={plan.popular ? "default" : "outline"}
                style={plan.popular ? { 
                  backgroundColor: '#2563EB', 
                  color: 'white' 
                } : {}}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
              
              <div className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div 
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-blue-600' : 'bg-emerald-100'
                      }`}
                    >
                      <Check 
                        className={`w-3 h-3 ${
                          plan.popular ? 'text-white' : 'text-emerald-600'
                        }`}
                      />
                    </div>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-block bg-emerald-50 border border-emerald-200 rounded-xl px-6 py-3">
            <p className="text-sm" style={{ fontWeight: 600, color: '#059669' }}>
              ✓ 14-Day Money-Back Guarantee • No Questions Asked
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
