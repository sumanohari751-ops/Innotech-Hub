'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { SiteLayout } from '@/components/site/site-layout';
import { FolderTree, Calendar, QrCode, KanbanSquare } from 'lucide-react';

const productData: Record<string, {
  name: string;
  internal: string;
  desc: string;
  longDesc: string;
  icon: any;
  status: string;
  features: { title: string; desc: string }[];
  workflow: string[];
  faqs: { q: string; a: string }[];
}> = {
  'institutional-repository': {
    name: 'Institutional Repository & Governance',
    internal: 'SARGS',
    desc: 'Document governance, approval workflows, and compliance readiness for institutions.',
    longDesc: 'SARGS provides a centralized, governed repository for institutional documents with role-based permissions, version control, and complete audit trails. Every document moves through configurable approval workflows, ensuring compliance readiness and institutional accountability.',
    icon: FolderTree,
    status: 'In Development',
    features: [
      { title: 'Document Repository', desc: 'Centralized storage for institutional documents with hierarchical organization by department and category.' },
      { title: 'Role-Based Permissions', desc: 'Granular access control ensuring users only see documents appropriate to their role and department.' },
      { title: 'Document Versioning', desc: 'Full version history with the ability to track changes, revert to previous versions, and compare revisions.' },
      { title: 'Approval Workflows', desc: 'Configurable multi-stage approval flows with pending, review, and approved states for every document.' },
      { title: 'Audit History', desc: 'Complete audit trail of who accessed, modified, or approved each document, with timestamps and IP tracking.' },
      { title: 'Compliance Readiness', desc: 'Pre-configured compliance templates and reporting tools aligned with institutional regulatory requirements.' },
      { title: 'Institutional Reporting', desc: 'Generate departmental and institutional-level reports on document status, approval throughput, and compliance metrics.' },
      { title: 'Enterprise Deployment', desc: 'On-premise or cloud deployment options with SSO integration and configurable data residency.' },
    ],
    workflow: ['Document Upload', 'Departmental Review', 'Approval Request', 'Committee Review', 'Final Approval', 'Archive & Audit'],
    faqs: [
      { q: 'Can SARGS integrate with our existing storage infrastructure?', a: 'SARGS supports enterprise deployment options including on-premise installations and integration with existing S3-compatible object storage.' },
      { q: 'How are approval workflows configured?', a: 'Approval workflows are fully configurable per document category and department, with support for multi-stage reviews and conditional routing.' },
      { q: 'Is SARGS compliant with Indian data protection regulations?', a: 'SARGS is designed with DPDP obligations in mind, including data retention controls, consent management, and audit logging.' },
    ],
  },
  'faculty-operations': {
    name: 'Faculty Operations & Smart Alerts',
    internal: 'FOPS',
    desc: 'Faculty attendance, timetable management, and smart escalation alerts for HODs.',
    longDesc: 'FOPS streamlines academic operations with faculty attendance tracking, timetable management, and intelligent alert systems. Smart escalations ensure HODs are immediately notified of missed punches and schedule conflicts, with automated substitute assignment workflows.',
    icon: Calendar,
    status: 'Pilot Ready',
    features: [
      { title: 'Faculty Attendance', desc: 'Digital attendance tracking with configurable punch-in methods and real-time status dashboards.' },
      { title: 'Timetable Management', desc: 'Create and manage complex institutional timetables with conflict detection and room allocation.' },
      { title: 'Class Reminders', desc: 'Automated reminders to faculty and students about upcoming classes and schedule changes.' },
      { title: 'Missed Punch Alerts', desc: 'Smart detection of missed attendance with instant alerts to faculty and HOD escalation.' },
      { title: 'Leave Requests', desc: 'Digital leave application workflow with approval routing and substitute assignment.' },
      { title: 'HOD Escalations', desc: 'Automated escalation of unresolved attendance or scheduling issues to department heads.' },
      { title: 'Substitute Assignment', desc: 'Streamlined workflow for assigning substitute faculty when regular faculty are unavailable.' },
      { title: 'Academic Reporting', desc: 'Comprehensive dashboards and reports on faculty attendance, leave patterns, and schedule adherence.' },
    ],
    workflow: ['Faculty Punch-In', 'Smart Detection', 'Alert Generation', 'HOD Notification', 'Substitute Assignment', 'Record Update'],
    faqs: [
      { q: 'Does FOPS support biometric integration?', a: 'BioSync integration architecture is planned for future releases. Current punch-in methods include manual and QR-based attendance. Biometric capabilities will be clearly announced when implemented.' },
      { q: 'Can FOPS handle multi-department institutions?', a: 'Yes, FOPS supports multi-department configurations with independent timetables, HOD roles, and cross-departmental reporting.' },
      { q: 'How are timetable conflicts handled?', a: 'FOPS automatically detects faculty, room, and time conflicts during timetable creation, providing alternative suggestions.' },
    ],
  },
  'verified-participation': {
    name: 'Verified Participation & Activity',
    internal: 'VPA',
    desc: 'QR-based verification, presence timelines, and proof-of-work submission.',
    longDesc: 'VPA provides verifiable participation tracking through QR-based check-ins, GPS geofencing, and proof-of-work submission. Every contribution is authenticated, creating auditable presence timelines and verified contribution records for events, workshops, and volunteer programs.',
    icon: QrCode,
    status: 'Pilot Ready',
    features: [
      { title: 'QR-Based Verification', desc: 'Unique participant QR codes with authorized scanner interface and duplicate scan prevention.' },
      { title: 'GPS/Geofence Verification', desc: 'Configurable geofencing to verify participants are at the designated location during check-in.' },
      { title: 'OTP Fallback', desc: 'One-time password verification as a fallback when QR scanning is unavailable.' },
      { title: 'Presence Timelines', desc: 'Detailed check-in and check-out records creating a complete presence timeline per participant.' },
      { title: 'Volunteer Duty Assignment', desc: 'Assign and track volunteer duties with shift management and role-based task allocation.' },
      { title: 'Proof-of-Work Submission', desc: 'Participants submit evidence of completed tasks with photo, document, or link attachments.' },
      { title: 'Supervisor Verification', desc: 'Designated supervisors review and verify submitted proof-of-work before approval.' },
      { title: 'Contribution Reports', desc: 'Generate verified contribution reports with total hours, tasks completed, and supervisor approvals.' },
    ],
    workflow: ['Participant Check-In', 'Identity Verification', 'Presence Logging', 'Task Assignment', 'Proof Submission', 'Supervisor Approval', 'Verified Contribution'],
    faqs: [
      { q: 'What verification methods are supported?', a: 'VPA supports QR-based check-in as the primary method, with GPS geofencing and OTP as configurable additional layers. All methods are documented and auditable.' },
      { q: 'Is the Innovation Passport integration available?', a: 'Innovation Passport integration is a planned feature. It will be modular and clearly marked when implemented. Current VPA functionality provides full verified participation tracking.' },
      { q: 'Can VPA handle multi-session events?', a: 'Yes, VPA supports multi-session events with independent check-in windows, session-wise attendance records, and consolidated participation reports.' },
    ],
  },
  'task-manager': {
    name: 'Task Manager',
    internal: 'TM',
    desc: 'Workspaces, teams, Kanban boards, and completion evidence for team execution.',
    longDesc: 'Task Manager provides structured team execution with workspaces, projects, and configurable task workflows. Kanban and list views, deadline tracking, file attachments, and completion evidence ensure every task is traceable from assignment to verified completion.',
    icon: KanbanSquare,
    status: 'In Development',
    features: [
      { title: 'Workspaces & Teams', desc: 'Create isolated workspaces for different teams or departments with configurable member roles.' },
      { title: 'Task Assignment', desc: 'Assign tasks to individuals or teams with priority levels and configurable deadlines.' },
      { title: 'Priorities & Deadlines', desc: 'Visual priority indicators and deadline tracking with automated overdue notifications.' },
      { title: 'Kanban & List Views', desc: 'Switch between Kanban board and list views depending on your team workflow preference.' },
      { title: 'File Attachments', desc: 'Attach supporting files to tasks with configurable file type and size validation.' },
      { title: 'Completion Evidence', desc: 'Require evidence of task completion with photo, document, or link submission before closing.' },
      { title: 'Reviewer Approval', desc: 'Designated reviewers approve or reject submitted completion evidence before tasks are marked done.' },
      { title: 'Activity History', desc: 'Complete activity log for every task showing assignments, status changes, comments, and approvals.' },
    ],
    workflow: ['Task Created', 'Assigned', 'In Progress', 'Evidence Submitted', 'Reviewer Approval', 'Completed'],
    faqs: [
      { q: 'Is Task Manager available as a standalone product?', a: 'Task Manager is currently in development. It will be available both as a standalone product and as part of the connected ITH ecosystem. Pricing will be announced upon release.' },
      { q: 'Can Task Manager integrate with Verified Participation?', a: 'Yes, Task Manager integrates with VPA to link volunteer tasks with verified participation records, creating end-to-end contribution tracking.' },
      { q: 'What file types are supported for completion evidence?', a: 'Task Manager supports configurable file type restrictions per workspace, with common formats including images, PDFs, and documents out of the box.' },
    ],
  },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug];

  if (!product) {
    return (
      <SiteLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-editorial text-3xl font-bold text-ith-navy mb-4">Product not found</h1>
            <Link href="/products" className="text-ith-orange hover:underline">Back to products</Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const Icon = product.icon;

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-20 bg-ith-ivory relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-40" style={{ maskImage: 'radial-gradient(ellipse at top right, black 20%, transparent 70%)' }} />
        <motion.div
          className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(211,77,50,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-ith-slate hover:text-ith-orange transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-ith-navy flex items-center justify-center">
                  <Icon className="w-6 h-6 text-ith-ivory" />
                </div>
                <span className="text-[10px] font-mono-label text-ith-slate">{product.internal}</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl font-bold text-ith-navy leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-ith-slate leading-relaxed mb-6">{product.longDesc}</p>

              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-mono-label px-3 py-1.5 rounded-full ${
                  product.status === 'Pilot Ready' ? 'bg-ith-mint/15 text-ith-mint-dark' : 'bg-ith-orange/10 text-ith-orange'
                }`}>
                  {product.status.toUpperCase()}
                </span>
                <Link
                  href="/request-demo"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-ith-ivory bg-ith-orange px-5 py-2.5 rounded-xl hover:shadow-ith-glow transition-all"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-ith-lg border border-ith-ivory-dark p-8"
            >
              <div className="text-xs font-mono-label text-ith-slate mb-4">KEY CAPABILITIES</div>
              <div className="grid grid-cols-2 gap-3">
                {product.features.slice(0, 6).map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-ith-mint-dark mt-0.5 shrink-0" />
                    <span className="text-xs text-ith-charcoal leading-snug">{f.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Features</span>
            <h2 className="font-editorial text-3xl font-bold text-ith-navy mt-3">Complete feature set</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-ith-ivory rounded-xl p-6 border border-ith-ivory-dark hover:border-ith-orange/20 hover:shadow-ith transition-all"
              >
                <h3 className="font-semibold text-ith-navy text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-ith-slate leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-ith-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Workflow</span>
            <h2 className="font-editorial text-3xl font-bold text-ith-navy mt-3">How it works</h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {product.workflow.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className={`px-4 py-3 rounded-xl text-sm font-medium ${i === 0 || i === product.workflow.length - 1 ? 'bg-ith-navy text-ith-ivory' : 'bg-white text-ith-charcoal border border-ith-ivory-dark'}`}>
                  {step}
                </div>
                {i < product.workflow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-ith-slate" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">FAQ</span>
            <h2 className="font-editorial text-3xl font-bold text-ith-navy mt-3">Common questions</h2>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-ith-ivory rounded-xl p-6 border border-ith-ivory-dark"
              >
                <h3 className="font-semibold text-ith-navy mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-ith-slate leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ith-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-editorial text-3xl font-bold text-ith-ivory mb-4">Ready to explore {product.internal}?</h2>
          <p className="text-ith-ivory/60 mb-8 max-w-xl mx-auto">Schedule a personalized demo to see how {product.name} can transform your institutional operations.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/request-demo" className="px-6 py-3.5 text-sm font-semibold text-ith-navy bg-ith-ivory rounded-xl hover:shadow-ith-lg transition-all">
              Request a Demo
            </Link>
            <Link href="/pricing" className="px-6 py-3.5 text-sm font-semibold text-ith-ivory border border-ith-ivory/20 rounded-xl hover:bg-ith-ivory/5 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
