import { Check, TrendingUp, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumenta tu Productividad",
    description: "Nuestros clientes reportan un aumento promedio del 40% en productividad tras implementar nuestras soluciones.",
  },
  {
    icon: Clock,
    title: "Ahorra Tiempo Valioso",
    description: "Automatiza horas de trabajo manual y dedica tu tiempo a lo que realmente importa: hacer crecer tu negocio.",
  },
  {
    icon: Users,
    title: "Equipo de Expertos",
    description: "Contamos con profesionales certificados en las últimas tecnologías de IA y automatización.",
  },
];

const features = [
  "Implementación rápida y sin fricciones",
  "Soporte técnico especializado 24/7",
  "Soluciones escalables y flexibles",
  "Integración con tus herramientas actuales",
  "Formación y capacitación incluida",
  "ROI garantizado en 6 meses",
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Benefits Cards */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
              ¿Por qué elegir{' '}
              <span className="text-gradient-navy">OrkestrIA</span>?
            </h2>

            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="neu-card p-6 flex gap-5 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="gradient-navy w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Features List */}
          <div className="neu-card p-10 animate-slide-in-right">
            <h3 className="font-display text-2xl font-bold mb-8">
              Todo lo que necesitas
            </h3>
            
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="neu-pressed w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
