"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Target, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Personalized Practice",
    description:
      "Get tailored interview questions based on your industry, experience, and target role.",
    icon: Target,
  },
  {
    title: "Real-time Feedback",
    description:
      "Receive instant feedback on your answers, body language, and tone of voice.",
    icon: Zap,
  },
  {
    title: "AI-powered Insights",
    description:
      "Gain valuable insights and suggestions to improve your interview performance.",
    icon: Lightbulb,
  },
  {
    title: "Mock Interviews",
    description:
      "Practice with AI-simulated interviewers from top companies in your industry.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-muted/50 dark:bg-gradient-to-b dark:from-background dark:to-muted"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="transition-all duration-300 hover:shadow-lg h-full border-none bg-card">
                <CardHeader>
                  <feature.icon className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
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
