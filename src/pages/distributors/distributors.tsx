import { MapPin } from "lucide-react";
import Distributor from "../../data/distributorsData";

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
        <h1 className="text-4xl font-bold mb-4">Distribuidores</h1>
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
              <img
                src={distributor.image}
                alt={distributor.name}
                className="w-full h-48 object-cover"
              />
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
