import Link from "next/link";
import { BookOpen, ShoppingBag, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-brand-black">
      
      {/* PERFORMANCE FIX: Removed heavy Blur-100px elements. 
          Replaced with a simple static grid for texture without lag. */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content */}
      <div className="container py-20 lg:py-23 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter text-brand-black leading-[1.1]">
              Elevating Minds, <br />
              <span className="text-brand-blue">Crafting Change.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <span className="font-bold text-brand-black">Basa Pilipinas Bookstore</span>. 
              We believe reading is a right, not a luxury. Our mission is to provide every Filipino with access to 
              books that spark curiosity and unlock opportunities—regardless of budget.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="h-12 min-w-[180px] px-8 rounded-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-base shadow-lg shadow-red-100 transition-transform duration-300 hover:-translate-y-1">
                <Link href="/collections/all">
                  <ShoppingBag className="mr-2 h-5 w-5" /> Shop Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 min-w-[180px] px-8 rounded-full border border-gray-300 hover:border-brand-black hover:bg-white text-brand-black font-bold text-base shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <Link href="/about">
                  <Info className="mr-2 h-5 w-5" /> Our Mission
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Book Visual */}
          <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative group perspective-1000">
              <div className="relative w-[280px] h-[420px] md:w-[340px] md:h-[500px] bg-brand-blue rounded-r-xl rounded-l-sm shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] transform transition-transform duration-700 ease-out rotate-y-[-15deg] group-hover:rotate-y-0 group-hover:scale-105 border-l-4 border-l-blue-900 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-brand-blue rounded-r-xl opacity-100" />
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/10" />

                <div className="absolute top-12 left-0 right-0 text-center px-4">
                  {/* PERFORMANCE FIX: Removed backdrop-blur-sm. Used solid border/bg fallback */}
                  <div className="inline-block p-4 rounded-full bg-[#0a3a8a] border border-white/20 mb-4">
                    <BookOpen className="w-8 h-8 text-[#D4AF37]" />
                  </div>

                  <h2 className="text-6xl font-heading font-black text-white tracking-widest opacity-90 leading-none">
                    BPB
                  </h2>

                  <div className="mt-4 border-t border-white/20 pt-4 mx-8">
                    <p className="text-xs font-bold text-white tracking-[0.2em] uppercase">
                      Basa Pilipinas
                    </p>
                    <p className="text-xl font-heading font-bold text-white uppercase tracking-wide mt-1">
                      Bookstore
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-12 left-8 right-8">
                  <div className="h-1 w-full bg-white/20 mb-2 rounded-full" />
                  <div className="h-1 w-2/3 bg-white/20 mb-2 rounded-full" />
                  <div className="h-1 w-1/3 bg-brand-red rounded-full" />
                </div>
              </div>
              <div className="absolute -bottom-10 left-10 right-10 h-8 bg-black/20 blur-xl rounded-[50%] transform rotate-x-[60deg]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}