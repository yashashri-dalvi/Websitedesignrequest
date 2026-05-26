import { Logo } from "./Logo";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Roadmap", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security", href: "#" },
      { label: "Compliance", href: "#" }
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-sm">
              The AI-powered growth operating system for financial advisors. 
              Automate engagement, revive clients, and scale your practice.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-slate-700" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-slate-700" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate-700" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm mb-4" style={{ fontWeight: 600, color: '#081120' }}>
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm mb-4" style={{ fontWeight: 600, color: '#081120' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm mb-4" style={{ fontWeight: 600, color: '#081120' }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © 2026 AlmoraX. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
