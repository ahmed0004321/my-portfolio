import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DotBackground } from "@/components/dot-background";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Oasif Ahmed Rikto Portfolio | Full Stack Developer",
  description: "Premium portfolio of a Full Stack Developer specializing in Security and Modern Web Apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <DotBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
