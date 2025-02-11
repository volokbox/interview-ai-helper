"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up",
    description: "Create your account and tell us about your career goals.",
  },
  {
    title: "Customize Your Plan",
    description: "Select your target roles, industries, and interview types.",
  },
  {
    title: "Practice Interviews",
    description: "Engage in AI-powered mock interviews tailored to your needs.",
  },
  {
    title: "Receive Feedback",
    description: "Get instant feedback and actionable insights to improve.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-6 bg-muted/50 dark:bg-gradient-to-b dark:from-muted dark:to-background"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="transition-all duration-300 hover:shadow-lg h-full border-none bg-gradient-to-br from-card to-background">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
