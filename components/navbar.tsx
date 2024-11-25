"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CartSheet } from "@/components/cart-sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Fish, Menu } from 'lucide-react';

const categories = [
  {
    title: "Aquariums",
    href: "/category/aquariums",
    description: "Find the perfect home for your aquatic friends",
  },
  {
    title: "Fish",
    href: "/category/fish",
    description: "Explore our wide variety of tropical and freshwater fish",
  },
  {
    title: "Plants",
    href: "/category/plants",
    description: "Add natural beauty with live aquatic plants",
  },
  {
    title: "Equipment",
    href: "/category/equipment",
    description: "Essential equipment for maintaining your aquarium",
  },
  {
    title: "Accessories",
    href: "/category/accessories",
    description: "Decorations, food, and more for your aquatic setup",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-6 w-6" />
            <span className="text-xl font-bold">AquaCommerce</span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[400px]">
                        {categories.map((category) => (
                          <li key={category.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={category.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  pathname === category.href &&
                                    "bg-accent text-accent-foreground"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {category.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {category.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <ThemeToggle />
            <CartSheet />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold">Shop</h2>
                    {categories.map((category) => (
                      <Link
                        key={category.title}
                        href={category.href}
                        className="block py-2 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/about"
                    className="text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

