import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  Products: [
    { label: 'Institutional Repository', href: '/products/institutional-repository' },
    { label: 'Faculty Operations', href: '/products/faculty-operations' },
    { label: 'Verified Participation', href: '/products/verified-participation' },
    { label: 'Task Manager', href: '/products/task-manager' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Innovation Ecosystem', href: '/innovation' },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Events', href: '/events' },
    { label: 'Programs', href: '/programs' },
    { label: 'Resources', href: '/resources' },
    { label: 'Request a Demo', href: '/request-demo' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Security', href: '/security' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ith-navy text-ith-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-ith-ivory/10 flex items-center justify-center relative">
                <span className="font-editorial font-bold text-ith-ivory text-xl">I</span>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-ith-orange" />
              </div>
              <span className="font-editorial font-bold text-xl">
                InnoTech<span className="text-ith-orange">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-ith-ivory/60 leading-relaxed max-w-xs mb-6">
              Connected SaaS solutions that simplify institutional operations, strengthen team execution and enable verifiable participation.
            </p>
            <div className="flex items-center gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-ith-ivory/5 hover:bg-ith-orange/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-ith-ivory/70" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-xs font-mono-label uppercase tracking-wider text-ith-orange mb-4">
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ith-ivory/60 hover:text-ith-ivory transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ith-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ith-ivory/40 font-mono-label">
            © {new Date().getFullYear()} InnoTech-Hub. All rights reserved.
          </p>
          <p className="text-xs text-ith-ivory/40">
            Engineering precision for the next generation of institutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
