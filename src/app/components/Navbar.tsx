import { Button } from "./ui/button";
import { Logo } from "./Logo";

const calendlyUrl = "https://calendly.com/yashashri-almorax/30min";

export function Navbar() {
  const isHome = window.location.pathname === "/";
  const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071224]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" aria-label="AlmoraX home">
          <Logo onDark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href={homeHref("#features")} className="text-sm text-slate-200 transition-colors hover:text-white">
            Features
          </a>
          <a href={homeHref("#pricing")} className="text-sm text-slate-200 transition-colors hover:text-white">
            Pricing
          </a>
          <a href="/blog" className="text-sm text-slate-200 transition-colors hover:text-white">
            Blog
          </a>
          <a href="/contact" className="text-sm text-slate-200 transition-colors hover:text-white">
            Contact
          </a>
        </div>

        <Button
          className="rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:-translate-y-0.5"
          onClick={() => window.open(calendlyUrl, "_blank", "noopener,noreferrer")}
          style={{ background: "linear-gradient(135deg, #8A2BE2, #6A3DFF, #00B2FF)", color: "white" }}
        >
          Book Demo
        </Button>
      </div>
    </nav>
  );
}
