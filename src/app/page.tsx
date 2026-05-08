import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { BrandStatement } from "@/components/brand-statement";
import { FeaturesSection } from "@/components/features-section";
import { FeaturedBranches } from "@/components/featured-branches";
import { MenuHighlights } from "@/components/menu-highlights";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <FeaturesSection />
        <FeaturedBranches />
        <MenuHighlights />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
