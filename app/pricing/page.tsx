'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { SiteLayout } from '@/components/site/site-layout';

const plans = [
  {
    name: 'Starter',
    desc: 'For single departments getting started with digital operations.',
    price: 'Custom',
    billing: 'Annual billing',
    badge: null,
    features: [
      'Up to 50 users',
      'Single product module',
      'Basic reporting',
      'Email support',
      'Standard security',
      'Cloud deployment',
    ],
    cta: 'Request a Quote',
    href: '/request-demo',
  },
  {
    name: 'Professional',
    desc: 'For institutions needing connected multi-product deployment.',
    price: 'Custom',
    billing: 'Annual billing',
    badge: 'Recommended',
    features: [
      'Up to 500 users',
      'Multiple product modules',
      'Advanced analytics',
      'Priority support',
      'Role-based access control',
      'Audit logging',
      'SSO integration',
      'Custom workflows',
    ],
    cta: 'Request a Quote',
    href: '/request-demo',
  },
  {
    name: 'Enterprise',
    desc: 'For multi-campus institutions and large organizations.',
    price: 'Custom',
    billing: 'Custom contract',
    badge: null,
    features: [
      'Unlimited users',
      'All product modules',
      'Custom integrations',
      'Dedicated support manager',
      'On-premise or cloud',
      'Custom SLA',
      'Compliance consulting',
      'Data residency options',
    ],
    cta: 'Contact Sales',
    href: '/contact',
  },
];

const productPricing = [
  {
    product: 'Faculty Operations (FOPS)',
    status: 'Pilot Ready',
    plans: [
      { name: 'Department', price: 'Rs. 50,000 / year', features: 'Up to 50 faculty, single department' },
      { name: 'Institutional', price: 'Rs. 2,50,000 / year', features: 'Up to 500 faculty, multi-department' },
    ],
  },
  {
    product: 'Verified Participation (VPA)',
    status: 'Pilot Ready',
    plans: [
      { name: 'Event', price: 'Rs. 5,000 / event', features: 'Up to 500 participants, single event' },
      { name: 'Annual', price: 'Rs. 75,000 / year', features: 'Unlimited events, up to 10,000 participants' },
    ],
  },
  {
    product: 'Institutional Repository (SARGS)',
    status: 'Draft — Pending Approval',
    plans: [
      { name: 'Departmental', price: 'Draft', features: 'Pricing under review' },
      { name: 'Institutional', price: 'Draft', features: 'Pricing under review' },
    ],
  },
  {
    product: 'Task Manager (TM)',
    status: 'Draft — Pending Approval',
    plans: [
      { name: 'Team', price: 'Draft', features: 'Pricing under review' },
      { name: 'Enterprise', price: 'Draft', features: 'Pricing under review' },
    ],
  },
];

export default function PricingPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-20 bg-ith-ivory relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-40" style={{ maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono-label text-ith-orange tracking-wider uppercase"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-4xl sm:text-5xl font-bold text-ith-navy mt-4 leading-tight"
          >
            Transparent pricing that scales with you
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-ith-slate leading-relaxed max-w-2xl mx-auto"
          >
            Choose the plan that fits your institution. All plans include role-based access control, audit logging, and our connected ecosystem architecture.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 border transition-all ${
                  plan.badge === 'Recommended'
                    ? 'bg-ith-navy text-ith-ivory border-ith-navy shadow-ith-lg scale-105'
                    : 'bg-ith-ivory border-ith-ivory-dark hover:shadow-ith'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-ith-orange text-ith-ivory text-[10px] font-mono-label tracking-wider">
                    {plan.badge.toUpperCase()}
                  </div>
                )}

                <h3 className={`font-editorial text-xl font-bold mb-2 ${plan.badge === 'Recommended' ? 'text-ith-ivory' : 'text-ith-navy'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs leading-relaxed mb-6 ${plan.badge === 'Recommended' ? 'text-ith-ivory/60' : 'text-ith-slate'}`}>
                  {plan.desc}
                </p>

                <div className="mb-1">
                  <span className={`text-3xl font-editorial font-bold ${plan.badge === 'Recommended' ? 'text-ith-orange' : 'text-ith-navy'}`}>
                    {plan.price}
                  </span>
                </div>
                <div className={`text-[10px] font-mono-label mb-6 ${plan.badge === 'Recommended' ? 'text-ith-ivory/40' : 'text-ith-slate'}`}>
                  {plan.billing.toUpperCase()}
                </div>

                <Link
                  href={plan.href}
                  className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all mb-6 ${
                    plan.badge === 'Recommended'
                      ? 'bg-ith-orange text-ith-ivory hover:shadow-ith-glow'
                      : 'bg-ith-navy text-ith-ivory hover:bg-ith-navy-light'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.badge === 'Recommended' ? 'text-ith-mint' : 'text-ith-mint-dark'}`} />
                      <span className={`text-xs ${plan.badge === 'Recommended' ? 'text-ith-ivory/80' : 'text-ith-charcoal'}`}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product-specific pricing */}
      <section className="py-20 bg-ith-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Product Pricing</span>
            <h2 className="font-editorial text-3xl font-bold text-ith-navy mt-3">Per-product pricing details</h2>
            <p className="mt-4 text-xs text-ith-slate font-mono-label">CONFIRMED PRICING FOR PILOT-READY PRODUCTS — DRAFT PRICING PENDING ADMIN APPROVAL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productPricing.map((pp, i) => (
              <motion.div
                key={pp.product}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-ith-ivory-dark"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-ith-navy text-sm">{pp.product}</h3>
                  <span className={`text-[9px] font-mono-label px-2 py-1 rounded-full ${
                    pp.status.includes('Pilot') ? 'bg-ith-mint/15 text-ith-mint-dark' : 'bg-ith-orange/10 text-ith-orange'
                  }`}>
                    {pp.status.toUpperCase()}
                  </span>
                </div>

                <div className="space-y-3">
                  {pp.plans.map((plan) => (
                    <div key={plan.name} className="flex items-center justify-between p-3 bg-ith-ivory rounded-lg">
                      <div>
                        <div className="text-xs font-semibold text-ith-navy">{plan.name}</div>
                        <div className="text-[10px] text-ith-slate mt-0.5">{plan.features}</div>
                      </div>
                      <div className={`text-sm font-mono-label ${plan.price === 'Draft' ? 'text-ith-slate' : 'text-ith-orange'}`}>
                        {plan.price}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white rounded-xl border border-ith-ivory-dark text-center">
            <p className="text-xs text-ith-slate">
              Need a custom bundle or enterprise quotation? <Link href="/contact" className="text-ith-orange font-semibold hover:underline">Contact our sales team</Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">FAQ</span>
            <h2 className="font-editorial text-3xl font-bold text-ith-navy mt-3">Pricing questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Do you offer SaaS bundles?', a: 'Yes, institutions can bundle multiple ITH products at a discounted rate. Contact our sales team for custom bundle pricing.' },
              { q: 'What payment methods do you accept?', a: 'We accept bank transfers, UPI, and institutional purchase orders. Razorpay integration is available for online payments.' },
              { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, plans can be adjusted at any time. Prorated billing applies for mid-cycle changes.' },
              { q: 'Is there a setup fee?', a: 'Setup fees vary by deployment type and customization requirements. Cloud deployments typically have no setup fee, while on-premise installations may incur setup charges.' },
              { q: 'Do you offer discounts for educational institutions?', a: 'Yes, we offer special pricing for accredited educational institutions. Please mention your institution type when requesting a quote.' },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-ith-ivory rounded-xl p-6 border border-ith-ivory-dark"
              >
                <h3 className="font-semibold text-ith-navy mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-ith-slate leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
