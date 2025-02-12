import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./contexts/theme-context";
import Header from "./components/header";
import Footer from "./components/footer";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quorix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
