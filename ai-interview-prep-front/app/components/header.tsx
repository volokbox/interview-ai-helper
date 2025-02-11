"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "../contexts/theme-context";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="py-4 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-bold text-xl text-foreground">InterviewAI</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" className="text-foreground">
            Log In
          </Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </motion.header>
  );
}
