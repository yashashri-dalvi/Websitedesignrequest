import { AlertCircle, FileText, MessageSquare, Table, Mail, FolderOpen } from "lucide-react";

export function ProblemSection() {
  const tools = [
    { icon: MessageSquare, label: "WhatsApp", color: "#25D366" },
    { icon: FileText, label: "PDFs", color: "#DC2626" },
    { icon: Table, label: "Spreadsheets", color: "#10B981" },
    { icon: Mail, label: "Email", color: "#2563EB" },
    { icon: FolderOpen, label: "CRM", color: "#F59E0B" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 
            className="text-4xl lg:text-5xl mb-6 tracking-tight"
            style={{ 
              fontWeight: 700, 
              lineHeight: '1.1',
              color: '#081120',
              letterSpacing: '-0.02em'
            }}
          >
            Financial Advisors Don't Have a Content Problem.
            <br />
            <span style={{ color: '#2563EB' }}>They Have an Activation Problem.</span>
          </h2>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: AlertCircle,
              title: "Clients Stopping SIPs Silently",
              description: "No notification system to detect when clients pause or stop their investments"
            },
            {
              icon: MessageSquare,
              title: "Manual WhatsApp Outreach",
              description: "Spending hours every day sending individual messages to clients"
            },
            {
              icon: FileText,
              title: "No Follow-Up Systems",
              description: "Missing critical follow-ups leading to client disengagement"
            },
            {
              icon: Table,
              title: "Operational Overload",
              description: "Juggling multiple tasks with no automation or intelligent assistance"
            },
            {
              icon: FolderOpen,
              title: "Disconnected Tools",
              description: "Data scattered across platforms with no unified workflow"
            },
            {
              icon: Mail,
              title: "Inconsistent Engagement",
              description: "Unable to maintain regular, personalized client communication"
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-base mb-2" style={{ fontWeight: 600, color: '#081120' }}>
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fragmented Workflow Visualization */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 lg:p-12 border border-slate-200">
          <div className="text-center mb-8">
            <p className="text-sm text-slate-600 mb-2">Today's Reality</p>
            <h3 className="text-2xl" style={{ fontWeight: 700, color: '#081120' }}>
              Chaotic, Fragmented Workflow
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {tools.map((tool, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex flex-col items-center gap-2">
                  <tool.icon className="w-8 h-8" style={{ color: tool.color }} />
                  <span className="text-xs" style={{ fontWeight: 500, color: '#081120' }}>
                    {tool.label}
                  </span>
                </div>
                {i < tools.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white rounded-xl px-6 py-3 shadow-lg border-2 border-blue-600">
              <p className="text-sm" style={{ fontWeight: 600, color: '#2563EB' }}>
                ↓ Switch to One AI Operating System ↓
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
