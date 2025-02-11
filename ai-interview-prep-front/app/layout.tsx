import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./contexts/theme-context";
import React from "react"; // Added import for React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InterviewAI - AI-Powered Interview Preparation",
  description: "Ace your interviews with personalized AI coaching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
