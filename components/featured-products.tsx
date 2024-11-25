"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Reef Aquarium",
    price: 1299.99,
    image: "https://img.freepik.com/premium-photo/large-aquarium-with-tropical-fish-coral-reef-landscape_927063-2217.jpg",
    description: "Complete reef setup with LED lighting and filtration system",
  },
  {
    id: 2,
    name: "Tropical Paradise Kit",
    price: 899.99,
    image: "/Freshwater aquarium.jpeg",
    description: "Perfect starter kit for tropical fish enthusiasts",
  },
  {
    id: 3,
    name: "Modern Cube Aquarium",
    price: 599.99,
    image: "https://images.meesho.com/images/products/454251366/bwplf_1200.jpg",
    description: "Sleek and contemporary design for any space",
  },
  {
    id: 4,
    name: "Professional Marine Setup",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2",
    description: "Advanced marine aquarium with complete ecosystem support",
  },
];

export function FeaturedProducts() {
  return (
    <section className="container mx-auto px-4  space-y-8 py-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Products
        </h2>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
          Discover our most popular aquarium setups and accessories, carefully
          selected for both beginners and experienced enthusiasts.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full max-w-7xl"
      >
        <CarouselContent>
          {featuredProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                      <Button asChild>
                        <Link href={`/products/${product.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}