"use client";

import { Star, Quote, ThumbsUp } from "lucide-react";

const REVIEWS = [
  { 
    id: 1, 
    name: "Vhin Candalesa", 
    role: "Verified Buyer", 
    text: "I really enjoyed the experience. Regarding the book I bought, they provided details and explained the condition before packing it, which I appreciated the most.",
  },
  { 
    id: 2, 
    name: "Chanty Mae", 
    role: "Verified Buyer", 
    text: "Smooth transaction, very secured packaging, affordable good-read books and fast delivery. Thank you for the free bookmarks and thank you letter!",
  },
  { 
    id: 3, 
    name: "Alyssa G. N. Cruz", 
    role: "Verified Buyer", 
    text: "Highly recommended. I have just bought 4 books and it was neatly packaged and arrived in time. I loved the titles and will definitely be buying more.",
  }
];

export function Testimonials() {
  return (
    <section className="w-full py-20 bg-gray-50 border-b border-gray-100">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 px-4">
          
          {/* FIX: Changed from Circle to "Pill Badge" to match Story/Category sections */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6 border border-blue-100">
             <ThumbsUp className="w-3 h-3" />
             <span>Community Feedback</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-black tracking-tighter mb-4">
            Trusted by Readers.
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            Join thousands of Filipinos elevating their minds with Basa Pilipinas.
          </p>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="relative group flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-blue-50 transition-colors duration-300">
                <Quote className="h-16 w-16 opacity-50 transform rotate-180" />
              </div>

              {/* Review Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>

                <p className="text-brand-black leading-relaxed font-medium text-lg">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="relative z-10 pt-6 mt-6 border-t border-gray-50">
                <p className="font-bold text-brand-black text-sm">
                  {review.name}
                </p>
                <p className="text-xs text-brand-blue font-bold tracking-wide uppercase mt-0.5">
                  {review.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}