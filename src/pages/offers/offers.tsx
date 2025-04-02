import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {offers, slides} from '../../data/offers'



const Offers = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef<number | null>(null)

  const startSlideTimer = () => {
    stopSlideTimer()
    slideInterval.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  }

  useEffect(() => {
    startSlideTimer()
    return () => stopSlideTimer()
  }, [])

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    startSlideTimer()
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    startSlideTimer()
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    startSlideTimer()
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Slider */}
      <div className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="relative z-20 flex h-full items-center justify-center text-center text-white">
              <div className="max-w-3xl px-4">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{slide.title}</h2>
                <p className="mb-8 text-xl md:text-2xl">{slide.subtitle}</p>
                {/* <button className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                  Ver Ofertas
                </button> */}
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75"
          onClick={goToPrevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75"
          onClick={goToNextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
          {offers.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Ofertas Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-contain p-4"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                  {Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100)}% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                {/* POSIBLEMENTE AGREGAR EL PRECIO DE LA UNIDAD {23$xUd.} <-- ejemplo */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 line-through mr-2">${product.oldPrice.toFixed(2)}</span>
                    <span className="text-2xl font-bold text-blue-700">${product.newPrice.toFixed(2)}</span>
                  </div>
                  {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Comprar
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Offers

