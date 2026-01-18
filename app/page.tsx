import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { BrandStory } from "@/components/sections/BrandStory";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      {/* NO PADDING HERE. 
         The sections below now handle their own alignment using the .container class.
      */}
      <HeroSection />
      <FeaturedCollection />
      <BrandStory />
    </main>
  );
}