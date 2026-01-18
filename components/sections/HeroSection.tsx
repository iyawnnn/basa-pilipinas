import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full bg-white text-slate-900 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-10">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wide uppercase ml-1">Trusted by 10,000+ Readers</span>
            </div>

            {/* Headline with SEO Keywords */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-black tracking-tight text-slate-900 leading-[1.1]">
              Authentic Books. <br />
              <span className="text-blue-600">Accessible Prices.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Welcome to <span className="font-bold text-slate-900">Basa Pilipinas Bookstore</span>. 
              We are a social enterprise offering authentic, discounted books to fuel your mind while feeding the next generation of Filipino readers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-200">
                <Link href="/products">
                  Shop New Arrivals <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-full border-2 border-slate-200 hover:border-slate-900 hover:bg-transparent text-slate-900 font-bold text-base transition-colors">
                <Link href="/locations">
                  <MapPin className="mr-2 h-4 w-4" /> Visit Our Branches
                </Link>
              </Button>
            </div>

            {/* Features / SEO Trust Signals */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span>100% Original Copies</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span>Top Rated Seller</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="flex-1 w-full relative">
            {/* Main Image Container */}
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl ring-1 ring-slate-900/5">
               {/* Placeholder for Store/Book Image */}
               <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
                  <span className="text-slate-300 font-heading font-black text-4xl">BPB IMAGE</span>
               </div>
               
               {/* Floating Card: Mission */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-xl">🥣</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Read to Feed</h3>
                      <p className="text-sm text-slate-600 mt-1">Every purchase funds our feeding programs in Central Luzon & Mindanao.</p>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -z-10 opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
}
