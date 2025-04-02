import { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import Products from '../../data/catalog'

const categories = [
  "Todas",
  "Herramientas Eléctricas",
  "Herramientas Manuales",
  "Equipos",
  "Medición",
  "Almacenamiento",
  "Soldadura",
];

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("name");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = Products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todas" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="bg-gray-50">
      <div
        className="bg-blue-700 py-16 text-center text-white"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Catálogo de Productos</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Explora nuestra amplia gama de herramientas y equipos de alta calidad
        </p>
      </div>

      {/* Catalog for Excel */}
      <div className="border-b border-blue-300 col d-flex d-none d-md-block">
        catalogos
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Filter className="h-5 w-5 mr-2 text-gray-500" />
              Filtrar
              <ChevronDown
                className={`ml-2 h-5 w-5 transform ${isFilterOpen ? "rotate-180" : ""}`}
              />
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full sm:w-auto pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="name">Ordenar por nombre</option>
              <option value="price-low">Precio: menor a mayor</option>
              <option value="price-high">Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        {/* Filter panel */}
        {isFilterOpen && (
          <div className="bg-white p-4 rounded-md shadow-md mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Categorías
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    id={`category-${category}`}
                    name="category"
                    type="radio"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-3 text-sm text-gray-700"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-contain p-4"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-700">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto h-24 w-24 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No se encontraron productos
            </h3>
            <p className="mt-1 text-gray-500">
              Intenta con otros términos de búsqueda o categorías.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
