"use client";

import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="neu-card-sm p-2.5">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-xl font-bold text-gradient-navy">
              OrkestrIA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Servicios
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Beneficios
            </a>
            <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Nosotros
            </a>
            <Button variant="neu" size="lg">
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden neu-card-sm p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 neu-card p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Servicios
              </a>
              <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Beneficios
              </a>
              <a href="#nosotros" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Nosotros
              </a>
              <Button variant="neuPrimary" className="mt-2">
                Contactar
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
