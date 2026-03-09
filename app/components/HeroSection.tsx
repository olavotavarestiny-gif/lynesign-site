'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [stats, setStats] = useState({ impressions: 0, recall: 0, venues: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger animation on mount
      setStats({ impressions: 2000000, recall: 83, venues: 500 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Gradient & Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                Amplify Your Brand
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-dark mb-6 leading-tight"
            >
              Where Your Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-coral to-accent-purple">Matters Most</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-text-light mb-8 max-w-xl leading-relaxed">
              Reach local customers with cutting-edge indoor digital billboards and data-driven marketing solutions in Houston, TX. Impossible to skip, block, or ignore.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-3.5 bg-accent-coral text-white rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                See Our Locations
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3.5 border-2 border-text-dark text-text-dark rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300">
                Book a Demo
              </button>
            </motion.div>

            {/* Floating Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              <StatCard value="2M+" label="Monthly Impressions" />
              <StatCard value="83%" label="Brand Recall" />
              <StatCard value="500+" label="Venue Partners" />
            </motion.div>
          </div>

          {/* Right Visual - Billboard Mockup */}
          <motion.div variants={itemVariants} className="relative h-full flex items-center justify-center">
            <div className="relative w-full aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden border-8 border-black">
              {/* Billboard Screen Content - Rotating Ads */}
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="text-center text-white"
                >
                  <div className="text-5xl font-bold mb-4 text-accent-coral">SPECIAL OFFER</div>
                  <div className="text-2xl mb-6">50% OFF Today</div>
                  <div className="text-lg">Limited Time Only</div>
                </motion.div>
              </div>

              {/* Bezel Effect */}
              <div className="absolute inset-0 pointer-events-none border-4 border-slate-900/50 rounded-xl"></div>

              {/* Floating Cards with Stats */}
              <motion.div
                animate={{ y: -10 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute -top-6 -left-6 z-20"
              >
                <div className="bg-white rounded-lg shadow-xl p-4 w-48">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent-coral" />
                    <span className="text-xs font-semibold text-text-dark">IMPRESSIONS</span>
                  </div>
                  <div className="text-2xl font-bold text-text-dark">2.1M</div>
                  <div className="text-xs text-text-light">This month</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: 10 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
                className="absolute -bottom-6 -right-6 z-20"
              >
                <div className="bg-white rounded-lg shadow-xl p-4 w-48">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent-coral" />
                    <span className="text-xs font-semibold text-text-dark">RECALL RATE</span>
                  </div>
                  <div className="text-2xl font-bold text-text-dark">83%</div>
                  <div className="text-xs text-text-light">Consumer recall</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Grid Pattern Background */}
      <style jsx>{`
        @keyframes grid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        .bg-grid-pattern {
          background-image:
            linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.05) 25%, rgba(0, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0.05) 76%, transparent 77%, transparent);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-2xl font-bold text-accent-coral mb-1">{value}</div>
      <div className="text-xs text-text-light font-medium">{label}</div>
    </div>
  );
}