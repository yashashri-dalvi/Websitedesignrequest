import logoSymbol from "../../assets/almorax-symbol.png";

export function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoSymbol}
        alt=""
        aria-hidden="true"
        className="h-11 w-12 object-contain"
      />
      <div className="flex items-center gap-3">
        <span className={`text-2xl font-semibold tracking-[0.04em] ${onDark ? "text-white" : "text-[#0A0F1E]"}`}>
          Almora
          <span className="bg-gradient-to-br from-[#8A2BE2] via-[#6A3DFF] to-[#00B2FF] bg-clip-text text-transparent">
            X
          </span>
        </span>
        <span className={`hidden text-[10px] font-semibold uppercase tracking-[0.28em] md:inline ${onDark ? "text-slate-300" : "text-slate-500"}`}>
          <span className="text-[#A855F7]">Finance</span>
          <span className="mx-2 text-[#8A2BE2]">|</span>
          <span className="text-[#00B2FF]">AI</span>
          <span className="mx-2 text-[#00B2FF]">|</span>
          <span className={onDark ? "text-white" : "text-[#0A0F1E]"}>Automation</span>
        </span>
      </div>
    </div>
  );
}
