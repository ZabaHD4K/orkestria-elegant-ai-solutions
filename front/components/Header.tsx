"use client";

import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [showIndicator, setShowIndicator] = useState(false);
  const pathname = usePathname();
  const serviciosRef = useRef<HTMLAnchorElement>(null);
  const beneficiosRef = useRef<HTMLAnchorElement>(null);
  const nosotrosRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (pathname === "/nosotros") {
      setActiveSection("nosotros");
      return;
    }

    const handleScroll = () => {
      const sections = ["servicios", "beneficios", "nosotros"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const updateIndicator = () => {
      let ref = null;
      if (activeSection === "servicios") ref = serviciosRef;
      else if (activeSection === "beneficios") ref = beneficiosRef;
      else if (activeSection === "nosotros") ref = nosotrosRef;

      if (ref?.current) {
        const { offsetLeft, offsetWidth } = ref.current;
        setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
        
        // Activar animación cuando aparece por primera vez con delay
        if (!showIndicator && activeSection) {
          // Pequeño delay para asegurar que el navegador registra el estado inicial
          requestAnimationFrame(() => {
            setTimeout(() => setShowIndicator(true), 50);
          });
        }
      } else if (showIndicator) {
        // Resetear si no hay sección activa
        setShowIndicator(false);
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection, showIndicator]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="neu-card-sm p-2.5">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display text-xl font-bold text-gradient-navy">
              OrkestrIA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 relative p-1.5 rounded-2xl bg-secondary/20 backdrop-blur-sm">
              {/* Indicador animado */}
              {activeSection && (
                <div 
                  className="absolute h-9 neu-card-sm rounded-xl"
                  style={{
                    width: `${indicatorStyle.width}px`,
                    left: `${indicatorStyle.left}px`,
                    transform: showIndicator ? 'scale(1)' : 'scale(0)',
                    opacity: showIndicator ? 1 : 0,
                    transition: showIndicator 
                      ? 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' 
                      : 'none',
                    transformOrigin: 'center center',
                    willChange: 'transform, opacity'
                  }}
                />
              )}
              <Link 
                ref={serviciosRef}
                href="/#servicios" 
                className={`relative z-10 px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === "servicios" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Servicios
              </Link>
              <Link 
                ref={beneficiosRef}
                href="/#beneficios" 
                className={`relative z-10 px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === "beneficios" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Beneficios
              </Link>
              <Link 
                ref={nosotrosRef}
                href="/nosotros" 
                className={`relative z-10 px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === "nosotros" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Nosotros
              </Link>
            </div>
            <Button variant="neu" size="lg" asChild>
              <Link href="/#nosotros">Contactar</Link>
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
              <Link 
                href="/#servicios" 
                className={`font-medium py-2 transition-colors ${
                  activeSection === "servicios" ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Servicios
              </Link>
              <Link 
                href="/#beneficios" 
                className={`font-medium py-2 transition-colors ${
                  activeSection === "beneficios" ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Beneficios
              </Link>
              <Link 
                href="/nosotros" 
                className={`font-medium py-2 transition-colors ${
                  activeSection === "nosotros" ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Nosotros
              </Link>
              <Button variant="neuPrimary" className="mt-2" asChild>
                <Link href="/#nosotros">Contactar</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
