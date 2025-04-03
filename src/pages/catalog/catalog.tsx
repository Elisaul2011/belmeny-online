import { useState } from "react";
import { Search, Filter, ChevronDown, ShoppingCart, Plus, Minus, X, Trash2 } from "lucide-react";
import {Product} from "../../types/catalog";
import Products from '../../data/catalog'
import { useCart } from "../../layout/cartContext"
// import { useAuth } from "../../layout/AuthContext"
// import { useNavigate } from "react-router-dom";

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
  const [quantities, setQuantities] = useState<Record<number, number>>({})
  const [errors, setErrors] = useState<Record<number, string>>({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartItems, addToCart, updateQuantity, removeFromCart, clearCart, getTotalItems, getTotalPrice } = useCart()
  // const { isAuthenticated } = useAuth()
  // const navigate = useNavigate()

  // Redirigir si no está autenticado
  // if (!isAuthenticated) {
  //   navigate("/login")
  //   return null
  // }

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

  const handleQuantityChange = (productId: number, value: number) => {
    // Limpiar error previo
    setErrors((prev) => {
      const updated = { ...prev }
      delete updated[productId]
      return updated
    })

    setQuantities((prev) => ({
      ...prev,
      [productId]: value,
    }))
  }

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1

    // Validar cantidad mínima
    if (quantity < product.minQuantity) {
      setErrors((prev) => ({
        ...prev,
        [product.id]: `Debe ingresar una cantidad mínima de ${product.minQuantity}`,
      }))
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      minQuantity: product.minQuantity,
    })

    // Resetear cantidad después de agregar
    setQuantities((prev) => {
      const updated = { ...prev }
      delete updated[product.id]
      return updated
    })

  }

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

            {/* Botón del carrito */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrito ({getTotalItems()})
            </button>

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

        {/* Modal del carrito */}
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Modal */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <ShoppingCart className="mr-2 h-5 w-5 text-blue-600" />
                    Carrito de Compras
                  </h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-500">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-4">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-lg font-medium text-gray-900">Su carrito está vacío</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Agregue productos desde nuestro catálogo para comenzar a comprar.
                      </p>
                    </div>
                  ) : (
                    <ul className="divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0 w-16 h-16">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                              <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center border rounded-md">
                                <button
                                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                  className="p-1 text-gray-500 hover:text-gray-700"
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-1 text-gray-500 hover:text-gray-700"
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                  <div className="border-t border-gray-200 p-4">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                      <p>Subtotal</p>
                      <p>${getTotalPrice().toFixed(2)}</p>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={clearCart}
                        className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100"
                      >
                        Vaciar carrito
                      </button>
                      <button className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                        Proceder al pago
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105"
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-40 md:h-64 object-contain p-2 md:p-4"
              />
              <div className="p-3 md:p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2 md:md-4 text-xs md:text-sm h-8 md:h-12 overflow-hidden">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-blue-700">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                {/* Controles de cantidad */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 mb:space-y-0 mb-2">
                  <div className="flex items-center border rounded-md justify-start sm:justify-center">
                    <button
                      onClick={() => {
                        const currentQty = quantities[product.id] || 1
                        handleQuantityChange(product.id, Math.max(product.minQuantity, currentQty - 1))
                      }}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <input
                      type="number"
                      min={product.minQuantity}
                      value={quantities[product.id] || 1}
                      onChange={(e) =>
                        handleQuantityChange(product.id, Number.parseInt(e.target.value) || product.minQuantity)
                      }
                      className="w-12 text-center border-0 focus:ring-0"
                    />
                    <button
                      onClick={() => {
                        const currentQty = quantities[product.id] || 1
                        handleQuantityChange(product.id, currentQty + 1)
                      }}
                      className="p-1 text-gray-500  hover:text-gray-700"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Agregar
                  </button>
                </div>

                {/* Mensaje de error */}
                {errors[product.id] && <p className="text-xs text-red-500 mt-1">{errors[product.id]}</p>}
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
