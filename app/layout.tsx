import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "OrkestrIA - Consultoría IT & Automatización con IA",
  description: "Orquestamos soluciones tecnológicas inteligentes para automatizar procesos, optimizar operaciones y potenciar el crecimiento de tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
        </TooltipProvider>
      </body>
    </html>
  );
}
