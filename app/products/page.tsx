'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SiteLayout } from '@/components/site/site-layout';
import { FolderTree, Calendar, QrCode, KanbanSquare } from 'lucide-react';

const products = [
  {
    id: 'institutional-repository',
    name: 'Institutional Repository & Governance',
    internal: 'SARGS',
    desc: 'Document governance, approval workflows, and compliance readiness for institutions.',
    icon: FolderTree,
    features: ['Document versioning', 'Role-based permissions', 'Approval workflows', 'Audit history', 'Compliance readiness', 'Institutional reporting'],
    status: 'In Development',
  },
  {
    id: 'faculty-operations',
    name: 'Faculty Operations & Smart Alerts',
    internal: 'FOPS',
    desc: 'Faculty attendance, timetable management, and smart escalation alerts for HODs.',
    icon: Calendar,
    features: ['Faculty attendance', 'Timetable management', 'Class reminders', 'Missed punch alerts', 'Leave requests', 'HOD escalations', 'Substitute assignment', 'Academic reporting'],
    status: 'Pilot Ready',
  },
  {
    id: 'verified-participation',
    name: 'Verified Participation & Activity',
    internal: 'VPA',
    desc: 'QR-based verification, presence timelines, and proof-of-work submission.',
    icon: QrCode,
    features: ['QR-based verification', 'GPS/geofence verification', 'OTP fallback', 'Presence timelines', 'Volunteer duty assignment', 'Proof-of-work submission', 'Supervisor verification', 'Contribution reports'],
    status: 'Pilot Ready',
  },
  {
    id: 'task-manager',
    name: 'Task Manager',
    internal: 'TM',
    desc: 'Workspaces, teams, Kanban boards, and completion evidence for team execution.',
    icon: KanbanSquare,
    features: ['Workspaces & teams', 'Task assignment', 'Priorities & deadlines', 'Kanban and list views', 'File attachments', 'Completion evidence', 'Reviewer approval', 'Activity history'],
    status: 'In Development',
  },
];

export default function ProductsPage() {
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
            SaaS Product Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-4xl sm:text-5xl font-bold text-ith-navy mt-4 leading-tight"
          >
            Four connected products.<br />One institutional ecosystem.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-ith-slate leading-relaxed max-w-2xl mx-auto"
          >
            Each product is designed to work independently or as part of the connected InnoTech-Hub platform. Deploy what you need today and scale when ready.
          </motion.p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-ith-ivory rounded-2xl p-8 border border-ith-ivory-dark hover:border-ith-orange/20 hover:shadow-ith-lg transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-ith-navy flex items-center justify-center group-hover:bg-ith-orange transition-colors">
                    <product.icon className="w-6 h-6 text-ith-ivory" />
                  </div>
                  <span className={`text-[10px] font-mono-label px-2.5 py-1 rounded-full ${
                    product.status === 'Pilot Ready' ? 'bg-ith-mint/15 text-ith-mint-dark' : 'bg-ith-orange/10 text-ith-orange'
                  }`}>
                    {product.status.toUpperCase()}
                  </span>
                </div>

                <div className="text-[10px] font-mono-label text-ith-slate mb-1">{product.internal}</div>
                <h3 className="font-editorial text-xl font-bold text-ith-navy mb-3">{product.name}</h3>
                <p className="text-sm text-ith-slate leading-relaxed mb-5">{product.desc}</p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-ith-mint-dark shrink-0" />
                      <span className="text-xs text-ith-charcoal">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-ith-navy hover:text-ith-orange transition-colors"
                >
                  Explore {product.internal}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
