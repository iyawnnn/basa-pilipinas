"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

// --- NAVIGATION DATA ---
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "New Arrivals", href: "/new" },
      { name: "Best Sellers", href: "/best-sellers" },
      { name: "Fiction", href: "/fiction" },
      { name: "Non-Fiction", href: "/non-fiction" },
      { name: "Academic", href: "/academic" },
      { name: "Children's", href: "/childrens" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* =========================================================
          ANNOUNCEMENT BAR
      ========================================================== */}
      <div className="bg-brand-blue text-white text-[10px] md:text-xs font-bold py-2 text-center uppercase tracking-widest relative z-50">
        <span className="opacity-90">Free Shipping on Orders Over ₱999</span>
      </div>

      {/* =========================================================
          MAIN HEADER
      ========================================================== */}
      <header className="sticky top-0 z-40 w-full bg-brand-black/95 backdrop-blur-sm border-b border-white/10 py-4 lg:py-5 transition-all">
        <div className="container mx-auto flex items-center justify-between">
          
          {/* A. LOGO (Left - Flex 1 + Basis 0) */}
          <div className="flex-1 basis-0 flex justify-start">
            <Link href="/" className="flex items-center gap-2 z-50 group shrink-0">
              <div className="relative flex flex-col">
                <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tighter text-white leading-none group-hover:text-gray-300 transition-colors">
                  BASA
                </h1>
                <span className="text-[0.65rem] md:text-[0.75rem] font-bold tracking-[0.35em] text-brand-gold uppercase leading-none">
                  PILIPINAS
                </span>
              </div>
            </Link>
          </div>

          {/* B. DESKTOP NAV (Center) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 justify-center shrink-0">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-xs xl:text-sm font-bold uppercase tracking-widest transition-colors py-2 ${
                    pathname === item.href ? "text-brand-gold" : "text-white hover:text-brand-gold"
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {/* Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                    <div className="bg-brand-black border border-white/10 min-w-[200px] shadow-2xl rounded-sm overflow-hidden py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-xs font-bold uppercase tracking-wide text-gray-300 hover:bg-white/5 hover:text-brand-gold transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* C. SEARCH & MOBILE TRIGGER (Right - Flex 1 + Basis 0) */}
          <div className="flex-1 basis-0 flex justify-end items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden lg:block relative w-full lg:max-w-[180px] xl:max-w-[240px] transition-all duration-300">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full h-9 pl-4 pr-10 bg-transparent dark:bg-transparent border border-white/20 text-white placeholder:text-gray-500 rounded-full focus:bg-brand-black focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all duration-300 text-xs tracking-wide"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden z-50 relative group p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4 flex flex-col justify-between items-end overflow-hidden">
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-1.5 bg-brand-red" : "group-hover:w-4/5"}`} />
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0 translate-x-full" : "opacity-100"}`} />
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-brand-red" : "group-hover:w-3/5"}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          FULL SCREEN MOBILE MENU
      ========================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-brand-black flex flex-col pt-32 px-6 pb-10 overflow-y-auto lg:hidden"
          >
            {/* Mobile Search */}
            <div className="mb-10">
              <div className="relative">
                <Input
                  placeholder="What are you looking for?"
                  className="w-full h-12 pl-4 pr-12 bg-transparent dark:bg-transparent border border-white/20 text-lg text-white placeholder:text-gray-500 rounded-xl focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
                />
                <Search className="absolute right-4 top-3.5 h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Mobile Links - FIXED: Added mb-12 for spacing */}
            <nav className="flex flex-col gap-6 mb-12">
              {NAV_ITEMS.map((item) => (
                <div key={item.name}>
                  <div 
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => {
                      if (item.submenu) {
                        setMobileSubmenuOpen(mobileSubmenuOpen === item.name ? null : item.name);
                      }
                    }}
                  >
                    <Link 
                      href={item.submenu ? "#" : item.href}
                      onClick={(e) => item.submenu && e.preventDefault()}
                      className="text-3xl font-heading font-black text-white uppercase tracking-tight group-hover:text-brand-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <ChevronDown 
                        className={`h-6 w-6 text-white transition-transform duration-300 ${
                          mobileSubmenuOpen === item.name ? "rotate-180" : ""
                        }`} 
                      />
                    )}
                  </div>

                  {/* Submenu */}
                  <AnimatePresence>
                    {item.submenu && mobileSubmenuOpen === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pl-4 pt-4 border-l border-white/10 ml-2 mt-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-lg font-medium text-gray-400 hover:text-white flex items-center gap-2"
                            >
                              {subItem.name}
                              <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Mobile Footer: Brand Manifesto */}
            <div className="mt-auto pt-10 border-t border-white/10">
              <h4 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Our Promise
              </h4>
              <p className="text-white text-2xl font-heading font-black leading-tight mb-2">
                Elevating Minds, <br />
                <span className="text-white/50">Crafting Change.</span>
              </p>
              <p className="text-white/40 text-sm mt-4">
                © 2026 Basa Pilipinas Bookstore. <br />
                Authentic Books. Fair Prices.
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}