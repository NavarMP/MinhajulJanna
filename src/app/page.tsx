import { SiteLayout } from '@/components/layout/site-layout';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <SiteLayout>
      <div className="min-h-screen">
        <Hero />
        <div className="container py-12 space-y-24">
          <Features />
          <AboutSection />
          <ContactSection />
        </div>
      </div>
    </SiteLayout>
  );
}