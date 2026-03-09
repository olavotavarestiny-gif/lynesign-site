'use client';

import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-slate-700">
          {/* Column 1: Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="font-heading font-bold text-lg">LyneSign</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Local marketing company in Houston, TX. Connecting businesses with customers through cutting-edge indoor digital advertising.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Indoor Billboards', 'Solutions', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {['Website Design', 'Social Media Ads', 'PPC Advertising', 'Geofencing', 'Connected TV'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-gold transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-slate-400 text-sm">
                <span className="block font-medium text-white mb-1">Address</span>
                Missouri City, Houston, TX
              </p>
              <p className="text-slate-400 text-sm">
                <span className="block font-medium text-white mb-1">Phone</span>
                <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                  (281) 555-0100
                </a>
              </p>
              <p className="text-slate-400 text-sm">
                <span className="block font-medium text-white mb-1">Email</span>
                <a href="mailto:info@lynesign.com" className="hover:text-gold transition-colors">
                  info@lynesign.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} LyneSign. All rights reserved. Designed by N-Compass TV
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: '#', label: 'Facebook' },
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Youtube, href: '#', label: 'YouTube' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-navy transition-colors flex items-center justify-center"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}