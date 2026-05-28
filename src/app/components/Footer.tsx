import { Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const footerLinks = {
    product: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
    company: [
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-white/10 bg-[#071224] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="mb-5" onDark />
            <p className="mb-6 max-w-sm text-sm leading-7 text-slate-300">
              Premium AI automation for MFDs, financial distributors, and wealth
              advisors who want consistent engagement, compliant communication,
              and measurable growth.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/almorax/about/" },
                { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=yashashri@almorax.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 transition-all hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-sky-400/15 hover:text-sky-200"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-bold capitalize text-white">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-300">
            © 2026 AlmoraX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-300 transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-300 transition-colors hover:text-white">
              Terms
            </a>
            <a href="/contact" className="text-sm text-slate-300 transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}




