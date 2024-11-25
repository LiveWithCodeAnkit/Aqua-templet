import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Freshwater Aquariums",
    description: "Perfect for beginners and tropical fish enthusiasts",
    image: "https://images.unsplash.com/photo-1534043464124-3be32fe000c9",
    href: "/category/freshwater",
  },
  {
    title: "Marine & Reef",
    description: "Advanced setups for coral and marine life",
    image: "https://images.unsplash.com/photo-1621947081720-86970823b77a",
    href: "/category/marine",
  },
  {
    title: "Plants & Decorations",
    description: "Create a natural and vibrant environment",
    image: "/plant.jpeg",
    href: "/category/plants",
  },
  {
    title: "Equipment & Supplies",
    description: "Essential tools for maintenance and care",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
    href: "/category/equipment",
  },
];

export function Categories() {
  return (
    <section className="container mx-auto px-4  space-y-8 py-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Explore Our Categories
        </h2>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
          Find everything you need for your aquatic setup, from complete systems to
          essential accessories.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Card
            key={category.title}
            className="group overflow-hidden transition-all hover:shadow-lg"
          >
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">
                    {category.description}
                  </p>
                  <Button
                    asChild
                    className="mt-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Link href={category.href}>Explore</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}