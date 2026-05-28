import { Button } from "./ui/button";
import { Logo } from "./Logo";

const calendlyUrl = "https://calendly.com/yashashri-almorax/30min";

export function Navbar() {
  const isHome = window.location.pathname === "/";
  const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="/" aria-label="AlmoraX home">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href={homeHref("#features")} className="text-sm text-slate-700 transition-colors hover:text-slate-950">
            Features
          </a>
          <a href={homeHref("#pricing")} className="text-sm text-slate-700 transition-colors hover:text-slate-950">
            Pricing
          </a>
          <a href="/blog" className="text-sm text-slate-700 transition-colors hover:text-slate-950">
            Blog
          </a>
          <a href="/careers" className="text-sm text-slate-700 transition-colors hover:text-slate-950">
            Careers
          </a>
          <a href="/contact" className="text-sm text-slate-700 transition-colors hover:text-slate-950">
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
