'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, Palette, Navigation, Share2, Tv, ArrowRight } from 'lucide-react';

export default function SolutionsShowcase() {
  const solutions = [
    {
      icon: Globe,
      title: 'Google Business Profile',
      description: 'Boost local visibility and attract nearby customers',
      gradient: 'from-navy to-blue-700',
      size: 'col-span-1 row-span-1',
    },
    {
      icon: Zap,
      title: 'PPC Advertising',
      description: 'Immediate results with pay-per-click campaigns',
      gradient: 'from-blue-600 to-blue-800',
      size: 'col-span-1 row-span-1',
    },
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Custom websites that convert visitors into customers',
      gradient: 'from-navy to-blue-700',
      size: 'col-span-1 md:col-span-2 row-span-1',
    },
    {
      icon: Navigation,
      title: 'Geofencing & Display',
      description: 'Target customers based on their real-time location',
      gradient: 'from-blue-600 to-blue-800',
      size: 'col-span-1 md:col-span-2 row-span-1',
    },
    {
      icon: Share2,
      title: 'Social Media Ads',
      description: 'Engage audiences on Facebook, Instagram & beyond',
      gradient: 'from-navy to-blue-700',
      size: 'col-span-1 row-span-1',
    },
    {
      icon: Tv,
      title: 'Connected TV / OTT',
      description: 'Stream ads on smart TVs and streaming platforms',
      gradient: 'from-blue-600 to-blue-800',
      size: 'col-span-1 row-span-1',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="mb-16 text-center">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
              Solutions
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            Full-Service Marketing Solutions
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beyond billboards—we're your complete local marketing partner. From website design to advanced advertising, we've got you covered.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className={`${solution.size} bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden relative`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-navy mb-2">{solution.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{solution.description}</p>

                  <div className="flex items-center gap-2 text-navy font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Solutions CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="text-center">
          <motion.button variants={itemVariants} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-navy to-blue-700 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group">
            View All Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
