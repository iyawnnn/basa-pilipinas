import { ShieldCheck, Tag, HeartHandshake } from "lucide-react";

export function BrandStory() {
  return (
    <section id="brand-story" className="w-full py-16 md:py-24 bg-primary text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-extrabold font-heading text-white uppercase tracking-wide">
             The Basa Promise
           </h2>
           <div className="h-1 w-24 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Authentic */}
          <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="p-4 bg-brand-black/30 rounded-full border border-white/10">
              <ShieldCheck className="h-10 w-10 text-brand-gold" />
            </div>
            <h3 className="text-xl font-bold font-heading">100% Authentic</h3>
            <p className="text-blue-100 leading-relaxed">
              We partner directly with publishers. Every book is genuine, ensuring authors get their due.
            </p>
          </div>

          {/* Price */}
          <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="p-4 bg-brand-red rounded-full shadow-lg transform -translate-y-2 border border-white/20">
              <Tag className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold font-heading">Fair Pricing</h3>
            <p className="text-blue-100 leading-relaxed">
              We keep margins low so you can read more. Enjoy standard discounts of 20-50% off retail.
            </p>
          </div>

          {/* Social Impact */}
          <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="p-4 bg-brand-black/30 rounded-full border border-white/10">
              <HeartHandshake className="h-10 w-10 text-brand-gold" />
            </div>
            <h3 className="text-xl font-bold font-heading">Read to Feed</h3>
            <p className="text-blue-100 leading-relaxed">
              Your purchase fuels our literacy drives in Pampanga and rural Central Luzon communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}