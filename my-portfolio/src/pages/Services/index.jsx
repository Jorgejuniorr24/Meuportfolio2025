// src/pages/Services/index.jsx - VERSÃO AJUSTADA FINAL
import React, { useState, useEffect } from "react";
import {
  Palette,
  Code2,
  Server,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

// Constantes para serviços
const SERVICES_DATA = {
  "frontend-development": {
    id: "frontend-development",
    category: "Development",
    title: "Frontend Development",
    subtitle: "Modern Web Interfaces",
    description:
      "Create stunning, responsive, and high-performance web applications using cutting-edge technologies and best practices.",
    icon: <Code2 className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "React.js & Next.js Applications",
      "TypeScript Implementation",
      "Responsive Design & Mobile-First",
      "Performance Optimization",
      "Component Libraries & Design Systems",
      "PWA & Service Workers",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
    metrics: { deliveryTime: "2-4 weeks", clients: "25+", satisfaction: "98%" },
    pricing: { starting: "R$ 5.000", type: "project" },
  },

  "backend-development": {
    id: "backend-development",
    category: "Development",
    title: "Backend Development",
    subtitle: "Scalable Server Solutions",
    description:
      "Build robust APIs, microservices, and server-side applications with focus on security, performance, and scalability.",
    icon: <Server className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500",
    features: [
      "RESTful & GraphQL APIs",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Microservices Architecture",
      "Cloud Integration & Deployment",
      "Performance Monitoring",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"],
    metrics: { deliveryTime: "3-6 weeks", clients: "20+", satisfaction: "95%" },
    pricing: { starting: "R$ 8.000", type: "project" },
  },

  "ui-ux-design": {
    id: "ui-ux-design",
    category: "Design",
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description:
      "Design intuitive and beautiful interfaces that prioritize user experience, accessibility, and conversion optimization.",
    icon: <Palette className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-500",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Design Systems Creation",
      "Accessibility Compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Framer", "Principle"],
    metrics: { deliveryTime: "2-3 weeks", clients: "30+", satisfaction: "99%" },
    pricing: { starting: "R$ 3.500", type: "project" },
  },
};

const ServiceCard = ({ service, isExpanded, onToggle, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group relative transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-white backdrop-blur-sm border border-gray-200 transition-all duration-300 ${
          isExpanded
            ? "shadow-2xl shadow-blue-500/20 border-blue-500/30"
            : "hover:shadow-xl hover:border-gray-300"
        }`}
      >
        {/* Gradient header */}
        <div
          className={`h-32 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              {service.category}
            </span>
          </div>
          <div className="absolute bottom-4 left-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              {service.icon}
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
            <p className="text-white/80 text-sm">{service.subtitle}</p>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6 leading-relaxed text-center">
            {service.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-100 rounded-xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Clock className="w-4 h-4 text-blue-400 mr-1" />
              </div>
              <div className="text-blue-400 font-bold text-sm">
                {service.metrics.deliveryTime}
              </div>
              <div className="text-gray-500 text-xs">Delivery</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Users className="w-4 h-4 text-green-400 mr-1" />
              </div>
              <div className="text-green-400 font-bold text-sm">
                {service.metrics.clients}
              </div>
              <div className="text-gray-500 text-xs">Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <CheckCircle className="w-4 h-4 text-purple-400 mr-1" />
              </div>
              <div className="text-purple-400 font-bold text-sm">
                {service.metrics.satisfaction}
              </div>
              <div className="text-gray-500 text-xs">Satisfaction</div>
            </div>
          </div>

          {/* Expandable content */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {/* Features */}
            <div className="mb-6">
              <h4 className="text-gray-900 font-semibold mb-3 text-center">
                What's Included:
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-gray-900 font-semibold mb-3 text-center">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-900 font-semibold">Starting at</div>
                  <div className="text-2xl font-bold text-blue-400">
                    {service.pricing.starting}
                    <span className="text-sm text-gray-500">
                      /{service.pricing.type}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Toggle button */}
          <button
            onClick={() => onToggle(service.id)}
            className="w-full mt-4 py-3 text-blue-500 hover:text-blue-400 font-medium transition-colors flex items-center justify-center gap-2"
          >
            {isExpanded ? "Show Less" : "Learn More"}
            <ArrowRight
              className={`w-4 h-4 transition-transform ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [filter, setFilter] = useState("all");

  const services = Object.values(SERVICES_DATA);
  const categories = [
    "all",
    ...new Set(services.map((s) => s.category.toLowerCase())),
  ];

  const filteredServices =
    filter === "all"
      ? services
      : services.filter((s) => s.category.toLowerCase() === filter);

  const handleToggle = (id) => {
    setExpandedService((cur) => (cur === id ? null : id));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-6xl mx-auto py-16 px-4">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Services</h1>
          <p className="text-gray-600">
            Solutions from discovery to delivery — design, development and more.
          </p>
        </header>

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                filter === c
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((svc, i) => (
            <ServiceCard
              key={svc.id}
              service={svc}
              isExpanded={expandedService === svc.id}
              onToggle={handleToggle}
              delay={i * 80}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
