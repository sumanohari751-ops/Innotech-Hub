'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth-context';
import { Mail, Lock, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error: signInError } = await signIn(email, password);
    if (signInError) {
      setError(signInError);
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ith-ivory px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg bg-ith-navy flex items-center justify-center relative">
              <span className="font-editorial font-bold text-ith-ivory text-xl">I</span>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-ith-orange" />
            </div>
            <span className="font-editorial font-bold text-xl text-ith-navy">
              InnoTech<span className="text-ith-orange">Hub</span>
            </span>
          </Link>
          <h1 className="font-editorial text-2xl font-bold text-ith-navy">Welcome back</h1>
          <p className="text-sm text-ith-slate mt-2">Sign in to your InnoTech-Hub account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-ith border border-ith-ivory-dark p-8 space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <div>
            <label className="text-xs font-medium text-ith-charcoal mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ith-slate" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-ith-ivory-dark bg-ith-ivory text-sm focus:outline-none focus:border-ith-orange transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-ith-charcoal mb-1.5 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ith-slate" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-ith-ivory-dark bg-ith-ivory text-sm focus:outline-none focus:border-ith-orange transition-colors"
                placeholder="Your password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-ith-navy text-ith-ivory rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-ith-navy-light transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Sign In <ArrowRight className="w-4 h-4" /></>}
          </button>

          <p className="text-center text-xs text-ith-slate">
            Don't have an account?{' '}
            <Link href="/signup" className="text-ith-orange font-semibold hover:underline">Sign up</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
