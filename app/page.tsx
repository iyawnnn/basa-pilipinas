// 1. Notice the capital letters in the paths now match your filenames
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { BrandStory } from "@/components/sections/BrandStory";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      {/* 1. Hero: Split Screen & Introduction */}
      <HeroSection />

      {/* 2. Featured: The Books Grid */}
      <FeaturedCollection />

      {/* 3. Brand Story: Authenticity & Trust */}
      <BrandStory />
    </main>
  );
}