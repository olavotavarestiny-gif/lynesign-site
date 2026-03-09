'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, MapPin, ShieldCheck, Target, Monitor } from 'lucide-react';

export default function IndoorBillboardsSection() {
  const features = [
    {
      icon: MapPin,
      title: 'Strategic High-Traffic Placement',
      description: 'Located in premium venues where audiences spend quality time',
    },
    {
      icon: ShieldCheck,
      title: "Can't Be Skipped, Paused or Blocked",
      description: 'Captive audiences with zero ad blockers or skip buttons',
    },
    {
      icon: Target,
      title: 'Hyper-Local Audience Targeting',
      description: 'Reach customers exactly where they shop, eat, work & play',
    },
    {
      icon: Monitor,
      title: 'Dynamic Content Rotation',
      description: 'Update ads in real-time across our entire network',
    },
  ];

  const venues = [
    { name: 'Restaurants & Bars' },
    { name: 'Shopping Centers' },
    { name: 'Fitness & Wellness' },
    { name: 'Entertainment Venues' },
    { name: 'Corporate Offices' },
    { name: 'Retail Stores' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Images Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {venues.map((venue, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-navy to-blue-700 flex items-center justify-center text-white text-center p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div>
                    <Monitor className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-semibold">{venue.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
                Indoor Billboards
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
              Captivate Your Audience Where They Already Are
            </motion.h2>

            <motion.p variants={itemVariants} className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our network of premium indoor digital billboards reaches millions of local customers in venues they already visit. Unlike traditional advertising, digital billboards can't be skipped, blocked, or ignored—delivering guaranteed impressions in high-traffic, captive-audience environments.
            </motion.p>

            {/* Features List */}
            <motion.div variants={containerVariants} className="space-y-4 mb-10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={idx} variants={itemVariants} className="flex gap-4 items-start">
                    <Icon className="w-6 h-6 text-navy mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-navy mb-1">{feature.title}</h4>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.button variants={itemVariants} className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white rounded-lg font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Explore Our Network
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
