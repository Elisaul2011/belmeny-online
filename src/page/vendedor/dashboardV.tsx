import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Slide } from "../../types/slider";

const slides: Slide[] = [
  {
    title: "INFORME INTEGRADO",
    // year: "2023",
    image: "/public/vite.svg", // Asegúrate de tener esta imagen en tu carpeta public
    subtitle: "FUTURE-READY",
    description: "IMPULSANDO EL CRECIMIENTO",
  },
  // Agrega más slides según necesites
];

export default function Vendedor() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
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
      <div className="relative h-full flex items-center px-8 md:px-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              {slides[currentSlide].title}
              {/* <div className="text-red-600">{slides[currentSlide].year}</div> */}
            </h1>
            <button className="px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300">
              CONOCE MÁS
            </button>
          </div>

          {/* Image content */}
          <div className="relative">
            <img
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt="Slide image"
              className="rounded-lg shadow-2xl w-full h-auto"
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
    </div>
  );
}
