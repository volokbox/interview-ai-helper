"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$19",
    description: "Perfect for beginners",
    features: [
      "5 AI-powered mock interviews per month",
      "Basic performance analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$49",
    description: "For serious job seekers",
    features: [
      "Unlimited AI-powered mock interviews",
      "Advanced performance analytics",
      "Personalized improvement suggestions",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "All Pro features",
      "Custom interview scenarios",
      "Team performance tracking",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 px-6 bg-muted/50 dark:bg-gradient-to-b dark:from-muted dark:to-background"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col transition-all duration-300 hover:shadow-lg h-full border-none bg-gradient-to-br from-card to-background">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-4 text-primary">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      {plan.price !== "Custom" && "/month"}
                    </span>
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
