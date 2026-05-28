import logoUrl from "../../assets/almorax-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoUrl}
        alt="AlmoraX"
        className="h-10 w-10 rounded-xl object-cover shadow-sm ring-1 ring-slate-200"
      />
      <div className="leading-none">
        <div className="text-xl tracking-tight" style={{ fontWeight: 700, color: "#061526" }}>
          Almora<span className="bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent">X</span>
        </div>
        <div className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:block">
          Finance AI Automation
        </div>
      </div>
    </div>
  );
}


