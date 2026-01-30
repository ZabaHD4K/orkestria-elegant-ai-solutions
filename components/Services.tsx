"use client";

import { Bot, Brain, Cog, LineChart, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Consultoría IA",
    description: "Analizamos tus procesos y diseñamos estrategias de IA personalizadas para maximizar tu ROI.",
  },
  {
    icon: Cog,
    title: "Automatización",
    description: "Automatizamos tareas repetitivas con flujos inteligentes que ahorran tiempo y reducen errores.",
  },
  {
    icon: Bot,
    title: "Chatbots & Asistentes",
    description: "Desarrollamos asistentes virtuales que mejoran la atención al cliente 24/7.",
  },
  {
    icon: LineChart,
    title: "Análisis de Datos",
    description: "Transformamos tus datos en insights accionables con dashboards y reportes inteligentes.",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Creamos páginas web modernas, rápidas y optimizadas que impulsan tu presencia digital.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones",
    description: "Desarrollamos aplicaciones móviles y de escritorio a medida para tu negocio.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient-navy">Servicios</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones tecnológicas integrales para impulsar la transformación digital de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="neu-card p-8 group hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="neu-pressed w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-neu-sm transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
