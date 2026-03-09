'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASection() {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Ready to Amplify Your Brand?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Let's build a data-driven marketing strategy that delivers real results for your Houston business. Whether you're looking to increase foot traffic, boost awareness, or generate leads—we have the solution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-navy to-blue-700 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-8">
            <a
              href="tel:+12815550100"
              className="inline-flex items-center gap-3 text-white hover:text-gold transition-colors"
            >
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Call Us</div>
                <div className="font-bold">(281) 555-0100</div>
              </div>
            </a>
            <a
              href="mailto:info@lynesign.com"
              className="inline-flex items-center gap-3 text-white hover:text-gold transition-colors"
            >
              <Mail className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm text-gray-400">Email Us</div>
                <div className="font-bold">info@lynesign.com</div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}