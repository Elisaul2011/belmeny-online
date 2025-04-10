import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Distributor from "../../data/distributorsData";
import { useState } from "react";

// Crear un componente para el slider de imágenes
const ImageSlider = ({ image }: { image: string[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % image.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + image.length) % image.length)
  }

  return (
    <div className="relative w-full h-48 overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {image.map((image, index) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Controles de navegación */}
      {image.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-75 transition-all"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
            {image.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-4 bg-white" : "w-2 bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const Distributors = () => {
  const handleMapClick = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
  };

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div
        className="bg-blue-700 py-16 text-center text-white"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Tiendas Conceptos</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Encuentra nuestras tiendas exclusivas en todo el país
        </p>
      </div>

      {/* Distributors list */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Distributor.map((distributor) => (
            <div
              key={distributor.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105"
            >
              <ImageSlider image={distributor.image}/>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  {distributor.name}
                </h3>
                <p className="text-gray-600 mb-4">{distributor.address}</p>
                {distributor.phone && (
                  <p className="text-gray-600 mb-4">{distributor.phone}</p>
                )}
                <button
                  onClick={() =>
                    handleMapClick(
                      distributor.location.lat,
                      distributor.location.lng
                    )
                  }
                  className="inline-flex items-center text-blue-700 hover:text-blue-900"
                >
                  <MapPin className="h-5 w-5 mr-1" />
                  Ver mapa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Distributors;
