"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FEATURED_BOOKS = [
  {
    _id: "1",
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    discountedPrice: 429,
    originalPrice: 749,
    coverImage: "/images/books/crime-and-punishment.webp",
    tags: ["Premium"],
  },
  {
    _id: "2",
    title: "The Art of Spening Money",
    author: "Morgan Housel",
    discountedPrice: 379,
    coverImage: "/images/books/the-art-of-spending-money.webp",
    tags: ["Premium"],
  },
  {
    _id: "3",
    title: "The Alchemist",
    author: "Paulo Coelho",
    discountedPrice: 249,
    coverImage: "/images/books/the-alchemist.webp",
    tags: ["Classic"],
  },
  {
    _id: "4",
    title: "Psychology of Money",
    author: "Morgan Housel",
    discountedPrice: 379,
    coverImage: "/images/books/psychology-of-money.webp",
    tags: ["Finance"],
  },
];

export function FeaturedCollection() {
  return (
    <section
      id="featured"
      className="w-full py-20 bg-white border-b border-gray-100 overflow-hidden"
    >
      <div className="container">
        
        {/* Header: Balanced Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 px-4 md:px-0">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-black tracking-tighter">
              The Basa Selection.
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base font-medium">
              Top-tier reads. Unbeatable prices.
            </p>
          </div>

          {/* Desktop Link: Updated with Premium Red Hover Effect */}
          <Link 
            href="/products" 
            className="hidden md:flex items-center gap-3 text-sm font-bold text-brand-black transition-colors group"
          >
            <span className="relative pb-1">
                View All Books
                {/* Smooth Red Underline Animation */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-red transition-all duration-300 ease-out group-hover:w-full" />
            </span>
            
            {/* Arrow Button: Fills Red on Hover */}
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-red group-hover:text-white">
                <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>

        {/* Product Grid / Mobile Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 md:gap-y-12 md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {FEATURED_BOOKS.map((book) => {
            const hasDiscount =
              book.originalPrice && book.originalPrice > book.discountedPrice;
            const discountPercent = hasDiscount
              ? Math.round(
                  ((book.originalPrice! - book.discountedPrice) /
                    book.originalPrice!) *
                    100,
                )
              : 0;

            return (
              <div
                key={book._id}
                className="group flex flex-col min-w-[280px] md:min-w-0 snap-center cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[2/3] bg-gray-100 rounded-lg overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-all duration-500">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Discount Badge */}
                  {hasDiscount && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-brand-red text-white font-bold rounded-md px-2.5 py-1 text-[11px] uppercase tracking-wider shadow-sm border-0">
                        -{discountPercent}%
                      </Badge>
                    </div>
                  )}

                  {/* Hover Button (Desktop) */}
                  <div className="absolute inset-0 hidden md:flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/20 to-transparent">
                    <Button
                      size="sm"
                      className="bg-brand-red text-white hover:bg-red-700 hover:text-white font-bold px-6 rounded-full shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer border-0"
                    >
                      View Item
                    </Button>
                  </div>
                </div>

                {/* Book Details */}
                <div className="space-y-1.5 px-1">
                  <h3 className="font-heading font-bold text-lg text-brand-black leading-tight line-clamp-1 group-hover:text-brand-red transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide line-clamp-1">
                    {book.author}
                  </p>
                </div>

                {/* Pricing Logic */}
                <div className="flex items-center gap-3 mt-3 px-1">
                  <span className="text-xl font-black text-brand-black font-heading">
                    ₱{book.discountedPrice}
                  </span>

                  {hasDiscount && (
                    <span className="text-sm text-gray-400 line-through font-medium">
                      ₱{book.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden px-4">
          <Button
            asChild
            variant="outline"
            className="w-full rounded-full border-gray-300 text-brand-black font-bold h-12 hover:bg-gray-50"
          >
            <Link href="/products">View All Books</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}