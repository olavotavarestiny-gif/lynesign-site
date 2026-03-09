'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      label: 'Indoor Billboards',
      submenu: [
        { label: 'Become a Venue Partner', href: '#' },
        { label: 'Locations', href: '#' },
        { label: 'Screen Advertising', href: '#' },
      ],
    },
    {
      label: 'Solutions',
      submenu: [
        { category: 'Foundational', items: ['Website Design', 'Google Business Profile', 'Social Media Management', 'Design Services'] },
        { category: 'Lead Gen', items: ['Social Media Ads', 'PPC'] },
        { category: 'Branding & Awareness', items: ['Connected TV/OTT', 'Display/Geofencing', 'Streaming Audio', 'Pre-Roll Ads', 'YouTube Ads'] },
      ],
    },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism shadow-lg' : 'bg-white/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.webp"
              alt="LyneSign Logo"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <span className="font-heading font-bold text-lg hidden sm:inline text-text-dark">LyneSign</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <button
                  className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1 text-text-dark font-medium"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Dropdown Menu */}
                {link.submenu && (
                  <div
                    className={`absolute left-0 mt-0 w-max bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4 ${
                      'category' in link.submenu[0] ? 'grid grid-cols-3 gap-8 p-8 w-screen max-w-2xl' : 'w-56'
                    }`}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {'category' in link.submenu[0] ? (
                      // Solutions dropdown
                      link.submenu.map((section: any) => (
                        <div key={section.category}>
                          <h4 className="font-heading font-bold text-sm text-text-dark mb-3">{section.category}</h4>
                          <ul className="space-y-2">
                            {section.items.map((item: string) => (
                              <li key={item}>
                                <a href="#" className="text-sm text-text-light hover:text-accent-coral transition-colors">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      // Other dropdowns
                      link.submenu.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-text-dark hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {item.label}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="px-6 py-2.5 bg-accent-coral text-white rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-text-dark font-medium flex items-center justify-between">
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
            <button className="w-full mt-4 px-4 py-2.5 bg-accent-coral text-white rounded-lg font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}