"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dlwqkvy2i/video/upload/v1732525076/djyjlueg0vjtip5bn0li.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Create Your Perfect
          <span className="block text-blue-400">Underwater Paradise</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-lg text-xl text-gray-200 sm:max-w-3xl"
        >
          Discover our premium selection of aquariums, fish, and accessories.
          Transform your space with the mesmerizing beauty of aquatic life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-lg hover:bg-blue-700"
          >
            <Link href="/products">Shop Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 dark:bg-black border-2 text-lg text-white hover:bg-white/10"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
