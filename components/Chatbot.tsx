"use client";

import { useState } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 Soy el asistente de OrkestrIA. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simular respuesta del bot
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("consulta") || input.includes("agendar")) {
      return "Perfecto! Para agendar una consulta, necesito algunos datos. ¿Cuál es tu nombre y empresa?";
    } else if (input.includes("servicios") || input.includes("precio")) {
      return "Ofrecemos consultoría IA, automatización, chatbots, análisis de datos y desarrollo web. ¿Te gustaría información específica sobre algún servicio?";
    } else if (input.includes("contacto") || input.includes("email") || input.includes("teléfono")) {
      return "Puedes contactarnos en hola@orkestria.com o llamarnos al +34 900 123 456. ¿Prefieres que te contactemos nosotros?";
    } else if (input.includes("hola") || input.includes("buenos")) {
      return "¡Hola! 😊 Estoy aquí para ayudarte a agendar una consulta o resolver tus dudas sobre nuestros servicios.";
    } else if (input.includes("gracias")) {
      return "¡De nada! Estoy aquí para ayudarte. ¿Hay algo más que necesites?";
    } else {
      return "Entiendo. Te puedo ayudar a agendar una consulta gratuita, informarte sobre nuestros servicios o contactarte con nuestro equipo. ¿Qué prefieres?";
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Chatbot Container */}
      <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-[600px] sm:h-[650px] z-50 animate-slide-in-right">
        <div className="neu-card h-full flex flex-col bg-background rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="gradient-navy p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="neu-card-sm p-2 bg-white/10">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white">OrkestrIA</h3>
                <span className="text-xs text-white/80">Asistente Virtual</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 animate-fade-in ${
                  message.sender === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`neu-card-sm p-2 w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                    message.sender === "bot" ? "bg-primary/10" : "bg-accent/10"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <Bot className="w-4 h-4 text-primary" />
                  ) : (
                    <User className="w-4 h-4 text-accent" />
                  )}
                </div>
                <div
                  className={`neu-card p-3 max-w-[75%] ${
                    message.sender === "user"
                      ? "bg-gradient-navy-light text-white"
                      : ""
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Escribe tu mensaje..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                variant="neuPrimary"
                size="icon"
                className="flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
