"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useToast } from "@/components/ui/use-toast";
import { Star, Truck, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";

// This would typically come from an API or database
const product = {
  id: 1,
  name: "Premium Reef Aquarium",
  price: 1299.99,
  rating: 4.8,
  reviews: 124,
  stock: 8,
  images: [
    "https://img.freepik.com/premium-photo/large-aquarium-with-tropical-fish-coral-reef-landscape_927063-2217.jpg",
    "/Freshwater aquarium.jpeg",
    "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800&auto=format&fit=crop&q=60",
  ],
  description:
    "Experience the beauty of a thriving reef ecosystem with our Premium Reef Aquarium. This complete setup includes everything you need to create and maintain a stunning marine environment.",
  specifications: {
    dimensions: '48" x 24" x 24"',
    volume: "120 gallons",
    lighting: "AI Prime HD LED System",
    filtration: "Advanced Protein Skimmer + Canister Filter",
    includes: [
      "Rimless glass aquarium",
      "Cabinet stand",
      "LED lighting system",
      "Complete filtration system",
      "Heater",
      "Digital controller",
    ],
  },
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    });
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };

  return (
    <div className="container py-8  mx-auto px-4">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/products">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary text-primary"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {product.stock} in stock
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold">${product.price}</div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  quantity < product.stock && setQuantity(quantity + 1)
                }
                disabled={quantity >= product.stock}
              >
                +
              </Button>
            </div>
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>

          <Card>
            <CardContent className="grid gap-4 p-6">
              <div className="flex items-center gap-4">
                <Truck className="h-5 w-5 text-gray-500" />
                <div>
                  <CardTitle className="text-sm">Free Shipping</CardTitle>
                  <CardDescription>On orders over $500</CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Shield className="h-5 w-5 text-gray-500" />
                <div>
                  <CardTitle className="text-sm">2 Year Warranty</CardTitle>
                  <CardDescription>Full coverage protection</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                {product.description}
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <dl className="grid gap-4">
                <div>
                  <dt className="font-medium">Dimensions</dt>
                  <dd className="text-gray-600 dark:text-gray-400">
                    {product.specifications.dimensions}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Volume</dt>
                  <dd className="text-gray-600 dark:text-gray-400">
                    {product.specifications.volume}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Lighting</dt>
                  <dd className="text-gray-600 dark:text-gray-400">
                    {product.specifications.lighting}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Filtration</dt>
                  <dd className="text-gray-600 dark:text-gray-400">
                    {product.specifications.filtration}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Includes</dt>
                  <dd className="text-gray-600 dark:text-gray-400">
                    <ul className="list-inside list-disc">
                      {product.specifications.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}