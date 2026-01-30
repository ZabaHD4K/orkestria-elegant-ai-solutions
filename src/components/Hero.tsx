import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 neu-card-sm px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Consultoría IT & Automatización con IA
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transforma tu empresa con{' '}
            <span className="text-gradient-navy">Inteligencia Artificial</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Orquestamos soluciones tecnológicas inteligentes para automatizar procesos, 
            optimizar operaciones y potenciar el crecimiento de tu negocio.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Solicitar Consulta
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="neu" size="xl">
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '150+', label: 'Proyectos' },
              { value: '50+', label: 'Empresas' },
              { value: '95%', label: 'Satisfacción' },
              { value: '24/7', label: 'Soporte' },
            ].map((stat, index) => (
              <div key={index} className="neu-card-sm p-6 text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
