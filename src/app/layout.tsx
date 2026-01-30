import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lee Magee – Quality & Product Analyst",
  description: "Quality, Product, and Business Analyst · Senior Consultant at Sogeti (Chick-fil-A). Agile QA, requirements gathering, and process improvement. Atlanta, GA.",
  openGraph: {
    title: "Lee Magee – Quality & Product Analyst",
    description: "Quality, Product, and Business Analyst · Senior Consultant at Sogeti (Chick-fil-A). Agile QA, requirements gathering, and process improvement.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Magee – Quality & Product Analyst",
    description: "Quality, Product, and Business Analyst · Senior Consultant at Sogeti (Chick-fil-A). Agile QA, requirements gathering, and process improvement.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
