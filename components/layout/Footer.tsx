"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Clock, Truck, Banknote, BookOpen, Library } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      
      {/* --- BACKGROUND ART --- */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.03]">
          <BookOpen className="w-[600px] h-[600px] absolute -top-20 -right-20 text-white transform -rotate-12" />
          <Library className="w-[400px] h-[400px] absolute bottom-0 left-0 text-white transform rotate-6" />
      </div>

      {/* STRICT PADDING: 'container mx-auto' matches your Header exactly */}
      <div className="container mx-auto relative z-10">
        
        {/* --- TOP SECTION: Brand & Contact Info --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 border-b border-white/10 pb-12">
          
          {/* Brand Identity */}
          <div className="space-y-6 max-w-lg">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tighter text-white">
                BASA PILIPINAS BOOKSTORE
              </h2>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              Elevating Minds, Crafting Change. We are dedicated to building a nation of readers, one page at a time. Join our community and discover your next great read.
            </p>
            
            {/* Socials */}
            <div className="flex gap-3 pt-2">
              <SocialIcon 
                href="https://www.facebook.com/BasaPilipinasFB" 
                icon={<Facebook className="h-5 w-5" />} 
                label="Facebook" 
              />
              <SocialIcon 
                href="https://www.instagram.com/basapilipinasbookstore/" 
                icon={<Instagram className="h-5 w-5" />} 
                label="Instagram" 
              />
              <SocialIcon 
                href="https://www.tiktok.com/@basapilipinasbookstore?is_from_webapp=1&sender_device=pc" 
                icon={<TikTokIcon />} 
                label="TikTok" 
              />
              <SocialIcon 
                href="https://shopee.ph/basapilipinasbookstore" 
                icon={<ShopeeIcon />} 
                label="Shopee" 
              />
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 w-full lg:w-auto">
             
             {/* Contact Column */}
             <div className="space-y-4">
                <h4 className="font-heading font-bold text-xs text-brand-gold uppercase tracking-[0.2em]">Contact Us</h4>
                <div className="space-y-4 text-sm text-gray-400">
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="pt-1.5">
                      <a href="mailto:basapilipinasfb@gmail.com" className="text-white hover:text-brand-gold transition-colors block">
                        basapilipinasfb@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="pt-1">
                      <p className="text-white font-medium">Waltermart Pampanga</p>
                      <p className="text-xs mt-0.5">G/F Beside Goldilocks</p>
                    </div>
                  </div>
                </div>
             </div>

             {/* Hours Column */}
             <div className="space-y-4">
                <h4 className="font-heading font-bold text-xs text-brand-gold uppercase tracking-[0.2em]">Store Hours</h4>
                <div className="flex items-start gap-3 group text-sm text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-black transition-colors">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="pt-1">
                    <p className="text-white font-medium">Mon - Sun (Daily)</p>
                    <p className="text-xs mt-0.5">9:00 AM - 9:00 PM</p>
                  </div>
                </div>
             </div>
          </div>
        </div>


        {/* --- MIDDLE SECTION: Links --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          
          {/* Column 1: Collections */}
          <div className="space-y-5">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest border-b border-white/10 pb-2 inline-block">
              Collections
            </h4>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="/collections/under-300">300 and Below</FooterLink></li>
              <li><FooterLink href="/collections/gift-bundles">Gift Bundle Collection</FooterLink></li>
              <li><FooterLink href="/collections/business-marketing">Business, Sales & Marketing</FooterLink></li>
              <li><FooterLink href="/collections/leadership">Leadership</FooterLink></li>
              <li><FooterLink href="/collections/bundle-promo">Bundle Promo (Tipid Deals)</FooterLink></li>
              <li><FooterLink href="/collections/premium">Premium Titles</FooterLink></li>
              <li><FooterLink href="/collections/twsi">TWSI (Slight Issues)</FooterLink></li>
              <li><FooterLink href="/collections/regular">Regular Titles</FooterLink></li>
            </ul>
          </div>

          {/* Column 2: Genres */}
          <div className="space-y-5">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest border-b border-white/10 pb-2 inline-block">
              Genres
            </h4>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="/collections/finance">Finance & Wealth</FooterLink></li>
              <li><FooterLink href="/collections/self-help">Self Help & Growth</FooterLink></li>
              <li><FooterLink href="/collections/psychology">Psychology</FooterLink></li>
              <li><FooterLink href="/collections/romance">Romance</FooterLink></li>
              <li><FooterLink href="/collections/classics">Literary Classics</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-5">
             <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest border-b border-white/10 pb-2 inline-block">
               Company
             </h4>
             <ul className="space-y-3 text-sm">
              <li><FooterLink href="/about">Our Story</FooterLink></li>
              <li><FooterLink href="/locations">Store Locations</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div className="space-y-5">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-widest border-b border-white/10 pb-2 inline-block">
              Customer Care
            </h4>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="/help/faqs">FAQs</FooterLink></li>
              <li><FooterLink href="/contact">Contact Us</FooterLink></li>
            </ul>
          </div>
        </div>


        {/* --- BOTTOM SECTION: Copyright & Trust --- */}
        {/* REORDER FIX: flex-col-reverse makes the Trust Indicators (bottom in DOM) appear Top in Mobile */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500 gap-6">
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span>&copy; {currentYear} Basa Pilipinas Bookstore. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400">
                <Banknote className="h-4 w-4 text-brand-gold" />
                <span className="font-medium">Cash on Delivery</span>
            </div>
            <div className="h-3 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 text-gray-400">
                <Truck className="h-4 w-4 text-brand-gold" />
                <span className="font-medium">Nationwide Shipping</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

// --- Helper Components ---

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-gray-400 hover:text-brand-gold hover:translate-x-1 transition-all duration-200 block"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-all duration-300 group"
    >
      {icon}
    </a>
  );
}

// --- Custom Icons ---

function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function ShopeeIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2 -1.857l.867 -12.143h-16l-.01 0" />
      <path d="M8.5 7c0 -1.653 1.5 -4 3.5 -4s3.5 2.347 3.5 4" />
      <path d="M9.5 17c.413 .462 1 1 2.5 1s2.5 -.897 2.5 -2s-1 -1.5 -2.5 -2s-2 -1.47 -2 -2c0 -1.104 1 -2 2 -2s1.5 0 2.5 1" />
    </svg>
  );
}