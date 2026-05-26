import { Button } from "./ui/button";
import { Play, TrendingUp, Users, MessageSquare, Calendar, Zap, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 
                className="text-5xl lg:text-6xl tracking-tight"
                style={{ 
                  fontWeight: 700, 
                  lineHeight: '1.1',
                  color: '#081120',
                  letterSpacing: '-0.02em'
                }}
              >
                Revive Silent Clients.
                <br />
                Automate Engagement.
                <br />
                <span style={{ color: '#2563EB' }}>Grow AUM.</span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                AlmoraX helps financial advisors automate client activation, WhatsApp engagement, 
                campaign workflows, branding, and compliance — all from one intelligent AI system.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                style={{ 
                  backgroundColor: '#2563EB', 
                  color: 'white',
                  paddingLeft: '2rem',
                  paddingRight: '2rem',
                  height: '3rem'
                }}
              >
                Book Demo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                style={{
                  height: '3rem',
                  paddingLeft: '2rem',
                  paddingRight: '2rem'
                }}
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Product Tour
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl" style={{ fontWeight: 700, color: '#081120' }}>10,000+</div>
                <div className="text-sm text-slate-600">Active Advisors</div>
              </div>
              <div className="h-12 w-px bg-slate-300" />
              <div>
                <div className="text-2xl" style={{ fontWeight: 700, color: '#081120' }}>₹500Cr+</div>
                <div className="text-sm text-slate-600">AUM Managed</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Dashboard Visual */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm text-slate-600">AI Dashboard</h3>
                  <p className="text-xl" style={{ fontWeight: 600, color: '#081120' }}>Client Activation Center</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm" style={{ fontWeight: 500, color: '#10B981' }}>Live</span>
                </div>
              </div>
              
              {/* Inactive Client Alert */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm" style={{ fontWeight: 600, color: '#081120' }}>12 Inactive Clients Detected</p>
                      <p className="text-xs text-slate-600 mt-1">Last activity: 45+ days ago</p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    style={{ backgroundColor: '#2563EB', color: 'white', fontSize: '0.75rem' }}
                  >
                    Activate
                  </Button>
                </div>
              </div>
              
              {/* WhatsApp Campaign */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm" style={{ fontWeight: 600, color: '#081120' }}>WhatsApp Campaign Ready</p>
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-xs text-slate-600">Diwali SIP Revival Campaign • 245 recipients</p>
                    <div className="mt-3 flex gap-2">
                      <div className="flex-1 h-1.5 bg-blue-200 rounded-full">
                        <div className="w-3/4 h-full bg-blue-600 rounded-full" />
                      </div>
                      <span className="text-xs text-slate-600">75%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Campaign Planner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm" style={{ fontWeight: 600, color: '#081120' }}>AI Campaign Suggestions</p>
                    <div className="mt-2 space-y-2">
                      <div className="text-xs text-slate-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Tax-saving reminder (Due: Jan 31)
                      </div>
                      <div className="text-xs text-slate-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        SIP step-up recommendation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Analytics Card */}
            <div className="absolute -right-4 -bottom-4 bg-white rounded-xl shadow-lg border border-slate-200 p-4 w-48">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs" style={{ fontWeight: 600, color: '#081120' }}>Engagement Up</span>
              </div>
              <div className="text-2xl" style={{ fontWeight: 700, color: '#10B981' }}>+34%</div>
              <div className="text-xs text-slate-600">vs last month</div>
            </div>
            
            {/* Floating AI Badge */}
            <div className="absolute -left-4 top-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs" style={{ fontWeight: 600 }}>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
