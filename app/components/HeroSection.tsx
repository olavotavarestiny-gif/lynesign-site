import { Hero } from "@/components/ui/animated-hero";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white">
      {/* Subtle blue gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />

      <div className="relative z-10">
        <Hero />
      </div>
    </section>
  );
}
