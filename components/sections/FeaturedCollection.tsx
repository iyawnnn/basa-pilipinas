"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TEASER_BOOKS } from "@/lib/data";
import { ShoppingCart, ChevronDown } from "lucide-react";

export function FeaturedCollection() {
  return (
    <section id="featured" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-brand-blue font-heading uppercase">
          Featured Reads
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEASER_BOOKS.map((book) => (
            <Card key={book._id} className="group flex flex-col h-full border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              
              {/* Card Header: Image & Badge */}
              <CardHeader className="p-0 relative aspect-[2/3] overflow-hidden rounded-t-lg">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-3 right-3 bg-brand-red hover:bg-brand-red text-white font-bold text-sm px-3 py-1 shadow-md">
                  50% OFF
                </Badge>
              </CardHeader>

              {/* Card Content: Details */}
              <CardContent className="flex-1 p-5 space-y-3">
                <div className="space-y-1">
                  <CardTitle className="line-clamp-1 text-lg font-heading font-bold text-gray-900">
                    {book.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 font-medium">{book.author}</p>
                </div>
                
                <div className="flex items-baseline gap-3">
                   <span className="text-2xl font-bold text-brand-red font-heading">
                     ₱{book.discountedPrice}
                   </span>
                   <span className="text-sm text-gray-400 line-through decoration-gray-400">
                     ₱{book.originalPrice}
                   </span>
                </div>
              </CardContent>

              {/* Card Footer: Action */}
              <CardFooter className="p-5 pt-0">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy Now <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {book.platforms.shopee && (
                      <DropdownMenuItem asChild>
                        <Link href={book.platforms.shopee} target="_blank" className="cursor-pointer font-medium">
                          Shopee
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {book.platforms.lazada && (
                      <DropdownMenuItem asChild>
                        <Link href={book.platforms.lazada} target="_blank" className="cursor-pointer font-medium">
                          Lazada
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {book.platforms.tiktok && (
                      <DropdownMenuItem asChild>
                        <Link href={book.platforms.tiktok} target="_blank" className="cursor-pointer font-medium">
                          TikTok Shop
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}