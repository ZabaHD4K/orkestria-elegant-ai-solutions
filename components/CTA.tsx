"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="nosotros" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="neu-card p-10 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-gradient-navy">transformar</span> tu empresa?
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Agenda una consulta gratuita con nuestros expertos y descubre cómo la IA puede impulsar tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl">
                Agendar Consulta Gratis
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="neu-card-sm p-2.5">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">hola@orkestria.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="neu-card-sm p-2.5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">+34 900 123 456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
