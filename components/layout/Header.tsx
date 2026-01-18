"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ArrowRight, ShoppingBag } from "lucide-react";
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
  { name: "Authors", href: "/authors" }, // Suggestion: Good for bookstores
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
  }, [pathname]);

  // Lock body scroll when menu is open
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
      <div className="bg-blue-600 text-white text-[10px] md:text-xs font-bold py-2 text-center uppercase tracking-widest relative z-50">
        <span className="opacity-90">Free Shipping on Orders Over ₱999</span>
      </div>

      {/* =========================================================
          MAIN HEADER
      ========================================================== */}
      <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-sm border-b border-white/10 py-5 transition-all">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* A. LOGO (Left - Flex 1) */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2 z-50 group shrink-0">
              <div className="relative flex flex-col">
                <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tighter text-white leading-none group-hover:text-gray-300 transition-colors">
                  BASA
                </h1>
                <span className="text-[0.65rem] md:text-[0.75rem] font-bold tracking-[0.35em] text-yellow-500 uppercase leading-none">
                  PILIPINAS
                </span>
              </div>
            </Link>
          </div>

          {/* B. DESKTOP NAV (Center) */}
          <nav className="hidden lg:flex items-center gap-8 justify-center">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors py-2 ${
                    pathname === item.href ? "text-yellow-500" : "text-white hover:text-yellow-500"
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                    <div className="bg-black border border-white/10 min-w-[200px] shadow-2xl rounded-sm overflow-hidden py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-xs font-bold uppercase tracking-wide text-gray-300 hover:bg-white/5 hover:text-yellow-500 transition-colors"
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

          {/* C. SEARCH & MOBILE TRIGGER (Right - Flex 1) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden lg:block relative w-full max-w-[240px]">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full h-9 pl-4 pr-10 bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 rounded-full focus:bg-neutral-900 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300 text-xs tracking-wide"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-neutral-500 group-focus-within:text-yellow-500 transition-colors pointer-events-none" />
            </div>

            {/* Mobile Menu Trigger (Animated Hamburger) */}
            <button
              className="lg:hidden z-50 relative group p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4 flex flex-col justify-between items-end overflow-hidden">
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-1.5 bg-red-500" : "group-hover:w-4/5"}`} />
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0 translate-x-full" : "opacity-100"}`} />
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-red-500" : "group-hover:w-3/5"}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          FULL SCREEN MOBILE MENU (No Blur, No Slider)
      ========================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black flex flex-col pt-32 px-6 pb-10 overflow-y-auto lg:hidden"
          >
            {/* Mobile Search */}
            <div className="mb-10">
              <div className="relative border-b border-white/20 pb-2">
                <Input
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent border-none text-xl text-white placeholder:text-white/30 p-0 focus-visible:ring-0"
                />
                <Search className="absolute right-0 top-1 h-6 w-6 text-white" />
              </div>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, idx) => (
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
                      className="text-3xl font-heading font-black text-white uppercase tracking-tight group-hover:text-yellow-500 transition-colors"
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

                  {/* Mobile Submenu Accordion */}
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

            {/* Mobile Footer Info */}
            <div className="mt-auto pt-12 border-t border-white/10">
              <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Contact Us</p>
              <p className="text-white text-lg font-medium">hello@basapilipinas.com</p>
              <p className="text-white text-lg font-medium">+63 912 345 6789</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
