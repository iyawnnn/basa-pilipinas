import Link from "next/link";
import { ArrowRight, Gift, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="w-full py-20 md:py-24 bg-brand-blue text-white overflow-hidden relative">
      
      {/* Background Decor 1: Abstract Gradient */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      
      {/* Background Decor 2: Giant Icon (Subtle Depth) */}
      <div className="absolute -bottom-10 -right-10 md:-right-20 text-white opacity-5 transform rotate-12 pointer-events-none">
         <Gift className="w-64 h-64 md:w-96 md:h-96" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8">
          
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left max-w-3xl">
            
            {/* Badge - CHANGED: 'Limited Offer' -> 'Best Value Picks' */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-brand-gold shadow-sm">
              <Tag className="h-3.5 w-3.5" /> 
              <span>Best Value Picks</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter leading-[0.9] text-white">
              Books Under <span className="text-brand-gold">₱300</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed font-light max-w-xl mx-auto md:mx-0">
              Building a library doesn't have to break the bank. Discover hidden gems, classic tales, and modern favorites—all for the price of a coffee.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button asChild size="lg" className="w-full md:w-auto h-14 px-10 rounded-full bg-white text-brand-blue hover:bg-brand-gold hover:text-brand-black font-bold text-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1">
              <Link href="/collections/under-300">
                Shop Budget Deals <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}