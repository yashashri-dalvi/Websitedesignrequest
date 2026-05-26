import { Logo } from "./Logo";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button style={{ backgroundColor: '#2563EB', color: 'white' }}>
            Book Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
