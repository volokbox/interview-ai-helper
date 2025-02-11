"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Cta() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary to-purple-600 text-white">
      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of successful job seekers who have improved their interview skills with InterviewAI.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
          Start Your Free Trial
        </Button>
      </motion.div>
    </section>
  )
}

