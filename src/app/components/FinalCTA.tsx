import { Button } from "./ui/button";
import { Sparkles, TrendingUp, Users } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl lg:text-5xl mb-6 tracking-tight text-white"
            style={{ 
              fontWeight: 700, 
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Your Clients Should Never
            <br />
            Go Silent Again.
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            AlmoraX helps advisors automate engagement, revive inactive clients, and stay 
            consistently top-of-mind — without operational overload.
          </p>
        </div>

        {/* Key Benefits Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Sparkles, text: "AI-Powered Automation" },
            { icon: TrendingUp, text: "Revenue Growth" },
            { icon: Users, text: "Client Retention" }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-2"
            >
              <item.icon className="w-4 h-4 text-white" />
              <span className="text-sm text-white" style={{ fontWeight: 500 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-700 shadow-xl"
            style={{
              height: '3.5rem',
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              fontSize: '1.125rem',
              fontWeight: 600
            }}
          >
            Book Your Demo
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10"
            style={{
              height: '3.5rem',
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              fontSize: '1.125rem'
            }}
          >
            View Pricing
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
