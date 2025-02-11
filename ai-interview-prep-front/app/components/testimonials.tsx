"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Corp",
    testimonial:
      "InterviewAI helped me land my dream job at a top tech company. The personalized practice and feedback were invaluable!",
    avatar: "/placeholder.svg",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovate Inc",
    testimonial:
      "I was skeptical at first, but the AI-powered insights really helped me improve my interview skills. Highly recommended!",
    avatar: "/placeholder.svg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Specialist",
    company: "Brand Solutions",
    testimonial:
      "The mock interviews were so realistic, I felt fully prepared for my actual interviews. Thanks, InterviewAI!",
    avatar: "/placeholder.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="transition-all duration-300 hover:shadow-lg h-full border-none bg-gradient-to-br from-card to-background">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.testimonial}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
