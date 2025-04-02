import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import FooterHome from "./footer";
import Categories from "./categories";
import AboutUs from "./about-us";
import HeroSlides from "../../data/heroSlides";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HeroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HeroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HeroSlides.length) % HeroSlides.length
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 overflow-hidden">
        <div className="max-w-full mx-auto">
          <div className="relative z-10 pb-8 bg-blue-600 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Belmeny Group</span>
                  </h1>
                  <p className="mt-3 text-base text-teal-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Herramientas y equipos de alta calidad para profesionales y
                    entusiastas. Todo lo que necesitas en un solo lugar.
                  </p>

                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/catalog"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                      >
                        Ver catálogo
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        to="/offers"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-950 md:py-4 md:text-lg md:px-10"
                      >
                        Ofertas especiales
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider - Exactly half width on desktop, full width on mobile */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {HeroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "w-full h-[300px] sm:h-[400px] lg:h-full relative",
                slide.bgColor,
                index === currentSlide ? "block" : "hidden"
              )}
            >
              <img
                className="h-full w-full object-cover"
                src={slide.imagen}
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {HeroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      idx === currentSlide ? "bg-white" : "bg-white/50"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AboutUs />
      <Categories />
      <FooterHome />
    </div>
  );
};

export default Home;
