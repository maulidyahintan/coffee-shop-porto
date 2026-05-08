import { BrandStatement } from "@/components/brand-statement";
import { CtaSection } from "@/components/cta-section";
import { FeaturedBranches } from "@/components/featured-branches";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MenuHighlights } from "@/components/menu-highlights";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";

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
