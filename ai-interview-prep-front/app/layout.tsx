import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./contexts/theme-context";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quorix",
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
