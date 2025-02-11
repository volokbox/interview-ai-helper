"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 px-6 overflow-hidden bg-background">
      <div className="container flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Ace Your Interviews with AI-Powered Preparation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-[600px]">
            Boost your confidence and land your dream job with personalized
            interview coaching powered by advanced AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-full h-[400px]">
            <Image
              src="/file.svg"
              alt="AI Interview Coach"
              fill
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
