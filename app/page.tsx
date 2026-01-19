import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { StoreShowcase } from "@/components/sections/StoreShowcase";
import { Locations } from "@/components/sections/Locations";
import { StorySection } from "@/components/sections/StorySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      
      {/* 1. HERO: Overview & Core Action */}
      <HeroSection />

      {/* 2. TRUST: Credibility (Pampanga/Shipping) */}
      <TrustBar />

      {/* 3. STORY: The "Soul" of the brand */}
      <StorySection />

      {/* 4. GENRES: The "Map" for readers */}
      <CategoryGrid />

      {/* 5. BESTSELLERS: The "Products" */}
      <FeaturedCollection />

      {/* 6. PROMO: The "Nudge" (Pattern Interrupt) */}
      <PromoBanner />

      {/* 7. SHOWCASE: The "Vibe" (Physical Store) */}
      <StoreShowcase />

      {/* 8. REVIEWS: The "Proof" */}
      <Testimonials />

      {/* 9. LOCATIONS: The "Destination" */}
      <Locations />
      
    </main>
  );
}