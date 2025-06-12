import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Users,
  Database,
  Code,
  Globe,
  Shield,
  BarChart3,
  FileText,
  Upload,
  Filter,
  History,
  User,
  Lightbulb,
  Puzzle,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ThemeToggle } from "./theme-toggle";
import { ProjectCarousel } from "./project-carousel";

export default function Portfolio() {
  const techSkills = [
    { name: "Node.js", icon: Code },
    { name: "Express", icon: Globe },
    { name: "PostgreSQL", icon: Database },
    { name: "React", icon: Code },
    { name: "Git", icon: Github },
    { name: "Docker", icon: Database },
    { name: "Cloudinary", icon: Upload },
    { name: "JavaScript", icon: Code },
    { name: "HTML/CSS", icon: Globe },
  ];

  const softSkills = [
    {
      name: "Resolución de Problemas",
      icon: Puzzle,
      description:
        "Capacidad para analizar y resolver desafíos técnicos complejos",
    },
    {
      name: "Trabajo en Equipo",
      icon: Users,
      description: "Colaboración efectiva en equipos multidisciplinarios",
    },
    {
      name: "Adaptación",
      icon: Lightbulb,
      description:
        "Flexibilidad para aprender nuevas tecnologías y metodologías",
    },
  ];

  const features = [
    { icon: FileText, text: "Formularios dinámicos" },
    { icon: Shield, text: "Autenticación segura" },
    { icon: Upload, text: "Carga de archivos" },
    { icon: MapPin, text: "Geolocalización" },
    { icon: History, text: "Historial completo" },
    { icon: Filter, text: "Filtros avanzados" },
    { icon: BarChart3, text: "Panel administrativo" },
    { icon: Database, text: "Control de stock" },
  ];

  return (
    <div className="portfolio-container">
      {/* Fixed Theme Toggle */}
      <ThemeToggle />

      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="grid grid-2">
            <div className="hero-content">
              <h1 className="text-5xl font-bold mb-md">Mauro Morales</h1>
              <p className="text-2xl text-blue mb-lg">
                Desarrollador Full Stack
              </p>
              <p className="text-lg text-secondary mb-xl">
                Desarrollador apasionado por crear soluciones tecnológicas
                innovadoras. Especializado en desarrollo web full stack con
                experiencia en Node.js, React y PostgreSQL. Me motiva resolver
                problemas complejos y contribuir al crecimiento de equipos de
                desarrollo.
              </p>
              <div className="flex gap-md">
                <Button
                  href="mailto:moralesmaurot6@gmail.com"
                  size="lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contactar
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="https://www.linkedin.com/in/mauro-morales-478a801a9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="https://github.com/MauroMoraless"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="profile-image">
                <div className="profile-image-inner">
                  <img
                    src="/20220302_094242.jpg"
                    alt="Foto de Mauro Morales"
                    className="profile-icon"
                  />
                </div>
                <div className="profile-badge">
                  <Code className="badge-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sobre mí</h2>
            <div className="section-divider"></div>
          </div>

          <div className="about-content text-center">
            <p className="text-secondary mb-md">
              Egresado de la Tecnicatura Universitaria en Programación de UTN
              FRA, con sólida formación en desarrollo de software y experiencia
              práctica en tecnologías modernas como Node.js, React y PostgreSQL.
            </p>
            <p className="text-secondary mb-md">
              Mi enfoque se centra en la actitud proactiva, el aprendizaje
              constante y la búsqueda de soluciones eficientes. Tengo gran
              pasión por mantenerme actualizado con las últimas tendencias
              tecnológicas y contribuir al crecimiento de equipos de desarrollo.
            </p>
            <p className="text-secondary">
              Busco oportunidades para crecer profesionalmente en el área IT,
              aportando mis conocimientos técnicos y mi compromiso con la
              excelencia en cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Proyecto Destacado</h2>
            <div className="section-divider"></div>
          </div>

          <Card>
            <div className="project-grid">
              <div className="project-info">
                <CardHeader>
                  <CardTitle>Sistema de Gestión de Informes Técnicos</CardTitle>
                  <CardDescription>
                    Plataforma web que automatiza la carga y el control de
                    informes técnicos de campo para empresas. Permite la gestión
                    integral de usuarios y roles, almacenamiento de archivos
                    multimedia, geolocalización y un panel administrativo
                    avanzado.
                  </CardDescription>
                </CardHeader>

                <div className="project-details">
                  <div className="mb-lg">
                    <h4 className="font-semibold mb-sm">
                      Tecnologías Principales:
                    </h4>
                    <div className="flex flex-wrap gap-sm">
                      {[
                        "Node.js",
                        "Express",
                        "PostgreSQL",
                        "React",
                        "Cloudinary",
                      ].map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-lg">
                    <h4 className="font-semibold mb-sm">
                      Funcionalidades Clave:
                    </h4>
                    <div className="features-grid">
                      {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                          <div key={index} className="feature-item">
                            <IconComponent className="feature-icon" />
                            <span className="feature-text">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <Button
                    as="a"
                    href="https://magoo.solutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Ver Demo en Producción: Magoo Solutions
                  </Button>
                </div>
              </div>

              <div className="project-carousel-container">
                <ProjectCarousel />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Tecnologías</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-2">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-xl text-center">
                Tecnologías
              </h3>
              <div className="tech-skills-grid">
                {techSkills.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={index} className="tech-skill-item">
                      <IconComponent className="tech-skill-icon" />
                      <span className="tech-skill-name">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-xl text-center">
                Soft Skills
              </h3>
              <div className="soft-skills-container">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="soft-skill-item">
                      <IconComponent className="soft-skill-icon" />
                      <div>
                        <h4 className="soft-skill-title">{skill.name}</h4>
                        <p className="soft-skill-description">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contacto</h2>
            <div className="section-divider mb-md"></div>
            <p className="text-lg text-secondary">
              ¿Te gustaría contactarme? Aquí tienes mis datos de contacto directo.
            </p>
          </div>
          <div className="contact-info" style={{ maxWidth: 500, margin: '0 auto' }}>
            <div className="contact-links">
              <a
                href="mailto:moralesmaurot6@gmail.com"
                className="contact-link"
              >
                <div className="contact-link-icon-container">
                  <Mail className="contact-link-icon" />
                </div>
                <div>
                  <p className="contact-link-title">Email</p>
                  <p className="contact-link-text">moralesmaurot6@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/mauro-morales-478a801a9"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-link-icon-container">
                  <Linkedin className="contact-link-icon" />
                </div>
                <div>
                  <p className="contact-link-title">LinkedIn</p>
                  <p className="contact-link-text">linkedin.com/in/mauro-morales-478a801a9</p>
                </div>
              </a>
              <a
                href="https://github.com/MauroMoraless"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-link-icon-container">
                  <Github className="contact-link-icon" />
                </div>
                <div>
                  <p className="contact-link-title">GitHub</p>
                  <p className="contact-link-text">github.com/MauroMoraless</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Code className="footer-logo-icon" />
              <span className="footer-logo-text">Mauro Morales</span>
            </div>
            <p className="footer-copyright">
              © 2025 Mauro Morales. Todos los derechos reservados.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/mauro-morales-478a801a9"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="footer-social-icon" />
              </a>
              <a
                href="https://github.com/MauroMoraless"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="footer-social-icon" />
              </a>
              <a
                href="mailto:moralesmaurot6@gmail.com"
                className="footer-social-link"
              >
                <Mail className="footer-social-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
