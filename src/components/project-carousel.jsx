import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, BarChart3 } from 'lucide-react';

const projectImages = [
  {
    id: 1,
    title: "Dashboard Principal",
    description: "Vista general del sistema con métricas y accesos rápidos",
    icon: Monitor,
    gradient: "from-blue-500 to-purple-600",
    bg: "/dashboard.png",
  },
  {
    id: 2,
    title: "Formularios Dinámicos",
    description: "Interfaz intuitiva para carga de datos de los informes técnicos",
    icon: Smartphone,
    gradient: "from-green-500 to-blue-500",
    bg: "/informes.png",
  },
  {
    id: 3,
    title: "Panel de Informes",
    description: "Visualización de datos destacados de los informes técnicos",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
    bg: "/formularios.png",
  },
];

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      {/* Main carousel */}
      <div className="carousel-main">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projectImages.map((image, index) => {
            const IconComponent = image.icon;
            return (
              <div
                key={image.id}
                className={`carousel-slide carousel-slide-${index + 1}`}
                style={{
                  backgroundImage: `url(${image.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}
              >
                {/* Overlay de opacidad para mejorar legibilidad */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(20, 30, 50, 0.75)',
                  zIndex: 1,
                  borderRadius: 'inherit',
                }} />
                {/* Background pattern */}
                <div className="carousel-slide-bg" style={{ position: 'relative', zIndex: 2 }}></div>
                {/* Content */}
                <div className="carousel-content" style={{ position: 'relative', zIndex: 3 }}>
                  <div className="carousel-icon-container">
                    <IconComponent className="carousel-icon" />
                  </div>
                  <h3 className="carousel-title">{image.title}</h3>
                  <p className="carousel-description">{image.description}</p>
                </div>
                {/* Mockup overlay */}
                <div className="carousel-mockup" style={{ position: 'relative', zIndex: 2 }}></div>
                <div className="carousel-mockup-dot carousel-mockup-dot-1" style={{ position: 'relative', zIndex: 2 }}></div>
                <div className="carousel-mockup-dot carousel-mockup-dot-2" style={{ position: 'relative', zIndex: 2 }}></div>
                <div className="carousel-mockup-dot carousel-mockup-dot-3" style={{ position: 'relative', zIndex: 2 }}></div>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Slide indicators */}
        <div className="carousel-indicators">
          {projectImages.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'carousel-indicator-active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail navigation - solo mostrar en desktop */}
      {!isMobile && (
        <div className="carousel-thumbnails">
          {projectImages.map((image, index) => {
            const IconComponent = image.icon;
            return (
              <div
                key={image.id}
                className={`carousel-thumbnail ${index === currentIndex ? 'carousel-thumbnail-active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <div className="carousel-thumbnail-content">
                  <div className={`carousel-thumbnail-icon-container carousel-thumbnail-icon-${index + 1}`}>
                    <IconComponent className="carousel-thumbnail-icon" />
                  </div>
                  <div className="carousel-thumbnail-text">
                    <p className="carousel-thumbnail-title">{image.title}</p>
                    <p className="carousel-thumbnail-description">{image.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}