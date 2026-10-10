'use client';

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle2, FileText, Calendar, Users, ClipboardCheck,
  Shield, Bell, BarChart3, FolderTree, Clock, Zap, Award, QrCode,
  KanbanSquare, Building2, GraduationCap, Network, Sparkles,
  TrendingUp, Activity, Layers, Lock, Cpu, Globe,
} from 'lucide-react';

const products = [
  {
    id: 'institutional-repository',
    name: 'Institutional Repository & Governance',
    internal: 'SARGS',
    desc: 'Document governance, approval workflows, and compliance readiness for institutions.',
    icon: FolderTree,
    features: ['Document versioning', 'Role-based permissions', 'Approval workflows', 'Audit history'],
    color: 'from-blue-900 to-blue-700',
  },
  {
    id: 'faculty-operations',
    name: 'Faculty Operations & Smart Alerts',
    internal: 'FOPS',
    desc: 'Faculty attendance, timetable management, and smart escalation alerts for HODs.',
    icon: Calendar,
    features: ['Attendance tracking', 'Timetable management', 'Smart alerts', 'HOD escalation'],
    color: 'from-orange-700 to-orange-500',
  },
  {
    id: 'verified-participation',
    name: 'Verified Participation & Activity',
    internal: 'VPA',
    desc: 'QR-based verification, presence timelines, and proof-of-work submission.',
    icon: QrCode,
    features: ['QR verification', 'GPS geofence', 'Presence timeline', 'Proof-of-work'],
    color: 'from-teal-700 to-teal-500',
  },
  {
    id: 'task-manager',
    name: 'Task Manager',
    internal: 'TM',
    desc: 'Workspaces, teams, Kanban boards, and completion evidence for team execution.',
    icon: KanbanSquare,
    features: ['Kanban & list views', 'Task assignment', 'Deadline tracking', 'Completion evidence'],
    color: 'from-slate-700 to-slate-500',
  },
];

const stats = [
  { value: 4, label: 'Connected SaaS Products', suffix: '' },
  { value: 12, label: 'Institutional Pilots', suffix: '+' },
  { value: 5000, label: 'Verified Participants', suffix: '+' },
  { value: 98, label: 'System Uptime', suffix: '%' },
];

const ecosystemModules = [
  { id: 'ith', name: 'InnoTech-Hub', x: 50, y: 50, type: 'core' },
  { id: 'repo', name: 'Institutional Repository', x: 20, y: 22, type: 'product' },
  { id: 'faculty', name: 'Faculty Operations', x: 80, y: 22, type: 'product' },
  { id: 'tasks', name: 'Task Manager', x: 20, y: 78, type: 'product' },
  { id: 'participation', name: 'Verified Participation', x: 80, y: 78, type: 'product' },
  { id: 'ecosystem', name: 'Student Innovation Ecosystem', x: 50, y: 92, type: 'planned' },
];

const solutions = [
  {
    icon: Building2,
    title: 'For Institutions',
    desc: 'Colleges, universities, and departments seeking digital governance, faculty management, and verifiable participation systems.',
    points: ['Document governance', 'Faculty operations', 'Compliance readiness', 'Departmental reporting'],
    href: '/solutions/institutions',
  },
  {
    icon: GraduationCap,
    title: 'For Communities',
    desc: 'Technology communities, student teams, and innovation programs needing task execution and verified contribution tracking.',
    points: ['Task management', 'Event hosting', 'Verified participation', 'Contribution reports'],
    href: '/solutions/communities',
  },
];

const whyITH = [
  { icon: Layers, title: 'Modular by Design', desc: 'Each product works independently or as part of the connected ecosystem. Deploy what you need, scale when ready.' },
  { icon: Shield, title: 'Security First', desc: 'Role-based access control, organization isolation, audit logs, and server-enforced permissions on every operation.' },
  { icon: Cpu, title: 'Student-Informed', desc: 'Built from real institutional workflows and student innovation needs, not generic SaaS templates.' },
  { icon: Activity, title: 'Practically Scalable', desc: 'From single departments to multi-campus deployments with proven infrastructure and controlled rollouts.' },
];

const events = [
  { title: 'Innovation Hackathon 2025', type: 'Hackathon', date: 'Nov 15-17', mode: 'Hybrid', status: 'Registration Open' },
  { title: 'AI & ML Workshop Series', type: 'Workshop', date: 'Oct 20-22', mode: 'Online', status: 'Upcoming' },
  { title: 'Smart India Ideathon', type: 'Ideathon', date: 'Dec 5-6', mode: 'Onsite', status: 'Registration Open' },
];

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <ProblemsSection />
      <ProductShowcaseSection />
      <EcosystemSection />
      <SolutionsSection />
      <WhyITHSection />
      <StatsSection />
      <InnovationSection />
      <EventsSection />
      <CTASection />
    </main>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-ith-ivory">
      <div className="absolute inset-0 grid-pattern-dark opacity-50" style={{ maskImage: 'radial-gradient(ellipse at top right, black 20%, transparent 70%)' }} />

      {/* Ambient blobs */}
      <motion.div
        className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(211,77,50,0.08) 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(13,45,82,0.06) 0%, transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ith-orange/8 border border-ith-orange/20 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-ith-orange" />
              <span className="text-xs font-mono-label text-ith-orange tracking-wide">CONNECTED SAAS PLATFORM</span>
            </motion.div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-ith-navy leading-[1.1] tracking-tight">
              {['Software for the', 'Next Generation of', 'Institutions.'].map((line, i) => (
                <motion.span
                  key={i}
                  className="block overflow-hidden"
                >
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    {i === 1 && <span className="text-ith-orange">Next Generation</span>}
                    {i !== 1 && line}
                    {i === 1 && ' of'}
                  </motion.span>
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-base lg:text-lg text-ith-slate leading-relaxed max-w-lg"
            >
              InnoTech-Hub develops connected SaaS solutions that simplify institutional operations, strengthen team execution and enable verifiable participation across education and technology communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/products"
                className="group relative px-6 py-3.5 text-sm font-semibold text-ith-ivory bg-ith-navy rounded-xl overflow-hidden transition-all hover:shadow-ith-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore SaaS Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-ith-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/request-demo"
                className="px-6 py-3.5 text-sm font-semibold text-ith-navy bg-white border border-ith-navy/10 rounded-xl hover:border-ith-orange/30 hover:text-ith-orange transition-all"
              >
                Request a Demo
              </Link>
              <Link
                href="/innovation"
                className="px-6 py-3.5 text-sm font-medium text-ith-navy hover:text-ith-orange transition-colors"
              >
                Explore Opportunities
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10 flex items-center gap-6"
            >
              {['Institutional Grade', 'Role-Based Access', 'Audit Ready'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-ith-mint-dark" />
                  <span className="text-xs font-mono-label text-ith-slate">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: 5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative perspective-1000"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-ith-slate/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-ith-slate/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function DashboardMockup() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Floating cards behind */}
      <motion.div
        className="absolute -top-6 -right-6 w-32 h-20 bg-white rounded-xl shadow-ith-lg p-3 z-0 hidden sm:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-2 h-2 rounded-full bg-ith-mint" />
          <span className="text-[10px] font-mono-label text-ith-slate">ACTIVE</span>
        </div>
        <div className="space-y-1">
          <div className="h-1.5 w-full rounded-full bg-ith-ivory-dark" />
          <div className="h-1.5 w-2/3 rounded-full bg-ith-ivory-dark" />
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 w-36 h-24 bg-white rounded-xl shadow-ith-lg p-3 z-0 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-[10px] font-mono-label text-ith-slate mb-1.5">VERIFIED</div>
        <div className="flex items-end gap-1 h-10">
          {[40, 60, 35, 80, 55, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-ith-orange/30" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>

      {/* Main dashboard */}
      <div className="relative z-10 bg-white rounded-2xl shadow-ith-lg border border-ith-ivory-dark overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-ith-ivory-dark bg-ith-ivory/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
          </div>
          <div className="flex-1 mx-3 h-6 rounded-md bg-white border border-ith-ivory-dark flex items-center px-2">
            <span className="text-[10px] font-mono-label text-ith-slate">app.innotech-hub.com/dashboard</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 sm:p-5">
          {/* Tabs */}
          <div className="flex gap-1.5 mb-4 overflow-x-auto scrollbar-hide">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeTab === i ? 'bg-ith-navy text-ith-ivory' : 'bg-ith-ivory text-ith-slate hover:bg-ith-ivory-dark'
                }`}
              >
                {p.internal}
              </button>
            ))}
          </div>

          {/* Active product display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                {(() => {
                  const Icon = products[activeTab].icon;
                  return <Icon className="w-4 h-4 text-ith-orange" />;
                })()}
                <span className="text-xs font-semibold text-ith-navy">{products[activeTab].name}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                {['Total', 'Active', 'Pending'].map((label, i) => (
                  <div key={label} className="bg-ith-ivory rounded-lg p-2.5">
                    <div className="text-[9px] font-mono-label text-ith-slate mb-1">{label.toUpperCase()}</div>
                    <div className="text-lg font-bold text-ith-navy">{[248, 186, 62][i]}</div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-ith-ivory rounded-lg p-3 mb-3">
                <div className="text-[9px] font-mono-label text-ith-slate mb-2">ACTIVITY OVERVIEW</div>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 55, 35, 70, 50, 85, 60, 75, 45, 90, 65, 80].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className={`flex-1 rounded-sm ${i % 3 === 0 ? 'bg-ith-orange/60' : 'bg-ith-navy/15'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Status list */}
              <div className="space-y-1.5">
                {products[activeTab].features.slice(0, 3).map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-xs"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-ith-mint" />
                    <span className="text-ith-charcoal">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── PROBLEMS ─────────────────────────────────────────────────────────────────

function ProblemsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const problems = [
    { icon: FileText, title: 'Fragmented Documentation', desc: 'Institutional records scattered across drives, emails, and personal devices with no governance.' },
    { icon: Clock, title: 'Manual Faculty Operations', desc: 'Attendance, timetable conflicts, and escalation delays handled through disconnected tools.' },
    { icon: Users, title: 'Unverified Participation', desc: 'Event participation and volunteer contributions lack auditable proof or verifiable records.' },
    { icon: ClipboardCheck, title: 'Disconnected Task Execution', desc: 'Teams manage work across spreadsheets and chat apps with no completion evidence.' },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">The Challenge</span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-ith-navy mt-3 leading-tight">
            Institutions and communities operate on disconnected systems
          </h2>
          <p className="mt-4 text-ith-slate leading-relaxed">
            Critical operations are scattered across tools that were never designed to work together. The result is lost documentation, unverified participation, and teams that cannot prove their execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-ith-ivory rounded-2xl p-6 border border-ith-ivory-dark hover:border-ith-orange/20 hover:shadow-ith transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-ith-navy/5 flex items-center justify-center mb-4 group-hover:bg-ith-orange/10 transition-colors">
                <p.icon className="w-5 h-5 text-ith-navy group-hover:text-ith-orange transition-colors" />
              </div>
              <h3 className="font-semibold text-ith-navy mb-2 text-sm">{p.title}</h3>
              <p className="text-xs text-ith-slate leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCT SHOWCASE ────────────────────────────────────────────────────────

function ProductShowcaseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section ref={ref} className="py-24 bg-ith-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">SaaS Portfolio</span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-ith-navy mt-3 leading-tight">
            Four connected products. One ecosystem.
          </h2>
          <p className="mt-4 text-ith-slate leading-relaxed">
            Each product works independently or as part of the connected InnoTech-Hub ecosystem. Deploy what you need today, scale when ready.
          </p>
        </motion.div>

        {/* Product tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProduct(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeProduct === i
                    ? 'bg-ith-navy text-ith-ivory shadow-ith'
                    : 'bg-white text-ith-slate hover:text-ith-navy border border-ith-ivory-dark'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{p.name.split('&')[0].trim()}</span>
                <span className="sm:hidden">{p.internal}</span>
              </button>
            );
          })}
        </div>

        {/* Active product display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-ith-orange/10 mb-4">
                <span className="text-[10px] font-mono-label text-ith-orange tracking-wide">{products[activeProduct].internal}</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-ith-navy mb-4 leading-tight">
                {products[activeProduct].name}
              </h3>
              <p className="text-ith-slate leading-relaxed mb-6">
                {products[activeProduct].desc}
              </p>

              <div className="space-y-3 mb-8">
                {products[activeProduct].features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-ith-mint/15 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-ith-mint-dark" />
                    </div>
                    <span className="text-sm text-ith-charcoal">{f}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href={`/products/${products[activeProduct].id}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-ith-navy hover:text-ith-orange transition-colors"
              >
                Explore {products[activeProduct].internal}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Animated visualization */}
            <div className="relative">
              <ProductVisualization productIndex={activeProduct} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProductVisualization({ productIndex }: { productIndex: number }) {
  const product = products[productIndex];

  if (productIndex === 0) return <RepositoryViz />;
  if (productIndex === 1) return <FacultyViz />;
  if (productIndex === 2) return <ParticipationViz />;
  return <TaskManagerViz />;
}

function RepositoryViz() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setStage((s) => (s + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  const folders = ['Academic', 'Administrative', 'Research', 'Compliance'];
  const statuses = ['Pending', 'Under Review', 'Approved', 'Archived'];

  return (
    <div className="bg-white rounded-2xl shadow-ith-lg border border-ith-ivory-dark p-5 perspective-1000">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FolderTree className="w-4 h-4 text-ith-orange" />
          <span className="text-xs font-semibold text-ith-navy">Institutional Repository</span>
        </div>
        <span className="text-[10px] font-mono-label text-ith-slate">SARGS</span>
      </div>

      {/* Folder grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {folders.map((folder, i) => (
          <motion.div
            key={folder}
            animate={{
              backgroundColor: stage === i ? 'rgba(211,77,50,0.08)' : 'rgba(250,248,245,1)',
              borderColor: stage === i ? 'rgba(211,77,50,0.3)' : 'rgba(240,237,231,1)',
            }}
            className="p-3 rounded-lg border"
          >
            <div className="flex items-center gap-1.5 mb-2">
              <FolderTree className="w-3 h-3 text-ith-slate" />
              <span className="text-[10px] font-medium text-ith-charcoal">{folder}</span>
            </div>
            <div className="space-y-1">
              {[1, 2].map((j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '100%' }}
                  transition={{ delay: (i * 2 + j) * 0.05 }}
                  className="h-1 rounded-full bg-ith-navy/10"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Approval flow */}
      <div className="bg-ith-ivory rounded-lg p-3">
        <div className="text-[9px] font-mono-label text-ith-slate mb-2">APPROVAL WORKFLOW</div>
        <div className="flex items-center gap-1">
          {statuses.map((status, i) => (
            <div key={status} className="flex-1 flex items-center gap-1">
              <motion.div
                animate={{
                  backgroundColor: i <= stage ? 'rgba(7,31,56,1)' : 'rgba(7,31,56,0.1)',
                  color: i <= stage ? '#FAF8F5' : '#687386',
                }}
                className="flex-1 px-2 py-1.5 rounded-md text-[9px] font-medium text-center"
              >
                {status}
              </motion.div>
              {i < statuses.length - 1 && (
                <div className={`w-2 h-px ${i < stage ? 'bg-ith-orange' : 'bg-ith-slate/20'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Audit entries */}
      <div className="mt-3 space-y-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-2 text-[10px]"
          >
            <div className="w-1 h-1 rounded-full bg-ith-mint" />
            <span className="font-mono-label text-ith-slate">AUDIT_{String(i + 1).padStart(3, '0')}</span>
            <span className="text-ith-charcoal">Document approved</span>
            <span className="text-ith-slate ml-auto">{['2m', '14m', '1h'][i]} ago</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FacultyViz() {
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime((t) => (t + 1) % 8), 1500);
    return () => clearInterval(interval);
  }, []);

  const periods = ['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

  return (
    <div className="bg-white rounded-2xl shadow-ith-lg border border-ith-ivory-dark p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-ith-orange" />
          <span className="text-xs font-semibold text-ith-navy">Faculty Operations</span>
        </div>
        <span className="text-[10px] font-mono-label text-ith-slate">FOPS</span>
      </div>

      {/* Timetable */}
      <div className="bg-ith-ivory rounded-lg p-3 mb-3">
        <div className="text-[9px] font-mono-label text-ith-slate mb-2">FACULTY TIMETABLE</div>
        <div className="grid grid-cols-6 gap-1">
          <div className="text-[8px] font-mono-label text-ith-slate" />
          {days.map((day) => (
            <div key={day} className="text-[8px] font-mono-label text-ith-slate text-center">{day}</div>
          ))}
          {periods.slice(0, 5).map((period, pi) => (
            <div key={period} className="contents">
              <div className="text-[8px] font-mono-label text-ith-slate py-1">{period}</div>
              {days.map((day, di) => {
                const isActive = currentTime % 5 === pi && currentTime % 5 === di;
                const hasClass = (pi + di) % 3 !== 0;
                return (
                  <motion.div
                    key={`${period}-${day}`}
                    animate={{
                      backgroundColor: isActive ? 'rgba(211,77,50,0.2)' : hasClass ? 'rgba(7,31,56,0.08)' : 'rgba(250,248,245,1)',
                      scale: isActive ? 1.05 : 1,
                    }}
                    className="h-7 rounded-md flex items-center justify-center"
                  >
                    {hasClass && <div className="w-1.5 h-1.5 rounded-full bg-ith-navy/30" />}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Smart Alert */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-ith-orange/8 border border-ith-orange/20 rounded-lg p-3 mb-3"
      >
        <div className="flex items-center gap-2">
          <Bell className="w-3.5 h-3.5 text-ith-orange" />
          <div className="flex-1">
            <div className="text-[10px] font-semibold text-ith-orange">SMART ALERT</div>
            <div className="text-[10px] text-ith-charcoal mt-0.5">Missed punch detected — Prof. Sharma (Dept of CS)</div>
          </div>
        </div>
      </motion.div>

      {/* Attendance stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'PRESENT', value: '42', color: 'text-ith-mint-dark' },
          { label: 'LATE', value: '7', color: 'text-ith-orange' },
          { label: 'ABSENT', value: '3', color: 'text-red-400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-ith-ivory rounded-lg p-2.5 text-center">
            <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-[8px] font-mono-label text-ith-slate">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ParticipationViz() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setStep((s) => (s + 1) % 6), 1800);
    return () => clearInterval(interval);
  }, []);

  const steps = ['QR Scan', 'Identity Verified', 'Presence Logged', 'Task Assigned', 'Proof Submitted', 'Verified'];

  return (
    <div className="bg-white rounded-2xl shadow-ith-lg border border-ith-ivory-dark p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <QrCode className="w-4 h-4 text-ith-orange" />
          <span className="text-xs font-semibold text-ith-navy">Verified Participation</span>
        </div>
        <span className="text-[10px] font-mono-label text-ith-slate">VPA</span>
      </div>

      {/* QR check-in animation */}
      <div className="flex items-center justify-center mb-4">
        <motion.div
          animate={{ scale: step === 0 ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-24 h-24 bg-ith-navy rounded-xl flex items-center justify-center"
        >
          <QrCode className="w-12 h-12 text-ith-ivory" />
          {step >= 1 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-ith-mint flex items-center justify-center"
            >
              <CheckCircle2 className="w-4 h-4 text-white" />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Process steps */}
      <div className="space-y-1.5 mb-3">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            animate={{
              opacity: i <= step ? 1 : 0.3,
              x: i === step ? 4 : 0,
            }}
            className="flex items-center gap-2 text-[10px]"
          >
            <div className={`w-1.5 h-1.5 rounded-full ${i <= step ? 'bg-ith-mint' : 'bg-ith-slate/20'}`} />
            <span className={i <= step ? 'text-ith-charcoal font-medium' : 'text-ith-slate'}>{s}</span>
            {i === step && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                transition={{ duration: 1.5 }}
                className="h-px bg-ith-orange/40 ml-auto"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Contribution card */}
      <motion.div
        animate={step >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        className="bg-ith-navy rounded-lg p-3"
      >
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-ith-mint" />
          <div className="flex-1">
            <div className="text-[10px] font-semibold text-ith-ivory">Verified Contribution</div>
            <div className="text-[9px] text-ith-ivory/60">Session: Hackathon Setup • 4h 30m</div>
          </div>
          <div className="text-[9px] font-mono-label text-ith-mint">VRF-2025</div>
        </div>
      </motion.div>
    </div>
  );
}

function TaskManagerViz() {
  const columns = ['Backlog', 'In Progress', 'Review', 'Done'];
  const [movedCard, setMovedCard] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setMovedCard((c) => (c + 1) % 4), 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-ith-lg border border-ith-ivory-dark p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <KanbanSquare className="w-4 h-4 text-ith-orange" />
          <span className="text-xs font-semibold text-ith-navy">Task Manager</span>
        </div>
        <span className="text-[10px] font-mono-label text-ith-slate">TM</span>
      </div>

      {/* Kanban board */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {columns.map((col, ci) => (
          <div key={col} className="bg-ith-ivory rounded-lg p-2">
            <div className="text-[8px] font-mono-label text-ith-slate mb-2 flex items-center justify-between">
              {col.toUpperCase()}
              <span className="bg-ith-navy/10 px-1 rounded text-ith-navy">{[3, 2, 1, 4][ci]}</span>
            </div>
            <div className="space-y-1.5">
              {[0, 1].map((ri) => {
                const cardIndex = ci * 2 + ri;
                const isMoving = movedCard === ci;
                return (
                  <motion.div
                    key={ri}
                    animate={{
                      y: isMoving ? -2 : 0,
                      boxShadow: isMoving ? '0 4px 12px rgba(7,31,56,0.12)' : '0 1px 3px rgba(7,31,56,0.06)',
                    }}
                    className="bg-white rounded-md p-1.5 border border-ith-ivory-dark"
                  >
                    <div className="h-1 w-2/3 rounded-full bg-ith-navy/15 mb-1" />
                    <div className="flex items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${ci === 3 ? 'bg-ith-mint' : ci === 2 ? 'bg-ith-orange' : 'bg-ith-slate/30'}`} />
                      <div className="h-1 flex-1 rounded-full bg-ith-navy/8" />
                    </div>
                    {ci >= 2 && (
                      <div className="mt-1 h-0.5 rounded-full bg-ith-ivory-dark overflow-hidden">
                        <motion.div
                          className="h-full bg-ith-orange"
                          initial={{ width: 0 }}
                          animate={{ width: `${[60, 100][ri] || 40}%` }}
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Team activity */}
      <div className="flex items-center gap-2 bg-ith-ivory rounded-lg p-2.5">
        <div className="flex -space-x-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-ith-navy/10 border-2 border-white flex items-center justify-center">
              <span className="text-[8px] font-bold text-ith-navy">{['A', 'R', 'K'][i]}</span>
            </div>
          ))}
        </div>
        <span className="text-[10px] text-ith-slate">3 team members active</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-ith-mint animate-pulse" />
          <span className="text-[9px] font-mono-label text-ith-slate">LIVE</span>
        </div>
      </div>
    </div>
  );
}

// ─── ECOSYSTEM ──────────────────────────────────────────────────────────────────

function EcosystemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section ref={ref} className="py-24 bg-ith-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(13,45,82,0.4) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Connected Ecosystem</span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-ith-ivory mt-3 leading-tight">
            Products that work better together
          </h2>
          <p className="mt-4 text-ith-ivory/60 leading-relaxed">
            Data flows between modules through animated pathways. Each product strengthens the others, creating a unified institutional technology platform.
          </p>
        </motion.div>

        {/* Ecosystem diagram */}
        <div className="relative w-full max-w-3xl mx-auto h-[460px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 460">
            {/* Connection lines */}
            {ecosystemModules.filter(m => m.type !== 'core').map((mod) => {
              const core = ecosystemModules[0];
              const isPlanned = mod.type === 'planned';
              return (
                <g key={`line-${mod.id}`}>
                  <line
                    x1={core.x * 6}
                    y1={core.y * 4.6}
                    x2={mod.x * 6}
                    y2={mod.y * 4.6}
                    stroke={isPlanned ? 'rgba(104,115,134,0.3)' : 'rgba(211,77,50,0.3)'}
                    strokeWidth="1"
                    strokeDasharray={isPlanned ? '4 4' : '0'}
                  />
                  {!isPlanned && (
                    <line
                      x1={core.x * 6}
                      y1={core.y * 4.6}
                      x2={mod.x * 6}
                      y2={mod.y * 4.6}
                      stroke="rgba(211,77,50,0.6)"
                      strokeWidth="2"
                      strokeDasharray="6 100"
                      className="animate-dash-flow"
                    />
                  )}
                </g>
              );
            })}

            {/* Data particles */}
            {ecosystemModules.filter(m => m.type === 'product').map((mod, i) => {
              const core = ecosystemModules[0];
              return (
                <motion.circle
                  key={`particle-${mod.id}`}
                  r="3"
                  fill="#D34D32"
                  initial={{ cx: core.x * 6, cy: core.y * 4.6 }}
                  animate={{
                    cx: [core.x * 6, mod.x * 6],
                    cy: [core.y * 4.6, mod.y * 4.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                    repeatType: 'reverse',
                  }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {ecosystemModules.map((mod) => {
            const isCore = mod.type === 'core';
            const isPlanned = mod.type === 'planned';
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute"
                style={{
                  left: `${mod.x}%`,
                  top: `${mod.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setHoveredNode(mod.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={isCore ? { boxShadow: ['0 0 20px rgba(211,77,50,0.2)', '0 0 40px rgba(211,77,50,0.4)', '0 0 20px rgba(211,77,50,0.2)'] } : {}}
                  transition={isCore ? { duration: 3, repeat: Infinity } : {}}
                  className={`rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all ${
                    isCore
                      ? 'w-32 h-32 bg-ith-orange text-ith-ivory'
                      : isPlanned
                      ? 'w-28 h-28 bg-ith-navy-light border-2 border-dashed border-ith-slate/40 text-ith-ivory/60'
                      : 'w-28 h-28 bg-ith-navy-light text-ith-ivory hover:border-ith-orange/40 border-2 border-transparent'
                  }`}
                >
                  {isCore && <Network className="w-5 h-5 mb-1.5" />}
                  <span className={`text-center px-2 ${isCore ? 'text-xs font-bold' : 'text-[10px] font-medium'}`}>
                    {mod.name}
                  </span>
                  {isPlanned && (
                    <span className="text-[8px] font-mono-label text-ith-slate mt-1">PLANNED</span>
                  )}
                </motion.div>

                {hoveredNode === mod.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-ith-ivory text-ith-navy text-[10px] font-medium rounded-lg whitespace-nowrap z-20 shadow-ith-lg"
                  >
                    {isCore ? 'Central platform hub' : isPlanned ? 'In development' : 'Integrated module'}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-ith-orange" />
            <span className="text-xs text-ith-ivory/60">Core Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-ith-navy-light border border-ith-orange/30" />
            <span className="text-xs text-ith-ivory/60">Integrated Product</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-dashed border-ith-slate/40" />
            <span className="text-xs text-ith-ivory/60">Planned Module</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SOLUTIONS ────────────────────────────────────────────────────────────────

function SolutionsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Solutions</span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-ith-navy mt-3 leading-tight">
            Built for who uses it
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-ith-ivory rounded-2xl p-8 border border-ith-ivory-dark hover:border-ith-orange/20 hover:shadow-ith-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-ith-navy flex items-center justify-center mb-5 group-hover:bg-ith-orange transition-colors">
                <sol.icon className="w-6 h-6 text-ith-ivory" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-ith-navy mb-3">{sol.title}</h3>
              <p className="text-sm text-ith-slate leading-relaxed mb-5">{sol.desc}</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {sol.points.map((p) => (
                  <div key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-ith-mint-dark" />
                    <span className="text-xs text-ith-charcoal">{p}</span>
                  </div>
                ))}
              </div>
              <Link
                href={sol.href}
                className="group/link inline-flex items-center gap-2 text-sm font-semibold text-ith-navy hover:text-ith-orange transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY ITH ───────────────────────────────────────────────────────────────────

function WhyITHSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-ith-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Why InnoTech-Hub</span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-ith-navy mt-3 leading-tight">
            Practical, modular, student-informed technology
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyITH.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 border border-ith-ivory-dark hover:shadow-ith transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-ith-orange/10 flex items-center justify-center mb-4 group-hover:bg-ith-orange/20 transition-colors">
                <item.icon className="w-5 h-5 text-ith-orange" />
              </div>
              <h3 className="font-semibold text-ith-navy mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-ith-slate leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STATS ─────────────────────────────────────────────────────────────────────

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Product Progress</span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-ith-navy mt-3 leading-tight">
            Verified development and real-world pilots
          </h2>
          <p className="mt-4 text-xs text-ith-slate font-mono-label">HISTORICAL AGGREGATE DATA — NOT LIVE TELEMETRY</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-ith-ivory rounded-2xl p-8 border border-ith-ivory-dark text-center"
            >
              <div className="text-4xl lg:text-5xl font-editorial font-bold text-ith-navy mb-2">
                <CountUp target={stat.value} inView={inView} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-mono-label text-ith-slate uppercase tracking-wider">
                {stat.label}
              </div>
              {i === 0 && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-ith-mint/15 text-[9px] font-mono-label text-ith-mint-dark">
                  LIVE
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, inView, suffix }: { target: number; inView: boolean; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

// ─── INNOVATION ────────────────────────────────────────────────────────────────

function InnovationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-ith-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Student Innovation Ecosystem</span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-ith-navy mt-3 leading-tight mb-4">
              Beyond software — building the innovation community
            </h2>
            <p className="text-ith-slate leading-relaxed mb-6">
              InnoTech-Hub is more than a SaaS company. We foster student innovation through hackathons, workshops, bootcamps, and technology education programs that connect campus talent with real-world challenges.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: Zap, label: 'Hackathons & Ideathons', desc: 'Multi-round competitions with team formation, judging, and certificates' },
                { icon: GraduationCap, label: 'Workshops & Bootcamps', desc: 'Skill-building programs with verified participation tracking' },
                { icon: Users, label: 'Community Building', desc: 'Technology communities with announcements, programs, and engagement' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-ith-ivory-dark flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-ith-orange" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ith-navy">{item.label}</div>
                    <div className="text-xs text-ith-slate mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/innovation"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ith-navy hover:text-ith-orange transition-colors"
            >
              Explore the ecosystem
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Hackathons', value: '8+', icon: Zap, color: 'bg-ith-orange' },
                { label: 'Workshops', value: '15+', icon: GraduationCap, color: 'bg-ith-navy' },
                { label: 'Participants', value: '5K+', icon: Users, color: 'bg-ith-mint-dark' },
                { label: 'Certificates', value: '2K+', icon: Award, color: 'bg-ith-charcoal' },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-ith-ivory-dark hover:shadow-ith transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center mb-3`}>
                    <card.icon className="w-5 h-5 text-ith-ivory" />
                  </div>
                  <div className="text-3xl font-editorial font-bold text-ith-navy">{card.value}</div>
                  <div className="text-xs font-mono-label text-ith-slate mt-1">{card.label.toUpperCase()}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── EVENTS ─────────────────────────────────────────────────────────────────────

function EventsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Events & Programs</span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-ith-navy mt-3 leading-tight">
              Upcoming innovation events
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ith-navy hover:text-ith-orange transition-colors"
          >
            View all events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-ith-ivory rounded-2xl p-6 border border-ith-ivory-dark hover:border-ith-orange/20 hover:shadow-ith-lg transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono-label text-ith-slate px-2 py-1 rounded-md bg-white border border-ith-ivory-dark">
                  {event.type.toUpperCase()}
                </span>
                <span className={`text-[10px] font-mono-label px-2 py-1 rounded-full ${
                  event.status === 'Registration Open' ? 'bg-ith-mint/15 text-ith-mint-dark' : 'bg-ith-orange/10 text-ith-orange'
                }`}>
                  {event.status.toUpperCase()}
                </span>
              </div>
              <h3 className="font-semibold text-ith-navy mb-3 group-hover:text-ith-orange transition-colors">
                {event.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-ith-slate">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  {event.mode}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ────────────────────────────────────────────────────────────────────────

function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-ith-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(211,77,50,0.15) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono-label text-ith-orange tracking-wider uppercase">Enterprise Demo</span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-ith-ivory mt-3 leading-tight">
            See InnoTech-Hub in action
          </h2>
          <p className="mt-6 text-ith-ivory/60 leading-relaxed max-w-xl mx-auto">
            Schedule a personalized walkthrough of our SaaS products. We will show you how connected institutional software can transform your operations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-demo"
              className="group px-6 py-3.5 text-sm font-semibold text-ith-navy bg-ith-ivory rounded-xl hover:shadow-ith-lg transition-all flex items-center gap-2"
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3.5 text-sm font-semibold text-ith-ivory border border-ith-ivory/20 rounded-xl hover:bg-ith-ivory/5 transition-all"
            >
              View Pricing
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-ith-ivory/40">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Role-based access control</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Modular deployment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
