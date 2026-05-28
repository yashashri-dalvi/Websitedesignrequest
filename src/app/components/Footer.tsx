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
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="mb-5" />
            <p className="mb-6 max-w-sm text-sm leading-7 text-slate-600">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all hover:-translate-y-0.5 hover:bg-sky-50 hover:text-sky-600"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-bold capitalize text-slate-950">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-sky-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="text-sm text-slate-600">
            © 2026 AlmoraX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-slate-600 transition-colors hover:text-sky-700">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-600 transition-colors hover:text-sky-700">
              Terms
            </a>
            <a href="/contact" className="text-sm text-slate-600 transition-colors hover:text-sky-700">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}




