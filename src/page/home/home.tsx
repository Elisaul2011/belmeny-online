import { useState, useEffect, useRef, useCallback } from "react";

import type { Slide } from "../../types/slider";
import DynamicSection from "../../componentes/dynamicSection";
import ParallaxSection from "../../componentes/parallaxSection";
import Footer from "../../componentes/footer";
import type React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides: Slide[] = [
  {
    title: "INFORME INTEGRADO",
    image: "/src/assets/img/INTRO-2.jpg",
    subtitle: "FUTURE-READY",
    description: "IMPULSANDO EL CRECIMIENTO",
  },
  {
    title: "INNOVACIÓN",
    image: "/src/assets/img/VERT-1.jpg",
    subtitle: "TECNOLOGÍA AVANZADA",
    description: "CREANDO EL FUTURO HOY",
  },
  {
    title: "SOSTENIBILIDAD",
    image: "/src/assets/img/INGCO-2.jpg",
    subtitle: "ECO-FRIENDLY",
    description: "PROTEGIENDO NUESTRO PLANETA",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
      }
    },
    [isAnimating]
  );

  const goToNext = useCallback(() => {
    if (!isAnimating) {
      const nextIndex = (currentIndex + 1) % slides.length;
      goToSlide(nextIndex);
    }
  }, [currentIndex, isAnimating, goToSlide]);

  const goToPrevious = useCallback(() => {
    if (!isAnimating) {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      goToSlide(prevIndex);
    }
  }, [currentIndex, isAnimating, goToSlide]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="h-screen w-full bg-gray-900">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, gray 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div
        className="relative h-full flex items-center px-8 md:px-16"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              {slides[currentIndex].title}
            </h1>
            <p className="text-2xl">{slides[currentIndex].subtitle}</p>
            <p className="text-xl">{slides[currentIndex].description}</p>
            <button className="px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
              CONOCE MÁS
            </button>
          </div>

          {/* Image content */}
          <div className="relative">
            <img
              src={slides[currentIndex].image || "/placeholder.svg"}
              alt="Slide image"
              className="rounded-lg shadow-2xl w-full h-auto select-none pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-4" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative w-16 h-16 inset-0 flex items-center justify-center animate-bounce" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8">
        <div className="w-16 h-1 bg-blue-300 transform rotate-45" />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-1 bg-blue-300 transform -rotate-45" />
      </div>

      <DynamicSection
        title="Innovación Constante"
        content="Nos dedicamos a la innovación continua, desarrollando soluciones que transforman industrias y mejoran vidas."
      />
      <DynamicSection
        title="Compromiso Sostenible"
        content="Nuestro compromiso con la sostenibilidad guía cada decisión, asegurando un futuro más verde para todos."
        isRightAligned
      />
      <ParallaxSection imagen="/src/assets/img/INTRO-1.jpg" />
      <DynamicSection
        title="Excelencia Operativa"
        content="Buscamos la excelencia en cada aspecto de nuestras operaciones, desde la producción hasta el servicio al cliente."
      />
      <Footer />
    </div>
  );
}
