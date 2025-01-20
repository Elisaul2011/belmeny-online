import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import type { Slide } from "../../types/slider";
import DynamicSection from "../../componentes/DynamicSection";
import ParallaxSection from "../../componentes/parallaxSection";
import Footer from "../../componentes/footer";

const slides: Slide[] = [
  {
    title: "INFORME INTEGRADO",
    image: "../../assets/img/INTRO-2.jpg",
    subtitle: "FUTURE-READY",
    description: "IMPULSANDO EL CRECIMIENTO",
  },
  {
    title: "INNOVACIÓN",
    image: "../../assets/img/VERT-1.jpg",
    subtitle: "TECNOLOGÍA AVANZADA",
    description: "CREANDO EL FUTURO HOY",
  },
  {
    title: "SOSTENIBILIDAD",
    image: "../../assets/img/INGCO-2.jpg",
    subtitle: "ECO-FRIENDLY",
    description: "PROTEGIENDO NUESTRO PLANETA",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [startX, setStartX] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX === null) return;
    const x = e.touches[0].clientX;
    handleSwipe(x);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (startX === null) return;
    const x = e.clientX;
    handleSwipe(x);
  };

  const handleSwipe = (endX: number) => {
    if (startX === null) return;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
      setStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  return (
    <div className=" h-screen w-full bg-gray-900">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, gray 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div
        className="relative h-full flex items-center px-8 md:px-16"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              {slides[currentSlide].title}
            </h1>
            <p className="text-2xl">{slides[currentSlide].subtitle}</p>
            <p className="text-xl">{slides[currentSlide].description}</p>
            <button className="px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
              CONOCE MÁS
            </button>
          </div>

          {/* Image content */}
          <div className="relative">
            <img
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt="Slide image"
              className="rounded-lg shadow-2xl w-full h-auto select-none pointer-events-none" // Clases añadidas AQUÍ
            />
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white w-4" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/20" />
          <div className="absolute inset-0 flex items-center justify-center animate-bounce">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8">
        <div className="w-16 h-1 bg-red-600 transform rotate-45" />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-1 bg-red-600 transform -rotate-45" />
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
      <ParallaxSection />
      <DynamicSection
        title="Excelencia Operativa"
        content="Buscamos la excelencia en cada aspecto de nuestras operaciones, desde la producción hasta el servicio al cliente."
      />
      <Footer />
    </div>
  );
}
