import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { BackgroundGlowProvider } from "@/context/BackgroundGlowContext";
import { Toaster } from "@/components/ui/sonner";
import { GridBackgroundProvider } from "@/context/GridBackgroundContext";
import { GradientBackgroundProvider } from "@/context/GradientContext";
import { GlassmorphismBackgroundProvider } from "@/context/GlassMorphismContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bgclick",
  description: "Gradient modern UI background generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <GlassmorphismBackgroundProvider>
          <GradientBackgroundProvider>
            <GridBackgroundProvider>
              <BackgroundGlowProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                  {children}
                </ThemeProvider>
              </BackgroundGlowProvider>
            </GridBackgroundProvider>
          </GradientBackgroundProvider>
        </GlassmorphismBackgroundProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
