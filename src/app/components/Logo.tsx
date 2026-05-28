import logoSymbol from "../../assets/almorax-symbol.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoSymbol}
        alt=""
        aria-hidden="true"
        className="h-11 w-12 object-contain"
      />
      <span className="text-2xl font-semibold tracking-[0.04em] text-[#0A0F1E]">
        Almora
        <span className="bg-gradient-to-br from-[#8A2BE2] via-[#6A3DFF] to-[#00B2FF] bg-clip-text text-transparent">
          X
        </span>
      </span>
    </div>
  );
}
