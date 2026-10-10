'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Users, Building2, Award } from 'lucide-react';
import { SiteLayout } from '@/components/site/site-layout';

const values = [
  { icon: Target, title: 'Precision', desc: 'Every feature is built with institutional-grade accuracy and attention to operational detail.' },
  { icon: Heart, title: 'Student-Informed', desc: 'Our products are shaped by real student innovation needs, not generic SaaS assumptions.' },
  { icon: Eye, title: 'Transparency', desc: 'We clearly distinguish implemented features from planned ones. No misleading claims.' },
  { icon: Users, title: 'Community', desc: 'We build for institutions and communities, fostering genuine innovation ecosystems.' },
];

const timeline = [
  { year: '2024', title: 'Foundation', desc: 'InnoTech-Hub founded with a vision to connect institutional operations through SaaS.' },
  { year: '2024', title: 'First Products', desc: 'Faculty Operations and Verified Participation developed through institutional feedback.' },
  { year: '2025', title: 'Pilot Programs', desc: 'Institutional pilots launched across multiple colleges and technology communities.' },
  { year: '2025', title: 'Ecosystem Growth', desc: 'Student innovation ecosystem expanded with hackathons, workshops, and community programs.' },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-20 bg-ith-ivory relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-40" style={{ maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono-label text-ith-orange tracking-wider uppercase"
          >
            About InnoTech-Hub
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-4xl sm:text-5xl font-bold text-ith-navy mt-4 leading-tight max-w-3xl"
          >
            Engineering precision for the next generation of institutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-ith-slate leading-relaxed max-w-2xl"
          >
            InnoTech-Hub is an IT/EdTech SaaS company developing connected digital infrastructure for colleges, universities, faculty, student teams, and technology communities. We build software that simplifies institutional operations while fostering genuine innovation ecosystems.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-ith-navy rounded-2xl p-8 text-ith-ivory"
            >
              <Target className="w-8 h-8 text-ith-orange mb-4" />
              <h2 className="font-editorial text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-ith-ivory/70 leading-relaxed">
                To build connected SaaS solutions that eliminate operational friction in institutions, enable verifiable participation in communities, and create a technology platform where student innovation can flourish with institutional support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-ith-ivory rounded-2xl p-8 border border-ith-ivory-dark"
            >
              <Eye className="w-8 h-8 text-ith-orange mb-4" />
              <h2 className="font-editorial text-2xl font-bold text-ith-navy mb-4">Our Vision</h2>
              <p className="text-ith-slate leading-relaxed">
                A future where every institution operates on connected, auditable software infrastructure — where faculty operations, document governance, task execution, and participation verification work as one unified ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-ith-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Our Values</span>
            <h2 className="font-editorial text-3xl font-bold text-ith-navy mt-3">What we stand for</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-ith-ivory-dark hover:shadow-ith transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-ith-orange/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-ith-orange" />
                </div>
                <h3 className="font-semibold text-ith-navy mb-2 text-sm">{value.title}</h3>
                <p className="text-xs text-ith-slate leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Our Journey</span>
            <h2 className="font-editorial text-3xl font-bold text-ith-navy mt-3">Company timeline</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-ith-ivory-dark" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-ith-navy flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-ith-orange" />
                  </div>
                  <div className="bg-ith-ivory rounded-xl p-5 border border-ith-ivory-dark">
                    <span className="text-[10px] font-mono-label text-ith-orange">{item.year}</span>
                    <h3 className="font-semibold text-ith-navy mt-1 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-ith-slate leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-ith-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, value: '4', label: 'SaaS Products' },
              { icon: Users, value: '12+', label: 'Institutional Pilots' },
              { icon: Award, value: '5K+', label: 'Verified Participants' },
              { icon: Target, value: '98%', label: 'System Uptime' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-ith-orange mx-auto mb-3" />
                <div className="text-3xl font-editorial font-bold text-ith-ivory">{stat.value}</div>
                <div className="text-xs font-mono-label text-ith-ivory/40 mt-1">{stat.label.toUpperCase()}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
