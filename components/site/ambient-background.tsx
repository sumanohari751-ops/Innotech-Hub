'use client';

import { motion } from 'framer-motion';

export function AmbientBackground({ variant = 'navy' }: { variant?: 'navy' | 'light' }) {
  const isNavy = variant === 'navy';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className={`absolute inset-0 ${isNavy ? 'grid-pattern' : 'grid-pattern-dark'}`}
        style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }}
      />

      {/* Drifting gradient blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: isNavy
            ? 'radial-gradient(circle, rgba(211,77,50,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(211,77,50,0.08) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: isNavy
            ? 'radial-gradient(circle, rgba(88,215,170,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(13,45,82,0.06) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: isNavy
            ? 'radial-gradient(circle, rgba(20,61,107,0.4) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(211,77,50,0.05) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle particles */}
      {isNavy && (
        <>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-ith-orange/30"
              style={{
                left: `${10 + (i * 7) % 80}%`,
                top: `${15 + (i * 13) % 70}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 8 + (i % 4) * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
