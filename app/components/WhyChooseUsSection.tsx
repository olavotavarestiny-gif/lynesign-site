'use client';

import { motion } from 'framer-motion';
import { Heart, Target, DollarSign, Sparkles, BarChart3 } from 'lucide-react';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Local Marketing Experts',
      description: 'Community-focused, Houston-based team that understands local market dynamics and customer behavior.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      testimonial: '"They know Houston like no one else."',
    },
    {
      title: 'Community-Based Advertising',
      description: 'Authentic connection with local audiences through venues where real relationships happen.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Affordability',
      description: 'Budget-friendly solutions for businesses of all sizes, with maximum ROI guaranteed.',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Creative Excellence',
      description: 'Stand-out designs and compelling content that actually converts viewers into customers.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Proven Results',
      description: 'Track record of measurable success with data-driven insights and transparent reporting.',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-6">
            Why Businesses Choose LyneSign
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            We're not just another marketing agency. Here's what sets us apart.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="space-y-16">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            const isReverse = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
              >
                {/* Content */}
                <div className={isReverse ? 'md:order-2' : ''}>
                  <div className="flex items-start gap-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-dark mb-4">{reason.title}</h3>
                      <p className="text-text-light text-lg mb-6 leading-relaxed">{reason.description}</p>
                      {reason.testimonial && <p className="text-lg italic text-accent-coral font-medium">{reason.testimonial}</p>}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <motion.div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden ${isReverse ? 'md:order-1' : ''}`} whileHover={{ scale: 1.05 }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-6xl"
                    >
                      {['🎯', '🚀', '💡', '✨', '📊'][idx % 5]}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}