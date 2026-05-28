import { Logo } from "./Logo";
import { Button } from "./ui/button";

export function Navbar() {
  const isHome = window.location.pathname === "/";
  const homeHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" aria-label="AlmoraX home">
          <Logo />
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href={homeHref("#features")} className="text-sm text-slate-700 hover:text-slate-950 transition-colors">
            Features
          </a>
          <a href={homeHref("#pricing")} className="text-sm text-slate-700 hover:text-slate-950 transition-colors">
            Pricing
          </a>
          <a href="/blog" className="text-sm text-slate-700 hover:text-slate-950 transition-colors">
            Blog
          </a>
          <a href="/careers" className="text-sm text-slate-700 hover:text-slate-950 transition-colors">
            Careers
          </a>
          <a href="/contact" className="text-sm text-slate-700 hover:text-slate-950 transition-colors">
            Contact
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            className="shadow-lg shadow-sky-500/20"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #0EA5E9)', color: 'white' }}
          >
            Book Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}


