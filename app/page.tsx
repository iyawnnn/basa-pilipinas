import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Locations } from "@/components/sections/Locations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      {/* 1. HERO (White) */}
      <HeroSection />
      
      {/* 2. TRUST (Gray/White) */}
      <TrustBar />
      
      {/* 3. BESTSELLERS (White) */}
      <FeaturedCollection />
      
      {/* 4. PROMO DEAL (Brand Blue) - Breaks the white space */}
      <PromoBanner />

      {/* 5. GENRES (White) */}
      <CategoryGrid />
      
      {/* 6. REVIEWS (Gray/White) */}
      <Testimonials />
      
      {/* 7. LOCATIONS (Dark Gray) */}
      <Locations />
    </main>
  );
}