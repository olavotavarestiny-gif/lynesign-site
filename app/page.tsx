import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import IndoorBillboardsSection from './components/IndoorBillboardsSection';
import VenuePartnerSection from './components/VenuePartnerSection';
import SolutionsShowcase from './components/SolutionsShowcase';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CTASection from './components/CTASection';

export const metadata = {
  title: 'LyneSign | Indoor Digital Billboards & Local Marketing',
  description:
    'Connect with local customers using cutting-edge indoor digital billboards and data-driven marketing solutions in Houston, TX. Reach audiences where they shop, eat, work & play.',
  keywords: [
    'indoor digital billboards',
    'local advertising',
    'Houston marketing',
    'digital advertising',
    'local SEO',
    'digital marketing',
  ],
};

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <IndoorBillboardsSection />
      <VenuePartnerSection />
      <SolutionsShowcase />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
