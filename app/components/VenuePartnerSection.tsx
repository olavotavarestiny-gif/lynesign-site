'use client';

import { motion } from 'framer-motion';
import { DollarSign, Users, Zap, ArrowRight } from 'lucide-react';

export default function VenuePartnerSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Additional Revenue',
      description: 'Earn passive income from your existing space',
    },
    {
      icon: Users,
      title: 'Increased Foot Traffic',
      description: 'Attract more customers to your venue',
    },
    {
      icon: Zap,
      title: 'Zero Maintenance',
      description: 'We handle installation, content & support',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
              Partnership Opportunity
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6 leading-tight">
            Join Houston's Premier Indoor Advertising Network
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Millions of consumers see our screens every month. Turn your location into a revenue stream while we handle everything.
          </motion.p>

          {/* Benefits Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={idx} variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-blue-700 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-navy to-blue-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Become a Partner
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Testimonial */}
          <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-gray-200">
            <p className="text-slate-600 italic mb-4 text-lg">
              "LyneSign transformed how we engage with customers. The passive revenue is a great bonus!"
            </p>
            <p className="font-semibold text-navy">— Sarah Mitchell, Restaurant Owner</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
